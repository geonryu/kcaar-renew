import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components"
import Heading from "../global/heading";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Section = styled.section``;

const Board = styled.div`
`;
const Member = styled.div`
    min-height: 500px;
`;
const ViewPop = styled.div`position: fixed; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background-color: rgba(0,0,0,0.75)`;
const Pop = styled.div`background-color: #fff; width: 80vw; height: 80vh; overflow: scroll;`;
const Inquiry = styled.div``;
const WriteAnswer = styled.input``;
const Answer = styled.div``;
const Cancel = styled.input``;
const Regist = styled.input``;

export default function InquiryManage() {
    const [inquiry, setInquiry] = useState<any[]>([]);
    const [view, setView] = useState<any>(null);
    const [writeAns, setWriteAns] = useState(false);
    const [writeAnswer, setWriteAnswer] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'inquiry'));
        
                const documentData = querySnapshot.docs.map((doc) => {
                    return {
                    id: doc.id,
                    ...doc.data(),
                    };
                });
        
                setInquiry(documentData);
            } catch (error) {
                console.error('Error getting documents:', error);
            }
        };
        fetchData();
    }, []);

    const handleRead = (e : React.MouseEvent<HTMLDivElement>) => {
        const idx: any = e.currentTarget.getAttribute("data-idx");
        setView(inquiry[idx]);
        console.log(inquiry[idx]);
    }
    const handleAnswer = () => {
        setWriteAns(true);
    }
    const closePop = () => {
        setView(null);
        setWriteAns(false);
    }
    const onChangeTextarea = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const {
            target: {name, value}
        } = e; 
        if(name === "answer") {
            setWriteAnswer(value);
        }
    }
    const onSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log();
            const docRef = doc(db, "inquiry", view.id);
            await updateDoc(docRef, {
                ans : writeAnswer
            });
        } catch(e) {
            console.log(e);
        } finally {
            setView(null);
            setWriteAns(false);
            setWriteAnswer("");
            navigate("/admin/inquiryManagement");
        }
    }
    return (
        <Section className="py-5">
            <Container>
                <Heading labelTxt={""} titTxt1={`문의하기`} titTxt2={""} txtAlign={"left"}/>
                <Board>
                    <div className="d-flex fw-bold">
                        <div className="text-center col-2">작성자</div>
                        <div className="text-center col">제목</div>
                        <div className="text-center col-2">작성일</div>
                        <div className="text-center col-2">답변상태</div>
                    </div>
                    <Member className="border-top border-bottom">
                        
                        {
                            inquiry.map((list, i)=> {
                                const yy = new Date(list.createdAt).getFullYear();
                                const mm = new Date(list.createdAt).getMonth();
                                const dd = new Date(list.createdAt).getDate();
                                return (
                                    <div onClick={handleRead} className="d-flex py-1" key={list.createdAt + "_" + i} data-idx={i}>
                                        <div className="col-2 text-center py-2">{list.writer}</div>
                                        <div className="col py-2 text-truncate">{list.tit}</div>
                                        {/* <div className="col-3 py-2">{list.phoneNum}</div> */}
                                        <div className="col-2 text-center py-2">{`${yy}.${mm}.${dd}`}</div>
                                        <div className={`col-2 text-center py-2 ${list.ans ? null : "text-point"}`}>{list.ans ? "완료" : "미답변"}</div>
                                    </div>
                                )
                            })
                        }
                    </Member>
                </Board>
            </Container>
            {view ? (
                <ViewPop>
                    <Pop className="p-3 rounded-3">
                        <Inquiry>
                            <Heading labelTxt={""} titTxt1={`문의글 관리`} titTxt2={""} txtAlign={"left"}/>
                            <Row>
                                <Col xs={4} className="mb-3">
                                    <div className="fs-6 text-primary fw-bold mb-1">고객명</div>
                                    <input type="text" value={view ? view.writer : null} className="border w-100 p-2 rounded" readOnly />
                                </Col>
                                <Col xs={8} className="mb-3">
                                    <div className="fs-6 text-primary fw-bold mb-1">이메일</div>
                                    <input type="text" value={view ? view.email : null} className="border w-100 p-2 rounded" readOnly />
                                </Col>
                                <Col xs={12} className="mb-3">
                                    <div className="fs-6 text-primary fw-bold mb-1">문의 카테고리</div>
                                    <input type="text" value={view ? view.category : null} className="border w-100 p-2 rounded" readOnly />
                                </Col>
                                <Col xs={12} className="mb-3">
                                    <div className="fs-6 text-primary fw-bold mb-1">제목</div>
                                    <input type="text" value={view ? view.tit : null} className="border w-100 p-2 rounded" readOnly />
                                </Col>
                                <Col xs={12} className="mb-3">
                                    <div className="fs-6 text-primary fw-bold mb-1">제목</div>
                                    <textarea value={view ? view.content : null} rows={7} className="border w-100 p-2 rounded" readOnly />
                                </Col>
                                <Col xs={12} className="mb-3">
                                    <div className="fs-6 text-primary fw-bold mb-1">첨부파일</div>
                                    첨부파일 : <a href={"/"} download className={`${view.attached ? "text-primary text-decoration-underline" : "text-gray-500"}`}>{
                                        view.attachedName ? view.attachedName : "첨부파일 없음"
                                    }</a>
                                </Col>
                            </Row>
                        </Inquiry>
                        {
                            !view.ans ? (
                                <Row className={`justify-content-center ${writeAns ? "d-none" : "d-flex"}`}>
                                    <Col xs={6} md={4} lg={2}>
                                        <WriteAnswer onClick={closePop} className="w-100 py-2 bg-gray-100 fw-bold rounded" type="button" value={"닫기"} />
                                    </Col>
                                    <Col xs={6} md={4} lg={2}>
                                        <WriteAnswer onClick={handleAnswer} className="w-100 py-2 bg-gray-100 fw-bold rounded" type="button" value={"답변하기"} />
                                    </Col>
                                </Row>
                            ) : (
                                <div className="mt-5">
                                    <Heading labelTxt={""} titTxt1={`답변내역`} titTxt2={""} txtAlign={"left"}/>
                                    <textarea value={view.ans ? view.ans : null} rows={7} className="border w-100 p-2 rounded" readOnly />
                                    <Row className={`justify-content-center ${writeAns ? "d-none" : "d-flex"}`}>
                                        <Col xs={6} md={4} lg={2}>
                                            <WriteAnswer onClick={closePop} className="w-100 py-2 bg-gray-100 fw-bold rounded" type="button" value={"닫기"} />
                                        </Col>
                                        <Col xs={6} md={4} lg={2}>
                                            <WriteAnswer onClick={handleAnswer} className="w-100 py-2 bg-gray-100 fw-bold rounded" type="button" value={"수정하기"} />
                                        </Col>
                                    </Row>
                                </div>
                            )
                        }
                        <Answer className={`mt-5 ${writeAns ? "d-block" : "d-none"}`}>
                            <Heading labelTxt={""} titTxt1={`답변하기`} titTxt2={""} txtAlign={"left"}/>
                            <form onSubmit={onSubmit} action="">
                                <textarea onChange={onChangeTextarea} name="answer" className="border rounded w-100 mb-5 p-3" rows={8}></textarea>
                                <Row className="justify-content-center">
                                    <Col xs={6} md={4} lg={2}>
                                        <Cancel onClick={closePop} type="button" className="w-100 py-2 bg-gray-100 fw-bold rounded" value={"취소"} />
                                    </Col>
                                    <Col xs={6} md={4} lg={2}>
                                        <Regist type="submit" className="w-100 py-2 bg-primary text-white fw-bold rounded" value={"등록하기"} />
                                    </Col>
                                </Row>
                            </form>
                        </Answer>
                    </Pop>
                </ViewPop>
            ) : null}
        </Section>
    )
}