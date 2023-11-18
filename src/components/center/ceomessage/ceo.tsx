import styled from "styled-components"
import Heading from "../../global/heading";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Section = styled.section``;

export default function CEO() {

    return (
        <Section className="py-5">
            <Container>
                <Heading labelTxt={"CEO MESSAGE"} titTxt1={`이사장 인사의 글`} titTxt2={""} txtAlign={"center"}/>
                <Row>
                    <Col xs={12} lg={4} className="d-flex flex-column">
                        <img className="rounded-4" src="https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fmain-bn-img1.jpg?alt=media&token=0011f5ac-6c6d-41d6-b7ac-9892564e100b" alt="연구소 전경" />
                        <Row className="my-5 mt-lg-auto">
                            <Col xs={6} lg={12} className="mb-lg-3"><Link to={"/"} className="d-block text-center py-3 rounded border text-primary fw-bold">법인 정관 전체보기</Link></Col>
                            <Col xs={6} lg={12}><Link to={"/"} className="d-block text-center py-3 rounded border text-primary fw-bold">사업자등록증 보기</Link></Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={8}>
                        <p><b>사단법인 한국접근성평가연구원</b>은 우리 사회의 <b>지능정보 제품과 서비스의 접근성 향상</b>을 위하여 보다 정확하고 효과적인 시험평가 방법을 연구하고 확산시키기 위하여 설립된 기관입니다</p>
                        <p>저희 연구원은 오랜 기간 기업의 제품과 서비스의 설계 및 개발, 사용성 및 접근성 평가 분야에서 실무를 담당하고, 대학에서 관련 연구와 표준 제정에 매진했던 전문가들로 구성되어 있습니다. 저희 구성원이 연구 개발에 참여하였던 기업과 공공기관의 지능정보화 관련 제품과 서비스는 웹과 앱 이외에 가전제품, 휴대전화기, 차량용 지능화 융합제품 등 실로 다양하고 첨단을 달리는 제품과 서비스들입니다. 저희는 이러한 모든 제품과 서비스가 <b>우리 사회의 정보취약계층인 장애인과 고령자들이 쉽게 접근하고 사용할 수 있어야 한다는 신념</b>을 갖고 있습니다. 이를 위해 저희는 보다 체계적이고 개선된 접근성 설계 방법을 제공하고, 이러한 설계와 개발이 제대로 시험, 평가받을 수 있는 환경을 조성하는 데에 최선을 다하고자 합니다. 다양한 계층의 사용자를 진지하게 배려하는 기업과 공공기관들이 의뢰하는 접근성 시험평가를 정확하고 공정하게 수행하고, 접근성의 향상을 위하여 필요한 조언을 적극 제공할 것입니다.</p>
                        <p>지금은 정부와 많은 기업들이 사회적 책무로서 환경의 보존과 지속가능성, 그리고 공공적 책임을 인지하고 있습니다. 이러한 사회적 책무는 단순히 법제도와 표준만으로 보장되거나 해결되지 못합니다. 법제도와 표준에 명문화되어 있는 그 개념과 의도가 손에 닿는 제품과 서비스에 제대로 반영되고 현실에 맞도록 설계에 적용되어야 합니다. 특히 접근성에 있어서는 모든 기업과 공공기관이 진지한 노력을 기울여야 합니다. 저희 한국접근성평가연구원은 그러한 진지한 노력을 적극적으로 뒷받침하고 지원할 준비가 되어 있습니다. 우리 사회에서 제공되는 <b>모든 제품과 서비스를 누구나 쉽게 접근하고 사용하여 다같이 높은 삶의 질을 공평</b>하게 누릴 수 있도록 저희는 그 책임을 다하겠습니다.</p>
                        <p className="text-end">
                            사단법인 한국접근성평가연구원 이사장<br/>
                            <b className="fs-5">이 성 일</b>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}