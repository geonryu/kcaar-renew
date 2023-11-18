import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components"
import Heading from "../global/heading";

const Section = styled.section``;
const Wrap = styled.div``;
export default function Introduce() {
    return(
        <Section className="pt-5">
            <Heading labelTxt={"KCAAR"} titTxt1={`세상을 연결하는 작은 변화`} titTxt2={""} txtAlign={"center"}/>
            <Wrap>
                <div className="pb-5">
                    <Container>
                        <Row className="flex-md-row-reverse">
                            <Col xs={11} lg={6}>
                                <img className="rounded-4" src="https://firebasestorage.googleapis.com/v0/b/kcaar-dbf18.appspot.com/o/assets%2Fmain-bn-img1.jpg?alt=media&token=4e6383d8-ab7c-449d-ba7e-db7230054c4f&_gl=1*1pkt05h*_ga*ODgwNzAyNDA3LjE2OTI0NDA5MTM.*_ga_CW55HF8NVT*MTY5OTE3MTkyOC4xOC4wLjE2OTkxNzE5MjguNjAuMC4w" alt="" />
                            </Col>
                            <Col xs={12} lg={6} className="d-flex flex-column justify-content-center">
                                <h4 className="tit fw-bold mt-5 mt-lg-0 mb-3">접근성 평가 방법론<br />및 표준의 연구 개발</h4>
                                <div className="txt">사단법인 한국접근성평가연구원은 각종 전자정보통신 제품 및 서비스의 접근성을 향상시키기 위한 기술 표준과 이를 효과적으로 시험, 평가하는 연구방법론을 개발하고, 개발된 표준 및 방법론을 실제 제품 및 서비스에 적용하는 연구를 수행합니다.</div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="py-5 bg-blue-light">
                    <Container>
                        <Row>
                            <Col xs={11} lg={6} className="ms-auto ms-lg-0">
                                <img className="rounded-4" src="https://firebasestorage.googleapis.com/v0/b/kcaar-dbf18.appspot.com/o/assets%2Fmain-bn-img2.jpg?alt=media&token=3b7362bd-b9ed-49bb-9a9f-bdce93085992&_gl=1*pkld6*_ga*ODgwNzAyNDA3LjE2OTI0NDA5MTM.*_ga_CW55HF8NVT*MTY5OTE3MTkyOC4xOC4xLjE2OTkxNzE5NDEuNDcuMC4w" alt="" />
                            </Col>
                            <Col xs={12} lg={6} className="d-flex flex-column justify-content-center">
                                <h4 className="tit fw-bold mt-5 mt-lg-0 mb-3">접근성 시험·평가에 관한 연구와<br />결과 보고서 발행</h4>
                                <div className="txt">접근성 및 사용성 분야의 전문가들이 모여서 다양한 제품과 서비스의 접근성 시험평가 결과를 공익적 차원에서 공개함으로써 우리 사회의 전반적인 접근성 향상을 도모하고, 궁극적으로는 우리나라의 장애인과 고령자의 삶의 질 향상에 기여함을 목적으로 합니다.</div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="py-5">
                    <Container>
                        <Row className="flex-md-row-reverse">
                            <Col xs={11} lg={6}>
                                <img className="rounded-4" src="https://firebasestorage.googleapis.com/v0/b/kcaar-dbf18.appspot.com/o/assets%2Fmain-bn-img3.jpg?alt=media&token=10696e17-add7-41ff-b8dc-a1866ddb0194&_gl=1*1oo6z2l*_ga*ODgwNzAyNDA3LjE2OTI0NDA5MTM.*_ga_CW55HF8NVT*MTY5OTE3MTkyOC4xOC4xLjE2OTkxNzE5NTEuMzcuMC4w" alt="" />
                            </Col>
                            <Col xs={12} lg={6} className="d-flex flex-column justify-content-center">
                                <h4 className="tit fw-bold mt-5 mt-lg-0 mb-3">학술도서 및 접근성 관련<br />홍보물 출판 교육 사업</h4>
                                <div className="txt">사단법인 한국접근성평가연구원은 더 많은 사람들에게 전자정보통신 관련 제품과 서비스의 접근성을 보장할 수 있는 최적의 방법을 학술적으로 연구하고 교육하기 위한 구체적인 방법을 모색합니다.</div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="py-5 bg-blue-light">
                    <Container>
                        <Row>
                            <Col xs={11} lg={6} className="ms-auto ms-lg-0">
                                <img className="rounded-4" src="https://firebasestorage.googleapis.com/v0/b/kcaar-dbf18.appspot.com/o/assets%2Fmain-bn-img4.jpg?alt=media&token=efd9a14d-056d-4191-bf52-716af3ce81ce&_gl=1*nlrb1x*_ga*ODgwNzAyNDA3LjE2OTI0NDA5MTM.*_ga_CW55HF8NVT*MTY5OTE3MTkyOC4xOC4xLjE2OTkxNzE5NjAuMjguMC4w" alt="" />
                            </Col>
                            <Col xs={12} lg={6} className="d-flex flex-column justify-content-center">
                                <h4 className="tit fw-bold mt-5 mt-lg-0 mb-3">전자정보통신 제품 및 서비스에<br />대한 접근성 컨설팅</h4>
                                <div className="txt">사단법인 한국접근성평가연구원은 각종 전자정보통신 제품 및 서비스의 접근성에 대해 전문적·학술적인 접근이 어려운 기업 및 단체들을 위해 심도있고 혁신적인 인사이트로 장기적인 비전과 즉각적인 피드백을 제시합니다.</div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Wrap>
        </Section>
    )
}