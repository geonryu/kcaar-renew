import { Accordion, AccordionHeader, AccordionItem, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Heading from "../../global/heading";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import { auth } from "../../../firebase";

const Section = styled.section``;

export default function CenterSummary() {
    const user = auth.currentUser;
    console.log(user);
    return (
        <Section className="py-5 bg-blue-light">
            <Container>
                <Heading labelTxt={"CEO MESSAGE"} titTxt1={`이사장 인사의 글`} titTxt2={""} txtAlign={"center"}/>
                <Row className="align-items-center">
                    <Col xs={12} md={6} className="mb-5 mb-md-0">
                        <h4 className="tit fw-bold mb-3">한국접근성평가연구원는 어떤 일을 하나요?</h4>
                        <div className="text">
                            한국접근성평가연구원은 가전제품이나 전자정보통신 제품 및 서비스 접근성의 시험 평가 방법을 연구하고 표준을 개발합니다. 접근성 분야의 연구자와 전문가가 직접 평가에 참여하여 제품과 서비스의 접근성을 평가하고 보고서를 발행합니다. 또한 제품과 서비스에 대한 접근성 진단을 토대로 접근성 관련 컨설팅과 교육을 진행하여 더 많은 사람들이 제한없이 이용할 수 있도록 최적의 방법을 제시합니다.
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <Accordion defaultActiveKey={"0"}>
                            <AccordionItem eventKey="0">
                                <AccordionHeader className="fw-bold">
                                    접근성 평가 방법론 및 표준의 연구 개발
                                </AccordionHeader>
                                <AccordionBody>
                                    사단법인 한국접근성평가연구원은 각종 전자정보통신 제품 및 서비스의 접근성을 향상시키기 위한 기술 표준과 이를 효과적으로 시험, 평가하는 연구방법론을 개발하고, 개발된 표준 및 방법론을 실제 제품 및 서비스에 적용하는 연구를 수행합니다.
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem eventKey="1">
                                <AccordionHeader className="fw-bold">
                                    접근성 시험·평가에 관한 연구와 결과 보고서 발행
                                </AccordionHeader>
                                <AccordionBody>
                                    접근성 및 사용성 분야의 전문가들이 모여서 다양한 제품과 서비스의 접근성 시험평가 결과를 공익적 차원에서 공개함으로써 우리 사회의 전반적인 접근성 향상을 도모하고, 궁극적으로는 우리나라의 장애인과 고령자의 삶의 질 향상에 기여함을 목적으로 합니다.
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem eventKey="2">
                                <AccordionHeader className="fw-bold">
                                    학술도서 및 접근성 관련 홍보물 출판 교육 사업
                                </AccordionHeader>
                                <AccordionBody>
                                  사단법인 한국접근성평가연구원은 더 많은 사람들에게 전자정보통신 관련 제품과 서비스의 접근성을 보장할 수 있는 최적의 방법을 학술적으로 연구하고 교육하기 위한 구체적인 방법을 모색합니다.
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem eventKey="3">
                                <AccordionHeader className="fw-bold">
                                    전자정보통신 제품 및 서비스에 대한 접근성 컨설팅
                                </AccordionHeader>
                                <AccordionBody>
                                    사단법인 한국접근성평가연구원은 각종 전자정보통신 제품 및 서비스의 접근성에 대해 전문적·학술적인 접근이 어려운 기업 및 단체들을 위해 심도있고 혁신적인 인사이트로 장기적인 비전과 즉각적인 피드백을 제시합니다.
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}