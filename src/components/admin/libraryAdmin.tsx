import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components"
import Heading from "../global/heading";
import PostPop from "./postPop";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Section = styled.section``;
const Btn = styled.input``;
const Board = styled.div``;
const Lists = styled.div`
    & > .row:nth-child(2n){background-color: #fafafa;}
    & .row .tit:hover{text-decoration: underline}
`;
const List = styled.div``;


export default function LibraryManage() {
    const [pop, setPop] = useState(false);
    const [library, setLibrary] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'library'));
        
                const documentData = querySnapshot.docs.map((doc) => {
                    return {
                    id: doc.id,
                    ...doc.data(),
                    };
                });
        
                setLibrary(documentData);
            } catch (error) {
                console.error('Error getting documents:', error);
            }
        };
        fetchData();
    }, []);

    const handlePop = () => {
        setPop(true);
    }
    return (
        <Section className="py-5">
            <Container>
                <Heading labelTxt={""} titTxt1={`자료실`} titTxt2={""} txtAlign={"left"}/>
                <div className="d-flex justify-content-end border-bottom pb-2">
                    <Btn onClick={handlePop} className="px-2 py-1 bg-gray-200 rounded fs-6 fw-bold ms-2" type="button" value={"글쓰기"}/>
                    <PostPop setPop={setPop} pop={pop}></PostPop>
                </div>
                <Row className="text-center fw-bold py-2">
                    <Col xs={2} className="">카테고리</Col>
                    <Col xs={5} className="">제목</Col>
                    <Col xs={2} className="">작성일</Col>
                    <Col xs={3} className="">관리</Col>
                </Row>
                <Board className="border-top border-bottom border-top">
                    <Lists>
                        
                        {
                            library.map((list, i) => {
                                const crtAt = new Date(list.createdAt);
                                const yy = crtAt.getFullYear();
                                const mm = crtAt.getMonth();
                                const dd = crtAt.getDate();
                                return (
                                    <List key={list.realCreatedAt + "_" + i}>
                                        <Row className="py-2">
                                            <Col xs={2} className="text-center">{list.category}</Col>
                                            <Col xs={5} className="text-truncate">{list.tit}</Col>
                                            <Col xs={2} className="text-center">{`${yy}.${mm}.${dd}`}</Col>
                                            <Col xs={3} className="text-center">
                                                <Btn className="px-2 py-1 bg-gray-200 rounded fs-6 fw-bold" type="button" value={"보기/수정"} />
                                                <Btn className="px-2 py-1 bg-gray-200 rounded fs-6 fw-bold ms-2" type="button" value={"삭제"} />
                                            </Col>
                                        </Row>
                                    </List>
                                )
                            })
                        }
                    </Lists>
                </Board>
            </Container>
        </Section>
    )
}