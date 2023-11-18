import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components"

const Footer = styled.footer`
    border-top: 2px solid #007aff;
`;

export default function GlobalFooter() {
    return(
        <Footer className="py-5">
            <Container>
                <Row className="justify-content-between">
                    <Col xs={6} md={3} className="mx-auto mx-md-0 mb-3">
                        <h2 className="text-center"><a href="#"><img className="h-100" src="https://firebasestorage.googleapis.com/v0/b/kcaar-dbf18.appspot.com/o/assets%2Fkcaar-logo.svg?alt=media&token=b49d8da2-7790-4c92-b523-23bba8c75a2d&_gl=1*1km8rig*_ga*ODgwNzAyNDA3LjE2OTI0NDA5MTM.*_ga_CW55HF8NVT*MTY5OTE2Njc4MC4xNy4xLjE2OTkxNjg0OTIuMzYuMC4w" alt="한국접근성평가연구원" /></a></h2>
                    </Col>
                    <Col xs={12} md={9} lg={8}>
                        <ul className="p-0 fw-bold d-flex justify-content-center justify-content-md-start">
                            <li className=""><a href="#">개인정보처리방침</a></li>
                            <li className="ms-3"><a href="#">이용약관</a></li>
                        </ul>
                        <address className="">
                            (사)한국접근성평가연구원 서울 종로구 대학로8길 26, 6층 (동숭동, 예향빌딩)<br />
                            <b>사업자등록번호</b> 139-82-03219 | <b>대표자</b> 이성일 |<br />
                            <b>eMail</b> kcaar@kcaa.re.kr | <b>대표전화</b> 02-747-7601, 010-2629-2477<br />
                            <span className="d-block mt-3 text-gray-600">COPYRIGHT©KOREA ACCESSIBILITY RESEARCH & EVALUATION ALL RIGHTS RESERVED.</span>
                        </address>
                    </Col>
                </Row>
            </Container>
        </Footer>
    )
}