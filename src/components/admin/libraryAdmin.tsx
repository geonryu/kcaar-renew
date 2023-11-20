import { Container } from "react-bootstrap";
import styled from "styled-components"
import Heading from "../global/heading";
import { Link } from "react-router-dom";

const Section = styled.section``;
const Board = styled.div``;
const Lists = styled.div``;
const PostBtn = styled.div``;


export default function LibraryManage() {
    return (
        <Section className="py-5">
            <Container>
                <Heading labelTxt={""} titTxt1={`자료실`} titTxt2={""} txtAlign={"left"}/>
                <Board className="border-top border-bottom">
                    <Lists>
                        {
                            // boardList.map((list, i) => {
                            //     const crtAt = new Date(list.createdAt);
                                
                            //     return (
                            //         <List>
                            //             <Link to={"/"}>
                            //                 <Col className="px-3 py-3 d-flex flex-wrap flex-md-nowrap">
                            //                     <div className="col-md-1 order-1 order-md-1 text-center me-3 me-md-0 fw-bold">-</div>
                            //                     <div className="col-12 col-md-8 order-4 order-md-2 text-truncate mt-2 mt-md-0">{list.tit}</div>
                            //                     <div className="col-md-1 order-2 order-md-3 text-center">{list.writer}</div>
                            //                     <div className="col-md-2 order-3 order-md-4 text-center ms-auto ms-md-0">{`${crtAt.getFullYear()}. ${crtAt.getMonth()+1}. ${crtAt.getDate()}`}</div>
                            //                 </Col>
                            //             </Link>
                            //         </List>
                            //     )
                            // })
                        }
                    </Lists>
                </Board>
                <PostBtn className="mt-3 mt-md-5">
                    <Link to={"/admin/libraryManagement/libraryPost"} className="d-block rounded border text-center px-3 py-1 col-12 col-md-3 mx-lg-auto">문의 작성하기</Link>
                </PostBtn>
            </Container>
        </Section>
    )
}