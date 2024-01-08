import styled from "styled-components"
import Heading from "../global/heading";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Unsubscribe } from "firebase/auth";
import { collection, deleteDoc, doc, onSnapshot, orderBy, query, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Section = styled.section``;
const Board = styled.div`
    min-height: 300px;
`;
const Lists = styled.div``;
const List = styled.div``;
const PostBtn = styled.div``;

export interface BoardContent {
    tit : string;
    content : string;
    attached : string;
    attachedName : string;
    writer : string;
    writerId : string;
    category : string;
    email : string;
    id : string;
    createdAt: number;
    ans: string;
}

export default function InquiryBoard() {
    const [boardList, setBoardList] = useState<BoardContent[]>([]) || null;
    const [viewMore, setViewMore] = useState<any>("null");
    const [edit, setEdit] = useState(false);
    const [edited, setEdited] = useState("");
    const [file, setFile] = useState<File | null>(null);//File이거나 Null
    const [fileName, setFileName] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [perm, setPerm] = useState(false);

    const user = useState<any>(() => {
        const storedData = localStorage.getItem('user');
        return storedData ? JSON.parse(storedData) : false;
    });
    
    useEffect(() => {
        let unsubscribe : Unsubscribe | null = null;
        const fetchBoardDatas = async() => {
            const boardQuery = query(
                collection(db, "inquiry"),
                orderBy("createdAt", "desc"),
                // limit(5)
            );
    
            unsubscribe = await onSnapshot(boardQuery, (snapshot) => {
                const boardData:any = snapshot.docs.map((doc) => {
                    const { id, createdAt, tit, content, attached, attachedName, email, phoneNum, writer, writerId, ans } = doc.data()
                    return {
                        id, createdAt, tit, content, attached, attachedName, email, phoneNum, writer, writerId, ans
                        // id: doc.id,
                    }
                });
                setBoardList(boardData);
            });
        }
        fetchBoardDatas();
        return () => {
            unsubscribe && unsubscribe();
        }
    }, []);

    const handleViewMore = (e : React.MouseEvent<HTMLDivElement>) => {
        const idx = Number(e.currentTarget.getAttribute("data-idx"));

        setViewMore(idx);
        setEdit(false);
        if(user[0].uid === boardList[idx].writerId){
            setPerm(true);
        } else {
            setPerm(false);
        }
    }
    const handleEdit = () => {
        setEdit(true);
    }
    const handleCancel = () => {
        setEdit(false);
    }
    const handleDelete = async () => {
        const del = confirm("삭제하시겠습니까?");
        if(del && user[0].uid === boardList[viewMore].writerId) {
            try {
                const deleteTarget = boardList[viewMore].id;
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
        if(name === "edit" && user[0].uid === boardList[viewMore].writerId) {
            setEdited(value);
        }
    }
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: {name, files}
        } = e; 
        
        if(name === "editFile" && user[0].uid === boardList[viewMore].writerId) {
            if(files && files.length === 1 && files[0].size < 10 * 1024 * 1024 && user[0].uid === boardList[viewMore].writerId) {
                setFile(files[0]);
                setFileName(files[0].name);
                setError("");
            } else {
                setError("업로드하실 파일의 용량을 확인해주세요.")
            }

        } 
    }
    const onSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        const editTarget = boardList[viewMore];

        e.preventDefault();
        try {
            const docRef = doc(db, "inquiry", editTarget.id);
            await updateDoc(docRef, {
                content : edited
            });
            if(file && user[0].uid === boardList[viewMore].writerId) {
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
            navigate("/mypage");
            alert("수정되었습니다.");
        }
    }

    return (
        <Section className="py-5">
            <Container>
                <Heading labelTxt={"CONTACT"} titTxt1={`문의하기`} titTxt2={""} txtAlign={"center"}/>
                <div className="text-center mb-5">문의사항이 있으시면 언제든 알려주세요.<br/>담당자 확인 후 빠른 시일 내 답변드리겠습니다.</div>
                <div className="d-flex justify-content-end mb-3">
                    <Link to={"/mypage/qna"} className="text-gray-700 d-flex align-items-center fs-6">
                        내가 작성한 글<span className="material-symbols-outlined fs-5">chevron_right</span>
                    </Link>
                </div>
                <Board className="border-top border-bottom">
                    <Lists>
                        {
                            boardList.map((list, i) => {
                                const crtAt = new Date(list.createdAt);
                                function maskedName(name:any) {
                                    if (name.length <= 2) {
                                      return name.replace(name.substring(0, 1), "*");
                                    }
                                  
                                    return (
                                      name[0] +
                                      "*".repeat(name.substring(1, name.length - 1).length) +
                                      name[name.length - 1]
                                    );
                                }
                                
                                return (
                                    <List data-idx={i} className={`${viewMore === i ? "bg-gray-100" : ""}`} key={list.createdAt+"_"+i}>
                                        <div onClick={handleViewMore} data-idx={i} className="p-3 border-bottom d-flex flex-wrap flex-md-nowrap align-items-center">
                                            <div className={`order-2 order-md-1 text-center me-2 me-md-3 fw-bold fs-6 badge text-white ${list.ans ? "bg-primary" : "bg-gray-400"}`}>{list.ans ? "답변완료" : "답변대기"}</div>
                                            <div className="col-12 col-md-8 order-1 order-md-2 text-truncate mb-2 mb-md-0 d-flex align-items-center">{list.tit}<span className="material-symbols-outlined fs-5 ms-2 text-gray-500">lock</span></div>
                                            <div className="col-md-1 order-3 order-md-3 me-2 me-md-0 text-center">{list.writer ? maskedName(list.writer) : "***"}</div>
                                            <div className="col-md-2 order-4 order-md-4 text-center text-gray-600">{`${crtAt.getFullYear()}. ${crtAt.getMonth()+1}. ${crtAt.getDate()}`}</div>
                                        </div>
                                        <div className={`p-3 ${viewMore === i ? "d-block" : "d-none"} border-bottom`}>
                                            {
                                                perm ? (
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
                                                ) : (
                                                    <div className="text-gray-600 d-flex align-items-center"><span className="material-symbols-outlined fs-5 me-1">error</span>작성자만 확인할 수 있습니다.</div>
                                                )
                                            }
                                        </div>
                                    </List>
                                )
                            })
                        }
                    </Lists>
                </Board>
                <PostBtn className="mt-3 mt-md-5">
                    <Link to={"/contact/post"} className="d-block rounded border text-center px-3 py-1 col-12 col-md-3 mx-auto">문의 작성하기</Link>
                </PostBtn>
            </Container>
        </Section>
    )
}