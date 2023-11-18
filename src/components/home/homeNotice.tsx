import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components"
import Heading from "../global/heading";
import { Link } from "react-router-dom";

const Section = styled.section``;
const Table = styled.div``;
const Thead = styled.div`
    border-bottom: 1px solid #000
`;
const Tbody = styled.div`
    & > div:last-child{border-bottom: 1px solid #000 !important;}
`;

export default function HomeNotice() {
    return (
        <Section className="py-5">
            <Container>
                <Heading labelTxt={"NEWS & NOTICE"} titTxt1={`한국접근성평가연구원의 소식`} titTxt2={""} txtAlign={"center"}/>
                <Row>
                    <Col xs={12} md={6} className="mb-5 mb-md-0">
                        <Table>
                            <Thead className="d-flex align-items-center justify-content-between py-3">
                                <h3 className="fs-5 fw-bold">공지사항</h3>
                                <Link className="text-primary d-flex align-items center fw-bold" to={"/"}>
                                    더 보기
                                    <span className="material-symbols-outlined">add</span>
                                </Link>
                            </Thead>
                            <Tbody>
                                <div className="border-bottom">
                                    <Link to={"/"} className="d-flex align-items center justify-content-between py-3">
                                        <div className="col-9 text-truncate">asdasdadasdlkjsadflkjshldkfjhsakjdfhaasdasdasasassdsasdaaddds</div>
                                        <div className="col-2 text-end">2023.11.27</div>
                                    </Link>
                                </div>
                                <div className="border-bottom">
                                    <Link to={"/"} className="d-flex align-items center justify-content-between py-3">
                                        <div className="col-9 text-truncate">asdasdadasdlkjsadflkjshldkfjhsakjdfhaasdasdasasassdsasdaaddds</div>
                                        <div className="col-2 text-end">2023.11.27</div>
                                    </Link>
                                </div>
                                <div className="border-bottom">
                                    <Link to={"/"} className="d-flex align-items center justify-content-between py-3">
                                        <div className="col-9 text-truncate">asdasdadasdlkjsadflkjshldkfjhsakjdfhaasdasdasasassdsasdaaddds</div>
                                        <div className="col-2 text-end">2023.11.27</div>
                                    </Link>
                                </div>
                            </Tbody>
                        </Table>
                    </Col>
                    <Col xs={12} md={6}>
                    <Table>
                            <Thead className="d-flex align-items-center justify-content-between py-3">
                                <h3 className="fs-5 fw-bold">새 소식</h3>
                                <Link className="text-primary d-flex align-items center fw-bold" to={"/"}>
                                    더 보기
                                    <span className="material-symbols-outlined">add</span>
                                </Link>
                            </Thead>
                            <Tbody>
                                <div className="border-bottom">
                                    <Link to={"/"} className="d-flex align-items center justify-content-between py-3">
                                        <div className="col-9 text-truncate">asdasdadasdlkjsadflkjshldkfjhsakjdfhaasdasdasasassdsasdaaddds</div>
                                        <div className="col-2 text-end">2023.11.27</div>
                                    </Link>
                                </div>
                                <div className="border-bottom">
                                    <Link to={"/"} className="d-flex align-items center justify-content-between py-3">
                                        <div className="col-9 text-truncate">asdasdadasdlkjsadflkjshldkfjhsakjdfhaasdasdasasassdsasdaaddds</div>
                                        <div className="col-2 text-end">2023.11.27</div>
                                    </Link>
                                </div>
                                <div className="border-bottom">
                                    <Link to={"/"} className="d-flex align-items center justify-content-between py-3">
                                        <div className="col-9 text-truncate">asdasdadasdlkjsadflkjshldkfjhsakjdfhaasdasdasasassdsasdaaddds</div>
                                        <div className="col-2 text-end">2023.11.27</div>
                                    </Link>
                                </div>
                            </Tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}