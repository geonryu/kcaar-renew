import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth, db, storage } from "../../firebase";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Pop = styled.div`position: fixed; width: 100%; height: 100%; top: 0; left: 0; display: flex; align-items: center; justify-content: center; background-color: rgba(255,255,255,0.7)`;
const Content = styled.div`overflow-y: scroll; width: 100%; max-width: 80vw; max-height: 90vh; background-color: #fff; box-shadow: 5px 5px 15px rgba(0,0,0,0.1)`;
const Select = styled.div`position: relative;`;
const Selected = styled.div``;
const Options = styled.div`position: absolute; top: 100%; left: 0; width: 100%; background-color: #fff;`;
const Opt = styled.button`display: block; width: 100%; text-align: left; &:hover{background-color: #eff4fe;}`;

const categories = ["공지사항", "참고자료", "공시자료", "언론보도", "미디어", "기타",];

export default function PostPop(props: any) {
    const [ isLoading, setIsLoading ] = useState("");
    const [ isPop, setIsPop] = useState(false);
    const [ seletedIndex, setSelectedIndex ] = useState(99999);
    const [ seletedValue, setSelectedValue ] = useState("카테고리 선택");
    const [createdAt, setCreatedAt] = useState(0);
    const [tit, setTit] = useState("");
    const [thumbnail, setThumbnail] = useState<File | any>(null);
    const [thumbnailName, setThumbnailName] = useState("");
    const [isRedirection, setIsRedirection] = useState(false);
    const [redirectionURL, setRedirectionURL] = useState("");
    const [content, setContent] = useState("");
    const [file1, setFile1] = useState<File | null>(null);
    const [file1Name, setFile1Name] = useState("");
    const [file2, setFile2] = useState<File | null>(null);
    const [file2Name, setFile2Name] = useState("");
    
    const navigate = useNavigate()

    const handlePop = () => {
        setIsPop(!isPop);
    }
    const handleSelect = (e : React.MouseEvent<HTMLButtonElement>) => {
        const idx = Number(e.currentTarget.getAttribute("data-idx"));
        const val = e.currentTarget.value;
        setSelectedIndex(idx);
        setSelectedValue(val);
        setIsPop(false);
    }
    const handleCancel = () => {
        props.setPop(false);
        setIsPop(false);
        setSelectedIndex(99999);
        setSelectedValue("카테고리 선택");
        setCreatedAt(0);
        setTit("");
        setThumbnail(null);
        setThumbnailName("");
        setIsRedirection(false);
        setRedirectionURL("");
        setContent("");
        setFile1(null);
        setFile1Name("");
        setFile2(null);
        setFile2Name("");
    }
    const handleCancelFile = (e : React.MouseEvent<HTMLButtonElement>) => {
        const dataFile = e.currentTarget.getAttribute("data-file");
        if(dataFile === "thumbnail") {
            setThumbnail(null);
            setThumbnailName("");
        } else if(dataFile === "attached1") {
            setFile1(null);
            setFile1Name("");
        } else if(dataFile === "attached2") { 
            setFile2(null);
            setFile2Name("");
        }
    }
    const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: {name, value}
        } = e; 
        if(name === "createdAt") {
            setCreatedAt(new Date(value).getTime());
        } else if(name === "tit") {
            setTit(value);
        } else if(name === "redirection") {
            value === "default" ? setIsRedirection(false) : setIsRedirection(true);
            setRedirectionURL("");
        } else if(name === "redirectionURL") {
            setRedirectionURL(value);
        }
    }
    const onChangeTextarea = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const {
            target: {name, value}
        } = e; 
        if(name === "content") {
            setContent(value);
        }
    }
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: {name, files}
        } = e; 
        if(name === "thumbnail") {
            if(files && files.length === 1 && files[0].size < 10 * 1024 * 1024) {
                setThumbnail(files[0]);
                setThumbnailName(files[0].name);
            }
        } else if(name === "attached1") {
            if(files && files.length === 1 && files[0].size < 10 * 1024 * 1024) {
                setFile1(files[0]);
                setFile1Name(files[0].name);
            }
        } else if(name === "attached2") {
            if(files && files.length === 1 && files[0].size < 10 * 1024 * 1024) {
                setFile2(files[0]);
                setFile2Name(files[0].name);
            }
        }
    }
    const onSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = auth.currentUser;
        const isReg = confirm("등록하시겠습니까?");
        if(!user || !isReg) return
        if(!categories) {alert("카테고리를 선택해주세요."); return};
        if(createdAt === 0) {alert("작성일을 입력해주세요."); return};
        if(!tit) {alert("제목을 입력해주세요"); return};
        setIsLoading("등록중...");
        try {
            const doc = await addDoc(collection(db, "library"), {
                category: seletedValue,
                writer : user.displayName,
                writerId : user.uid,
                tit : tit,
                content : content,
                realCreatedAt : Date.now(),
                createdAt : createdAt,
                redirectionURL : redirectionURL,
            }); //db 저장
            await updateDoc(doc, {
                id: doc.id
            });
            if(thumbnail) {
                const locationRef = ref(storage, `library/${tit}/${doc.id}`);
                const result = await uploadBytes(locationRef, thumbnail);
                const url = await getDownloadURL(result.ref);
                await updateDoc(doc, {
                    thumbnail: url,
                    thumbnailName : thumbnailName
                });
            }
            if(file1) {
                const locationRef = ref(storage, `library/${tit}/${doc.id}`);
                const result = await uploadBytes(locationRef, file1);
                const url = await getDownloadURL(result.ref);
                await updateDoc(doc, {
                    file1: url,
                    file1Name : file1Name
                });
            }
            if(file2) {
                const locationRef = ref(storage, `library/${tit}/${doc.id}`);
                const result = await uploadBytes(locationRef, file2);
                const url = await getDownloadURL(result.ref);
                await updateDoc(doc, {
                    file2: url,
                    file2Name : file2Name
                });
            }
        } catch(e) {
            console.log(e);
        } finally {
            setIsLoading("");
            navigate("/admin/libraryManagement");
        }
    }

    return(
        <Pop className={`${props.pop ? "d-flex" : "d-none"}`}>
            <Content className="p-3 rounded-4 border">
                <h4 className="text-center fw-bold fs-5 py-3">게시글 작성</h4>
                <form onSubmit={onSubmit}>
                    <Row>
                        <Select className="col col-6">
                            <label className="fs-6 fw-bold text-primary mb-1"><span className="text-point">* </span>카테고리</label>
                            <Selected onClick={handlePop} className={`py-1 px-2 rounded border d-flex justify-content-between`}>{seletedValue}<span className="material-symbols-outlined">expand_more</span></Selected>
                            <Options className={`border rounded mt-2 ${isPop ? "d-block" : "d-none"}`}>
                                {
                                    categories.map((opt, i) => {
                                        return <Opt key={"opt"+i} onClick={handleSelect} className={`py-1 px-2 ${seletedIndex === i ? "bg-primary text-white" : ""}`} data-idx={i} value={opt} name="opt" type="button">{opt}</Opt>
                                    })
                                }
                            </Options>
                        </Select>
                        <Col xs={6} className="d-flex justify-content-between flex-wrap">
                            <label htmlFor="createdAt" className="fs-6 fw-bold text-primary mb-1"><span className="text-point">* </span>작성일</label>
                            <input onChange={onChangeInput} className="w-100 py-1 px-2 border rounded" type="date" id="createdAt" name="createdAt" />
                        </Col>
                    </Row>
                    <div className="mt-3">
                        <label htmlFor="tit" className="fs-6 fw-bold text-primary mb-1"><span className="text-point">* </span>제목</label>
                        <input onChange={onChangeInput} className="w-100 py-1 px-2 border rounded" type="text" id="tit" name="tit" />
                    </div>
                    <div className="mt-3">
                        <label className="fs-6 fw-bold text-primary mb-1">썸네일</label>
                        <input onChange={onFileChange} className="d-none" type="file" id="thumbnail" name="thumbnail" />
                        <div className="d-flex align-items-center">
                            <div className="col w-100">
                                <input value={thumbnailName !== "" ? thumbnailName : "파일은 최대 10MB까지 업로드 하실 수 있습니다."} className="w-100 py-1 px-2 border rounded fs-6 text-gray-700" type="text" readOnly />
                            </div>
                            <label htmlFor="thumbnail" className="fs-6 fw-bold px-2 py-1 rounded ms-2 bg-gray-800 text-white">첨부</label>
                            <button onClick={handleCancelFile} data-file="thumbnail" type="button" className="fs-6 fw-bold px-2 py-1 rounded ms-2 bg-gray-200">삭제</button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <label className="fs-6 fw-bold text-primary mb-1"><span className="text-point">* </span>리디렉션 여부</label>
                        <div className="d-flex align-items-center">
                            <input onChange={onChangeInput} className="py-1 px-2 border rounded me-2" checked type="radio" id="redirection-false" name="redirection" />
                            <label htmlFor="redirection" className="fs-6 mb-1">리디렉션 안함</label>
                        </div>
                        <div className="d-flex align-items-center">
                            <input onChange={onChangeInput} className="py-1 px-2 border rounded me-2" type="radio" id="redirection-true" value={"default"} name="redirection" />
                            <input onChange={onChangeInput} className="w-100 py-1 px-2 border rounded fs-6" type="text" placeholder={"다음으로 리디렉션"} value={redirectionURL} disabled={isRedirection} id="redirection-true" name="redirectionURL" />
                        </div>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="content" className="fs-6 fw-bold text-primary mb-1">내용</label>
                        <textarea onChange={onChangeTextarea} className="w-100 py-1 px-2 border rounded" rows={8} id="content" name="content" />
                    </div>
                    <div className="mt-3">
                        <label className="fs-6 fw-bold text-primary mb-1">첨부파일1</label>
                        <input onChange={onFileChange} className="d-none" type="file" id="attached1" name="attached1" />
                        <div className="d-flex align-items-center">
                            <div className="col w-100">
                                <input value={file1Name !== "" ? file1Name : "파일은 최대 10MB까지 업로드 하실 수 있습니다."} className="w-100 py-1 px-2 border rounded fs-6 text-gray-700" type="text" readOnly />
                            </div>
                            <label htmlFor="attached1" className="fs-6 fw-bold px-2 py-1 rounded ms-2 bg-gray-800 text-white">첨부</label>
                            <button onClick={handleCancelFile} data-file="attached1" type="button" className="fs-6 fw-bold px-2 py-1 rounded ms-2 bg-gray-200">삭제</button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <label className="fs-6 fw-bold text-primary mb-1">첨부파일2</label>
                        <input onChange={onFileChange} className="d-none" type="file" id="attached2" name="attached2" />
                        <div className="d-flex align-items-center">
                            <div className="col w-100">
                                <input value={file2Name !== "" ? file2Name : "파일은 최대 10MB까지 업로드 하실 수 있습니다."} className="w-100 py-1 px-2 border rounded fs-6 text-gray-700" type="text" readOnly />
                            </div>
                            <label htmlFor="attached2" className="fs-6 fw-bold px-2 py-1 rounded ms-2 bg-gray-800 text-white">첨부</label>
                            <button onClick={handleCancelFile} data-file="attached2" type="button" className="fs-6 fw-bold px-2 py-1 rounded ms-2 bg-gray-200">삭제</button>
                        </div>
                    </div>
                    <div className="mt-5 d-flex justify-content-center">
                        <input onClick={handleCancel} className="py-1 px-3 fw-bold bg-gray-200 rounded" type="button" value="취소" />
                        <input className="py-1 px-3 fw-bold bg-primary text-white rounded ms-2" type="submit" value={`${isLoading !== "" ? isLoading : "등록하기"}`} />
                    </div>
                </form>
            </Content>
        </Pop>
    )
}