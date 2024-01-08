
import styled from "styled-components";
import Heading from "../../global/heading";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot, orderBy, query, updateDoc, where } from "firebase/firestore";
import { db, storage } from "../../../firebase";
import { Container } from "react-bootstrap";
import { Unsubscribe } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Section = styled.section``;

interface Post {
    id: string;
    ans: string;
    category: string;
    content: string;
    createdAt: number;
    email: string;
    phoneNum: string;
    tit: string;
    writer: string;
    writerId: string;
    attached: string;
    attachedName: string;
  }
  

export default function MyQnAList() {
    const [userPosts, setUserPosts] = useState<Post[]>([]);
    const [viewMore, setViewMore] = useState<any>("null");
    const [edit, setEdit] = useState(false);
    const [edited, setEdited] = useState("");
    const [file, setFile] = useState<File | null>(null);//File이거나 Null
    const [fileName, setFileName] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const user = useState<any>(() => {
        const storedData = localStorage.getItem('user');
        return storedData ? JSON.parse(storedData) : false;
    });

    useEffect(() => {
        let unsubscribe : Unsubscribe | null = null;
        const fetchPosts = async() => {
            const collectionRef = collection(db, 'inquiry');
            const userQuery = query(
                collectionRef, 
                where('writerId', '==', user[0].uid),
                orderBy("createdAt", "desc")
            );

            unsubscribe = await onSnapshot(userQuery, (snapshot) => {
                const posts:any = snapshot.docs.map((doc) => {
                    const { id, ans, category, content, createdAt, email, phoneNum, tit, writer, writerId, attached, attachedName } = doc.data()
                    return {
                        id, ans, category, content, createdAt, email, phoneNum, tit, writer, writerId, attached, attachedName
                    }
                });
                setUserPosts(posts);
            });
        }
        fetchPosts();
        return () => {
            unsubscribe && unsubscribe();
        }
    }, []);

    const handleViewMore = (e : React.MouseEvent<HTMLDivElement>) => {
        const idx = Number(e.currentTarget.getAttribute("data-idx"));
        setViewMore(idx);
        setEdit(false);
    }
    const handleEdit = () => {
        setEdit(true);
    }
    const handleCancel = () => {
        setEdit(false);
    }
    const handleDelete = async () => {
        const del = confirm("삭제하시겠습니까?");
        if(del) {
            try {
                const deleteTarget = userPosts[viewMore].id;
                await deleteDoc(doc(db, "inquiry", deleteTarget));
            } catch (e) {
                console.log(e);
            } finally {
                setViewMore("null");
                setEdit(false);
                navigate("/mypage/qna");
                alert("삭제되었습니다.");
            }
        } 
    }
    
    const onChangeTextarea = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const {
            target: {name, value}
        } = e; 
        if(name === "edit") {
            setEdited(value);
        }
    }
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: {name, files}
        } = e; 
        
        if(name === "editFile") {
            if(files && files.length === 1 && files[0].size < 10 * 1024 * 1024) {
                setFile(files[0]);
                setFileName(files[0].name);
                setError("");
            } else {
                setError("업로드하실 파일의 용량을 확인해주세요.")
            }

        } 
    }
    const onSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        const editTarget = userPosts[viewMore];

        e.preventDefault();
        try {
            const docRef = doc(db, "inquiry", editTarget.id);
            await updateDoc(docRef, {
                content : edited
            });
            if(file) {
                const locationRef = ref(storage, `inquiry/${editTarget.tit}/${editTarget.id}`);
                await deleteObject(locationRef);
                
                const result = await uploadBytes(locationRef, file);
                const url = await getDownloadURL(result.ref);
                await updateDoc(docRef, {
                    attached: url,
                    attachedName : file.name
                });
            }
        } catch(e) {
            console.log(e);
        } finally {
            setEdit(false);
            navigate("/mypage/qna");
            alert("수정되었습니다.");
        }
    }
    return(
        <Section className="py-5">
            <Container>
                <Heading labelTxt={"MY HISTORY"} titTxt1={`내 문의사항`} titTxt2={""} txtAlign={"left"}/>
                <div className="border-top">
                    {   
                        userPosts.map((list, i)=> {
                            const yy = new Date(list.createdAt).getFullYear();
                            const mm = new Date(list.createdAt).getMonth();
                            const dd = new Date(list.createdAt).getDate();
                            return (
                                <div key={list.createdAt + "_" + i} data-idx={i} className={`${viewMore === i ? "bg-gray-100" : ""}`}>
                                    <div onClick={handleViewMore} data-idx={i} className="d-flex flex-wrap flex-md-nowrap align-items-center p-3 border-bottom">
                                        <div className={`order-2 order-md-1 text-center me-2 me-md-3 fw-bold fs-6 badge text-white ${list.ans ? "bg-primary" : "bg-gray-400"}`}>{list.ans ? "답변완료" : "답변대기"}</div>
                                        <div className="col-12 col-md-8 order-1 order-md-2 text-truncate mb-2 mb-md-0">{list.tit}</div>
                                        <div className="col-md-1 order-3 order-md-3 me-2 me-md-0 text-center">{list.writer}</div>
                                        <div className="col-md-2 order-4 order-md-4 text-center text-gray-600">{`${yy}.${mm}.${dd}`}</div>
                                    </div>
                                    <div className={`p-3 ${viewMore === i ? "d-block" : "d-none"} border-bottom`}>
                                        {
                                            !edit ? (
                                                <div>
                                                    <div className="">{list.content}</div>
                                                    {
                                                        list.attachedName ? (
                                                            <div className="fs-6 text-gray-600 mt-2 d-flex align-items-center">
                                                                <span className="material-symbols-outlined fs-6">attach_file</span>
                                                                <span>{list.attachedName}</span>
                                                            </div>
                                                        ) : null
                                                    }
                                                    <div className="mt-3 fs-6">
                                                        <button onClick={handleEdit} className="text-gray-600">수정</button>
                                                        <span className="mx-2 text-gray-600">|</span>
                                                        <button onClick={handleDelete} className="text-gray-600">삭제</button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div>
                                                    <form onSubmit={onSubmit} action="">
                                                        <textarea onChange={onChangeTextarea} className="border w-100 rounded p-2 bg-white" name="edit" defaultValue={list.content} rows={3} />
                                                        {
                                                            list.attachedName ? (
                                                                <div>
                                                                    <label className="fs-6 d-flex align-items-center" htmlFor="editFile">
                                                                        <span className="material-symbols-outlined fs-6">attach_file</span>
                                                                        <span className="me-2 text-decoration-underline">{fileName ? fileName : list.attachedName}</span>    
                                                                        수정
                                                                    </label>
                                                                    <input onChange={onFileChange} type="file" id="editFile" name="editFile" className="d-none" />
                                                                    {error ? <div className="text-point">{error}</div> : null}
                                                                </div>
                                                            ) : null
                                                        }
                                                        <div className="text-end mt-2">
                                                            <button onClick={handleCancel} type="button" className="bg-gray-200 fs-6 fw-bold px-2 py-1 rounded me-2">취소</button>
                                                            <button type="submit" className="bg-gray-700 text-white fs-6 fw-bold px-2 py-1 rounded">수정</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </Section>
    )
}