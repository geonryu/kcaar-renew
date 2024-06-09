import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Heading from "../../global/heading";

const Section = styled.section``;

export default function MobileCertSystem() {
    return <Section className="py-5">
        <Container>
            <Heading labelTxt={"Mobile Application Certification System"} titTxt1={`모바일 앱 인증제도`} titTxt2={""} txtAlign={"center"}/>
            <Row>
                <Col xs="6" className="mx-auto"><img className="mx-auto d-block" src="https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fmob-app-accessibility-mark.svg?alt=media&token=11c0b715-df0f-4ef9-90b3-e06438a30628" alt="" /></Col>
                <Col xs="12" className="mt-5">
                    한국접근성평가연구원(KCAAR)에서는 모바일 앱(App)의 접근성을 검증평가하고 인증을 부여하는 민간인증제도를 시행합니다.<br/><br/>
                    모바일 앱 접근성 우수인증은 국가표준으로 지정된 모바일 앱 접근성 검증지침과 국제표준화기구 W3C가 제공하는 모바일 설계기준을 충족하는 앱에 대해서 접근성 우수 인증을 부여하는 제도입니다. 검증평가 및 인증 대상은 스마트폰과 태블릿 등에서 제공하는 모든 유형의 앱(웹 기반 앱 포함)이 해당됩니다.<br/><br/>
                    모바일 앱 접근성 우수인증은 2년 또는 새로운 버전을 업그레이드할 때까지 유효하며, 한국접근성평가연구원이 부여하는 인증 우수 마크를 앱의 시작화면에 표기할 수 있습니다. 모바일 앱 접근성 우수인증을 위한 검증평가 기준은 아래의 링크에서 확인할 수 있습니다.
                    <div className="text-center mt-5 d-flex align-items-center border-bottom border-top py-2">
                        <div className="fs-6 fw-bold text-gray-800 me-2">검증평가 기준 내려받기</div>
                        <div className="text-primary">
                            <a className="d-flex align-items-center justify-content-center" href="https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/docs%2F%E1%84%86%E1%85%A9%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%80%E1%85%B3%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%20%E1%84%89%E1%85%B5%E1%84%92%E1%85%A5%E1%86%B7%E1%84%91%E1%85%A7%E1%86%BC%E1%84%80%E1%85%A1%E1%84%92%E1%85%A1%E1%86%BC%E1%84%86%E1%85%A9%E1%86%A8_20240607.pdf?alt=media&token=698ab180-ca3a-4319-94d9-4c68267c0e98">[PDF]모바일 접근성 시험평가 항목 <span className="material-symbols-outlined">download</span></a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </Section>
}