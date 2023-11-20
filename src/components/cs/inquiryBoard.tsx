import styled from "styled-components"
import Heading from "../global/heading";
import { Link } from "react-router-dom";
import { Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Unsubscribe } from "firebase/auth";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

const Section = styled.section``;
const Board = styled.div`
    min-height: 300px;
`;
const Lists = styled.div``;
const List = styled.div`
    &:nth-child(2n){background-color: #f8f9fa;}
`;
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
}

export default function InquiryBoard() {
    const [boardList, setBoardList] = useState<BoardContent[]>([]) || null;
    
    useEffect(() => {
        let unsubscribe : Unsubscribe | null = null;
        const fetchBoardDatas = async() => {
            const boardQuery = query(
                collection(db, "inquiry"),
                orderBy("createdAt", "desc"),//날짜최신순
                // limit(5)
            );
    
            unsubscribe = await onSnapshot(boardQuery, (snapshot) => {
                const boardData:any = snapshot.docs.map((doc) => {
                    const { id, createdAt, tit, content, attached, attachedName, email, phoneNum, writer, writerId } = doc.data()
                    return {
                        id, createdAt, tit, content, attached, attachedName, email, phoneNum, writer, writerId
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
                            boardList.map((list) => {
                                const crtAt = new Date(list.createdAt);
                                
                                return (
                                    <List>
                                        <Link to={"/"}>
                                            <Col className="px-3 py-3 d-flex flex-wrap flex-md-nowrap">
                                                <div className="col-md-1 order-1 order-md-1 text-center me-3 me-md-0 fw-bold">-</div>
                                                <div className="col-12 col-md-8 order-4 order-md-2 text-truncate mt-2 mt-md-0">{list.tit}</div>
                                                <div className="col-md-1 order-2 order-md-3 text-center">{list.writer}</div>
                                                <div className="col-md-2 order-3 order-md-4 text-center ms-auto ms-md-0">{`${crtAt.getFullYear()}. ${crtAt.getMonth()+1}. ${crtAt.getDate()}`}</div>
                                            </Col>
                                        </Link>
                                    </List>
                                )
                            })
                        }
                    </Lists>
                </Board>
                <PostBtn className="mt-3 mt-md-5">
                    <Link to={"/contact/post"} className="d-block rounded border text-center px-3 py-1 col-12 col-md-3 mx-lg-auto">문의 작성하기</Link>
                </PostBtn>
            </Container>
        </Section>
    )
}