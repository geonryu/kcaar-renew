import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Heading from "../../global/heading";

const Section = styled.section``;
const Box = styled.div`
    & > div > div{
        height: 120px;
    }
    & > div > div > div{
        height: 100%;
        display: flex;
        flex-direction: column
    }
    @media (min-width: 576px) {& > div > div{height: 160px;}}
    @media (min-width: 768px) {& > div > div{height: 180px;}}
`;

export default function EvaluationSummary() {
    return (
        <Section className="py-5">
            <Container>
                <Heading labelTxt={"EVALUATION OF ACCESSIBILITIES"} titTxt1={`접근성 시험평가의 개요`} titTxt2={""} txtAlign={"center"}/>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="mb-5 mb-md-3">
                            <b>사단법인 한국접근성평가연구원</b>이 한국지능정보사회진흥원의 우선구매 대상 지능정보제품(키오스크) 시험평가기관으로 공식 선정되었습니다. 지능정보제품(키오스크)의 공공기관 조달을 위한 우선구매 추천을 원하는 기관은 한국지능정보사회진흥원(NIA) 또는 (사)한국접근성평가연구원을 통해서 접근성 시험평가를 의뢰, 신청하실 수 있으며, 그 절차는 다음과 같습니다. 최종적으로 한국지능정보사회진흥원이 (사)한국접근성평가연구원에서 완료한 시험평가 결과를 토대로 우선구매의 추천 여부를 심의, 결정하여 통보합니다.
                        </div>
                        <div className="mb-5 mb-md-0">
                            사단법인 한국접근성평가연구원이 무인정보단말기 접근성 검증에 사용하는 과학기술정보통신부의 “우선구매 대상 지능정보제품 시험평가 지침”은 국가표준 KS X 9211 무인정보단말기 접근성지침에 기반한 접근성 검증 및 심사평가 지침입니다. 현재 장애인차별금지법의 시행령에서 명시적으로 요구하고 있는 키오스크 접근성 검증기준에 부합되는 국내 유일한 시험평가 방법입니다. 즉, 우선구매 대상 지능정보제품 시험평가 지침을 통하여 키오스크에 장애 유형에 따른 불편 사항을 고려한 정당한 편의가 설계, 제공되었는지 공식적으로 검증, 확인할 수 있습니다.
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div>
                            장애인차별금지법에서는 장애인과 고령자의 무인정보단말기의 동등한 접근과 편의를 보장할 것을 요구하고 있지만, 이를 법적으로 검증, 평가하기 힘든 상황입니다. 특히 관련법에 따른 소송이나 쟁의 분야에서 “우선구매 대상 지능정보제품 시험평가 지침”에서 제공하는 접근성 검증평가 방법은 법적으로 유효한 증거능력을 인정받을 수 있는 실질적 접근성 인증 제도의 역할 및 지원이 가능합니다.
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="pt-5">
                <h3 className="fw-bold fs-5 text-center mb-5">접근성 보장을 위해 무엇을 고려해야 하나요?</h3>
                <Box className="d-flex justify-content-between flex-wrap">
                    <Row>
                        <Col xs={12} sm={6} lg={3} className="mb-4 mb-lg-0">
                            <div className="p-3 border rounded-4">
                                <div className="d-flex align-items-center">
                                    <div className="fw-bold text-blue-light fs-1 me-3 me-sm-2 me-md-3">01</div>
                                    <div>
                                        <span className="d-block fw-bold fs-6 text-primary">Perceivable</span>
                                        <div>인식의 용이성</div>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    모든 콘텐츠는 사용자가 인식할 수 있어야 합니다.
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={3} className="mb-4 mb-lg-0">
                            <div className="p-3 border rounded-4">
                                <div className="d-flex align-items-center">
                                    <div className="fw-bold text-blue-light fs-1 me-3 me-sm-2 me-md-3">02</div>
                                    <div>
                                        <span className="d-block fw-bold fs-6 text-primary">Operable</span>
                                        <div>운용의 용이성</div>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    사용자 인터페이스 구성요소는 조작 가능하고 내비게이션 할 수 있어야 합니다.
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={3} className="mb-4 mb-lg-0">
                            <div className="p-3 border rounded-4">
                                <div className="d-flex align-items-center">
                                    <div className="fw-bold text-blue-light fs-1 me-3 me-sm-2 me-md-3">03</div>
                                    <div>
                                        <span className="d-block fw-bold fs-6 text-primary">Understandable</span>
                                        <div>이해의 용이성</div>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    콘텐츠는 누구나 이해할 수 있어야 합니다.
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={3}>
                            <div className="p-3 border rounded-4">
                                <div className="d-flex align-items-center">
                                    <div className="fw-bold text-blue-light fs-1 me-3 me-sm-2 me-md-3">04</div>
                                    <div>
                                        <span className="d-block fw-bold fs-6 text-primary">Robust</span>
                                        <div>견고성</div>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    콘텐츠는 미래의 기술로도 접근할 수 있도록 견고하게 만들어야 합니다.
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Box>
            </Container>
        </Section>
    )
}