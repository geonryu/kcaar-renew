import { Container } from "react-bootstrap";
import styled from "styled-components"
import Heading from "../global/heading";

const Section = styled.section``;
const Board = styled.div``;
const Lists = styled.div``;
// const PostBtn = styled.div``;


export default function Report() {
    return (
        <Section className="py-5">
            <Container>
                <Heading labelTxt={""} titTxt1={`오류 신고 및 건의`} titTxt2={""} txtAlign={"left"}/>
                <div className="text-center">웹사이트 운영 및 이용 중 발견된 버그사항이나 새로운 아이디어를 제보받기 위한 페이지를 제작중입니다.</div>
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
                
            </Container>
        </Section>
    )
}