import styled from "styled-components"
import Heading from "../../global/heading";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Section = styled.section``;

export default function BasicLaw() {
    return (
        <Section className="py-5 bg-blue-light">
            <Container>
                <Heading labelTxt={"Framework Act On Intelligent Informatization"} titTxt1={`지능정보화기본법이란?`} titTxt2={""} txtAlign={"center"}/>
                <Row className="align-items-center mb-5">
                    <Col xs={12} md={6}>
                        <img className="col-8 col-md-12 col-lg-8 mx-auto" src="https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fbasic-law1.png?alt=media&token=9e291ab0-76b8-40d0-ad92-4f9eab7bf814" alt="국가기관 및 지방자치단체 및 공공기관" />
                    </Col>
                    <Col xs={12} md={6} className="mt-3 mt-md-0">
                        <div className="mb-3 fw-bold fs-5 text-center text-md-start">국가기관ㆍ지방자치단체 및 공공기관</div>
                        <div>국가기관등에서는 정보통신망을 이용한 정보와 서비스를 제공할 때, 장애인과 고령자가 웹사이트나 이동통신단말장치가의 응용 소프트웨어와 같은 유ㆍ무선 정보통신을 쉽게 이용할 수 있도록 접근성을 보장하여야 합니다.</div>
                    </Col>
                </Row>
                <Row className="align-items-center mb-5 flex-row-reverse">
                    <Col xs={12} md={6}>
                        <img className="col-8 col-md-12 col-lg-8 mx-auto" src="https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fbasic-law2.png?alt=media&token=9829f4ec-1b52-4cb9-9653-6cfcf67e2adc" alt="제품 및 서비스의 제작자 또는 제공자" />
                    </Col>
                    <Col xs={12} md={6} className="mt-3 mt-md-0">
                        <div className="mb-3 fw-bold fs-5 text-center text-md-start">제품 및 서비스의 제작자 또는 제공자</div>
                        <div>지능정보서비스 제공자는 해당 서비스를 제공할 시, 장애인과 고령자 등의 접근과 이용의 편익을 증진하기 위한 노력을 하여야 합니다. 또한 정보통신 또는 지능정보 기술 관련 제조업자 역시 관련 기기와 소프트웨어를 설계, 제작, 가공할 때 접근성을 고려하여야 하며 별도의 보조기구와도 호환될 수 있게 노력하여야 합니다.</div>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col xs={12} md={6}>
                        <img className="col-8 col-md-12 col-lg-8 mx-auto" src="https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fbasic-law3.png?alt=media&token=ba2c45dc-945c-49c4-89cc-1c63252668b1" alt="정보통신접근성의 품질인증 방법" />
                    </Col>
                    <Col xs={12} md={6} className="mt-3 mt-md-0">
                        <div className="mb-3 fw-bold fs-5 text-center text-md-start">정보통신접근성의 품질인증 방법</div>
                        <div>정보통신 접근성의 품질인증은 본 시행령 제47조제2항에 따라 지정된 인증기관을 통해서만 가능합니다. 인증평가를 받게 되면 정보통신접근성 품질인증을 받은 사실을 홍보할 수 있게 됩니다. 부정한 방법으로 정보통신접근성 품질 인증을 받거나, 제5항에 따른 정보통신접근성 품질인증 기준을 지키지 않은 경우는 인증이 취소되게 됩니다.</div>
                    </Col>
                </Row>
            </Container>
            <div className="text-primary text-center fw-bold mt-5"><Link to={"https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%A7%80%EB%8A%A5%EC%A0%95%EB%B3%B4%ED%99%94%EA%B8%B0%EB%B3%B8%EB%B2%95/(20220721,18298,20210720)/%EC%A0%9C46%EC%A1%B0"} target="_blank" className="text-decoration-underline">『 지능정보화기본법』 전문보기</Link></div>
        </Section>
    )
}