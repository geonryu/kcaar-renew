import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section``;

export default function MypageNavigation() {
    return(
        <Section className="pt-5">
            <Col className="d-flex text-start text-md-center">
                <div><Link to={"/mypage/myInformation"} className="d-block px-3 py-1 border rounded-pill me-2">가입정보</Link></div>
                <div><Link to={"/mypage/qna"} className="d-block px-3 py-1 border rounded-pill">내 문의사항</Link></div>
            </Col>
        </Section>
    );
}