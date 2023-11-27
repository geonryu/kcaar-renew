import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section``;

export default function MoreInformation() {
    return (
        <Section className="py-5 bg-blue-light">
            <Container className="d-flex justify-content-between">
                <Row>
                    <Col xs={12} md={4} className="mb-3 mb-md-0">
                        <Link to={"/evaluation/accessibility"} className="bg-white h-100 p-3 rounded-4 d-flex flex-column">
                            <div className="fs-5 fw-bold mb-3">
                                <span className="fs-6 d-block text-primary">Evaluation</span>
                                접근성시험평가 안내
                            </div>
                            <div>
                                접근성 시험평가의 절차와 신청 방법에 대한 안내입니다. 아래를 눌러 확인해보세요.
                            </div>
                            <div className="mt-auto text-end text-md-start">
                                <div className="d-inline-block mt-3 fw-bold px-3 py-1 rounded-pill bg-primary text-white">더 알아보기</div>
                            </div>
                        </Link>
                    </Col>
                    <Col xs={12} md={4} className="mb-3 mb-md-0">
                        <Link to={"/contact"} className="bg-white h-100 p-3 rounded-4 d-flex flex-column">
                            <div className="fs-5 fw-bold mb-3">
                                <span className="fs-6 d-block text-primary">Evaluation</span>
                                <div>이용 및 의뢰 문의</div>
                            </div>
                            <div>
                                접근성 관련 컨설팅이나 접근성 시험평가 의뢰 등 서비스 요청을 위한 신청서 페이지로 이동합니다.
                            </div>
                            <div className="mt-auto text-end text-md-start">
                                <div className="d-inline-block mt-3 fw-bold px-3 py-1 rounded-pill bg-primary text-white">문의하기</div>
                            </div>
                        </Link>
                    </Col>
                    <Col xs={12} md={4} className="">
                        <Link to={"/center/location"} className="bg-white h-100 p-3 rounded-4 d-flex flex-column">
                            <div className="fs-5 fw-bold mb-3">
                                <span className="fs-6 d-block text-primary">Evaluation</span>
                                <div>오시는 길</div>
                            </div>
                            <div>
                                연구소의 위치와 오시는 방법을 안내해드립니다.
                            </div>
                            <div className="mt-auto text-end text-md-start">
                                <div className="d-inline-block mt-3 fw-bold px-3 py-1 rounded-pill bg-primary text-white">더 알아보기</div>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}