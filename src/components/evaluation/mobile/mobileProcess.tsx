import styled from "styled-components"
import Heading from "../../global/heading";
import { Col, Container, Row } from "react-bootstrap";

const Section = styled.section``;
const Process = styled.ul`
    width: 100%;
    & > li{
        display: flex;
    }
    & > li::before{
        content: '';
        display: block;
        margin-right: 4px;
        width: 6px;
        height: 6px;
        margin-top: 7px;
        background-color: #007aff;
        flex-shrink: 0;
    }
`;
const IcoThumb = styled.div`
    aspect-ratio: 1 / 1;
    height: 100px;
    & img{
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;

// const Download = styled.div`
//     width: max-content;
//     & a {
//         border: 1px solid rgb(0, 122, 255);
//         color: rgb(0, 122, 255);
//     }

//     &:hover a{
//         color: rgb(255,255,255);
//         background-color: rgb(0, 122, 255);
//     }
// `;

export default function MobileProcess() {
    return (
        <Section className="py-5">
            <Container>
                <Heading labelTxt={"Process for Mobile Accessibility Evaluation"} titTxt1={`모바일 접근성 심사평가 절차`} titTxt2={""} txtAlign={"center"}/>
                <div className="text-center col-12 col-md-10 mx-auto">
                    사단법인 한국접근성평가연구원의 모바일 접근성 심사평가를 의뢰하면 다음과 같은 절차에 의해서 진행됩니다.
                </div>
                <Row className="mt-5">
                    <Col xs={12} className="py-5 px-3 px-lg-5 bg-blue-light mb-3">
                        <IcoThumb className="rounded-4 bg-white p-3"><img src="https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fprocess1.png?alt=media&token=2ff741a9-9b36-4c13-8482-96123604181f" alt="" /></IcoThumb>
                        <h3 className="fw-bold justify-content-center text-primary mt-3">1. 신청서접수</h3>
                        <div className="text-start">
                            <Process className="p-0 col-11">
                                <li className="mb-2">연구원 홈페이지 및 이메일로 신청 가능</li>
                                <li className="mb-2">신규신청 및 갱신신청 구분 신청 </li>
                                <li className="mb-2">신청 기관 담당자가 홈페이지에서 로그인하여 직접 신청</li>
                                <li>제출서류: 시험평가신청서, 제품설명서, 사용자취급설명서</li>
                            </Process>
                            {/* <Download>
                                <a href="https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/docs%2F%E1%84%8B%E1%85%AE%E1%84%89%E1%85%A5%E1%86%AB%E1%84%80%E1%85%AE%E1%84%86%E1%85%A2%E1%84%83%E1%85%A2%E1%84%89%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%B5%E1%84%82%E1%85%B3%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A6%E1%84%91%E1%85%AE%E1%86%B7%20%E1%84%89%E1%85%B5%E1%84%92%E1%85%A5%E1%86%B7%E1%84%91%E1%85%A7%E1%86%BC%E1%84%80%E1%85%A1%20%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8E%E1%85%A5%E1%86%BC%E1%84%89%E1%85%A5.pdf?alt=media&amp;token=ddeffadf-bee0-48fb-9c29-88493373e904" download="우선구매대상지능정보제품 시험평가 신청서" target="_blank" className="d-flex align-items-center py-2 px-3 rounded-pill fs-6 fw-bold"><span className="material-symbols-outlined me-2 d-block">download</span>[PDF] 신청서 내려받기</a>
                            </Download> */}
                        </div>
                    </Col>
                    <Col xs={12} className="py-5 px-3 px-lg-5 mb-3">
                        <IcoThumb className="rounded-4 bg-blue-light p-3"><img src="https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fprocess2.png?alt=media&token=6f797818-460f-4324-b5ff-e6e63e013e5d" alt="" /></IcoThumb>
                        <h3 className="fw-bold fw-bold justify-content-center text-primary mt-3">2. 서면심사</h3>
                        <div className="text-start">
                            <Process className="p-0 col-11">
                                <li className="mb-2">신청서 및 접근성 기준 충족 증명서류 등 제출 서류 검토 후 최종 접수 여부 결정</li>
                                <li className="mb-2">허위 기제, 정보 누락 등이 있는 경우 신청 반려</li>
                                <li>서면심사 결과가 이상 없으면 접수 완료 안내 및 수수료 납부</li>
                            </Process>
                        </div>
                    </Col>
                    <Col xs={12} className="py-5 px-3 px-lg-5 mb-3 bg-blue-light">
                        <IcoThumb className="rounded-4 bg-white p-3"><img src="https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fprocess3.png?alt=media&token=8d5c3dfd-ed8b-46dd-9166-d061740e6cbc" alt="" /></IcoThumb>
                        <h3 className="fw-bold fw-bold justify-content-center text-primary mt-3">3. 심사평가</h3>
                        <div className="text-start">
                            <Process className="p-0 col-11">
                                <li className="mb-2">수수료 납부가 완료되면 기술평가 진행</li>
                                <li className="mb-2">기술평가는 전문가심사 및 사용자심사로 구성</li>
                                <li className="mb-2">1차 전문가심사 후 경미한 오류로 불합격 시 수정/보완 기회가 부여되며, 수정/보완 후 2차 전문가심사 및 사용자심사 진행</li>
                                <li>전문가심사 + 사용자심사 완료 후 결과 통보</li>
                            </Process>
                            <ul className="p-0 fw-bold mt-2 w-100">
                                <li className="fs-6 text-primary">※ 결과는 신청 기관과 한국지능정보사회진흥원에 동시 통보됨</li>
                                <li className="fs-6 text-primary">※ 연구원에서는 신청 기관의 접근성 심사평가 결과를 외부에 공표하지 않으며, 접근성 심사평가 결과에 대한 일체의 인증을 직접 제공하지 않음</li>
                            </ul>
                        </div>
                        {/* <Download><a href="https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/docs%2F%E1%84%87%E1%85%A7%E1%86%AF%E1%84%91%E1%85%AD4.%20%E1%84%8B%E1%85%AE%E1%84%89%E1%85%A5%E1%86%AB%E1%84%80%E1%85%AE%E1%84%86%E1%85%A2%E1%84%83%E1%85%A2%E1%84%89%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%B5%E1%84%82%E1%85%B3%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A6%E1%84%91%E1%85%AE%E1%86%B7%20%E1%84%89%E1%85%B5%E1%84%92%E1%85%A5%E1%86%B7%E1%84%91%E1%85%A7%E1%86%BC%E1%84%80%E1%85%A1%20%E1%84%89%E1%85%A6%E1%84%87%E1%85%AE%E1%84%80%E1%85%B5%E1%84%8C%E1%85%AE%E1%86%AB.pdf?alt=media&amp;token=cda4a93e-b6fa-4105-81e6-455562b3ca43" download="우선구매대상지능정보제품 시험평가 신청서" target="_blank" className="d-flex align-items-center py-2 px-3 rounded-pill fs-6 fw-bold"><span className="material-symbols-outlined me-2 d-block">download</span>[PDF] 평가 세부기준 내려받기</a></Download> */}
                    </Col>
                    <Col xs={12} className="py-5 px-3 px-lg-5">
                        <IcoThumb className="rounded-4 bg-blue-light p-3"><img src="https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fprocess4.png?alt=media&token=a6c48538-2f1c-43d7-8ac0-24ca01b9d59b" alt="" /></IcoThumb>
                        <h3 className="fw-bold fw-bold justify-content-center text-primary mt-3">4. 추천</h3>
                        <div className="text-start">
                            <Process className="p-0 col-11">
                                <li className="mb-2">연구원 홈페이지 및 이메일로 신청 가능</li>
                                <li className="mb-2">신규신청 및 갱신신청 구분 신청 </li>
                                <li className="mb-2">신청 기관 담당자가 홈페이지에서 로그인하여 직접 신청</li>
                                <li>제출서류: 시험평가신청서, 제품설명서, 사용자취급설명서</li>
                            </Process>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}