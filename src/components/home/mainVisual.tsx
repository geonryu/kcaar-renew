import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const Section = styled.section``;
const SliderContent = styled.div`
    & .tit > div:nth-child(2){
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
    }
    height: 320px;
    & .tit {text-shadow: 3px 3px 3px rgba(0,0,0,0.3)}
    &.bn1{
        background-image : url(https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fmain-bn-m5.jpg?alt=media&token=c8524260-c8e0-46e7-a2f7-1cf74d995f83);
    }
    &.bn2{
        background-image : url(https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fmain-bn-4.jpg?alt=media&token=cb6db73b-e811-4e25-9b1f-f0b20daed002);
    }
    &.bn3{
        background-image : url(https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fmain-bn-m2.jpg?alt=media&token=f8b662ee-9d23-4371-8a33-46a680e80bfa);
    }
    &.bn4{
        background-image : url(https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fmain-bn-m1.jpg?alt=media&token=ed968cbd-fcaf-44f0-abd8-5392cb3e9598);
    }
    &.bn5{
        background-image : url(https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fmain-bn-2408-m.jpg?alt=media&token=f5bc217e-693a-489e-b56a-644bd498afb3);
    }
    &.bn6{
        background-image : url(https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fmain-bn-img2412.jpg?alt=media&token=f0106dfa-5604-41d1-b624-90efb6d5638c);
    }
    @media(min-width: 992px){
        & .tit > div:nth-child(2){
            text-overflow: unset;
            overflow: unset;
            display: unset;
            -webkit-box-orient: unset;
            -webkit-line-clamp: unset;
        }
        height: 380px;
        &.bn1{
            background-image : url(https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fmain-bn-img5.jpg?alt=media&token=44b937b2-5df6-4f3b-b091-d997f46e617f);
        }
        &.bn2{
            background-image : url(https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fmain-bn-4.jpg?alt=media&token=cb6db73b-e811-4e25-9b1f-f0b20daed002);
        }
        &.bn3{
            background-image : url(https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fmain-bn-2.jpg?alt=media&token=dcbdd63a-6d8f-4b5b-91ff-986379578db6);
        }
        &.bn4{
            background-image : url(https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fmain-bn-1.jpg?alt=media&token=fe100266-a9fe-4cf6-ade0-3d7996f5e4aa);
        }
        &.bn5{
            background-image : url(https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fmain-bn-2408.jpg?alt=media&token=addf74b6-0717-4b8a-9142-4026a7dbf20a);
        }
        &.bn6{
            background-image : url(https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fmain-bn-2412-m.jpg?alt=media&token=cc93313a-0d31-4a8c-a8ca-c3a060010339);
        }
    }
`;
const Next = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;
const Prev = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

export default function MainVisual() {
    return (
        <Section className="py-5">
            <Container>
                <Swiper
                    loop={true}
                    slidesPerView={1}
                    modules={[Navigation]}
                    className="overflow-visible position-relative"
                    speed={600}
                    centeredSlides={true}
                    slideToClickedSlide={true}
                    spaceBetween={24}
                    navigation={
                        {
                            nextEl: ".nextBtn",
                            prevEl: ".prevBtn",
                        }
                    }
                    // breakpoints={{
                    //     768: {
                    //       slidesPerView: 3,
                    //       spaceBetween: 30,
                    //     },
                >
                    <SwiperSlide>
                        <SliderContent className="slide-inner px-3 px-md-5 py-5 bg-primary rounded-4 overflow-hidden bn6">
                            <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/docs%2F1-1_%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%80%E1%85%B3%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%E1%84%87%E1%85%A9%E1%84%80%E1%85%A9%E1%84%89%E1%85%A5-%E1%84%80%E1%85%A1%E1%84%8C%E1%85%A5%E1%86%ABv00-20240418.pdf?alt=media&token=e66a9981-189f-4c28-90d2-f8ec79cfa67d">
                                <div className="text-content text-center d-flex align-items-center justify-content-center h-100">
                                    <div className="tit fw-bold text-primary-white">
                                        <div className="fs-2 mb-3">
                                        접근성보고서 제1권 『kiosk 접근성』 발행
                                        </div>
                                        <div className="mb-5">
                                            사단법인 한국접근성평가연구원(KCAAR)에서는 장애인차별금지법에서 명시하고 있는 무인정보단말기를 이용한 재화와 용역의 정당한 편의 제공 실태를 파악하기 위하여 주요 공공시설 및 대형 일반사업장(프랜차이즈)에서의 키오스크 접근성을 검증, 평가하고 그 문제점을 진단하였다.
                                        </div>
                                        <div className="text-center text-white fw-bold text-decoration-underline">
                                            접근성보고서 다운로드(PDF)
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </SliderContent>
                        <div className="txt fs-5 text-primary-black fw-bold text-center col-md-8 mx-auto mt-3 px-md-2">
                            한국접근성평가연구원은 과학기술정보통신부 산하 한국지능정보사회진흥원이 지정한 우선구매추천을 위한 무인정보단말기 접근성 검증평가 기관으로 지정된 바 있으며, 본 조사에서도 가능한 범위에서 최대한 동일한 접근성 검증평가 방법을 적용하여 실시하였다. 장애인차별금지법에 기반한 키오스크 접근성 보고서 제1권과, 이와 별도의 부속 문서로 고령자들의 키오스크 접근성을 평가한 보고서 2부(대중교통시설, 식음료매장)를 발간하였다.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderContent className="slide-inner px-3 px-md-5 py-5 bg-primary rounded-4 overflow-hidden bn5">
                            <div className="text-content text-center d-flex align-items-center justify-content-center h-100">
                                <div className="tit fw-bold text-primary-white">
                                    <div className="fs-2 mb-3">
                                        비버웍스 모바일 앱<br/>한국접근성평가연구원 제 1호 접근성 우수 인증 취득
                                    </div>
                                    <div className="mb-5">(주)비버웍스(BeaverWorks)의 비버카페 식음료 주문용 QR 코드 모바일 앱이<br/>2024년 8월 한국접근성평가연구원의 접근성 검증 및 심사에 의하여 제 1호 모바일앱 접근성 우수 인증(++)을 취득하였습니다.</div>
                                </div>
                            </div>
                        </SliderContent>
                        <div className="txt fs-5 text-primary-black fw-bold text-center col-md-8 mx-auto mt-3 px-md-2">
                            비버카페 대학로점의 식음료 주문용 QR 코드 모바일 앱은 한국모바일접근성 지침이 요구하는 인식, 이해, 운용, 견고성 등의 모든 항목에서 95% 이상의 적합성을 인정받았으며 장애인 사용자의 사용성 또한 우수한 것으로 검증 평가되어, 최우수 등급인 모바일앱 접근성 우수 ++ 등급의 인증을 취득하였습니다. 
                            (사)한국접근성평가연구원은 W3C의 모바일 접근성 가이드라인 및 지능정보화기본법의 모바일애플리케이션콘텐츠접근성 지침에 따른 엄격하고 공정한 검증 평가를 통하여 우리나라에서 사용되는 모든 모바일 앱의 접근성 향상을 추구합니다.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderContent className="slide-inner px-3 px-md-5 py-5 bg-primary rounded-4 overflow-hidden bn1">
                            <div className="text-content text-center d-flex align-items-center justify-content-center h-100">
                                <div className="tit fw-bold text-primary-white">
                                    <div className="fs-2 mb-3">
                                        모바일 앱 접근성 우수인증제도 시행
                                    </div>
                                    {/* <div className="mb-1">식음료무인주문결제기(3.22~4.11) - 접근성 우수제품으로 우선구매 추천, NIA 인증 완료</div> */}
                                    {/* <div className="mb-1">티켓무인발권기(8.07~9.27) - 접근성 우수제품으로 우선구매 추천, NIA 인증 완료</div> */}
                                    <div className="mb-5">한국접근성평가연구원(KCAAR)에서는 모바일 앱(App)의 접근성을 검증평가하고 인증을 부여하는 민간인증제도를 시행합니다.</div>
                                    <div className="text-center text-white fw-bold text-decoration-underline">
                                        <Link to="/evaluation/mobile">더 알아보기</Link>
                                    </div>
                                </div>
                            </div>
                        </SliderContent>
                        <div className="txt fs-5 text-primary-black fw-bold text-center col-md-8 mx-auto mt-3 px-md-2">
                            모바일 앱 접근성 우수인증은 국가표준으로 지정된 모바일 앱 접근성
                            검증지침과 국제표준화기구 W3C가 제공하는 모바일 설계기준을 충족하는 앱에 대해서 접근성 우수
                            인증을 부여하는 제도입니다.<br />한국접근성평가연구원이 부여하는 인증 우수 마크를 앱의 시작화면에 표기할 수
                            있습니다.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderContent className="slide-inner px-3 px-md-5 py-5 bg-primary rounded-4 overflow-hidden bn2">
                            <div className="text-content text-center d-flex align-items-center justify-content-center h-100">
                                <div className="tit fw-bold text-primary-white">
                                    <div className="fs-2 mb-3">
                                        한국전자금융(주)<br/>
                                        <p className="fs-5">2023년 키오스크 접근성 시험평가 3종 NIA 인증 획득!</p>
                                    </div>
                                    <div className="mb-1">식음료무인주문결제기(3.22~4.11) - 접근성 우수제품으로 우선구매 추천, NIA 인증 완료</div>
                                    <div className="mb-1">티켓무인발권기(8.07~9.27) - 접근성 우수제품으로 우선구매 추천, NIA 인증 완료</div>
                                    <div className="">도시철도무인발권기(10.16~11.24) - 접근성 우수제품으로 우선구매 추천, NIA 인증 완료</div>
                                </div>
                            </div>
                        </SliderContent>
                        <div className="txt fs-5 text-primary-black fw-bold text-center col-md-8 mx-auto mt-3 px-md-2">
                            한국접근성평가연구원은 2023년도에 총 6 종의 키오스크 접근성 시험평가를 의뢰받아 총 5 종의 키오스크에 대해 과학기술정보통신부에 우선구매를 추천하였으며, 그 중 3 종의 키오스크는 2024년 1월 현재 NIA의 인증을 획득하였고, 2 종의 키오스크는 NIA의 인증심사 대기 중에 있습니다.
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderContent className="slide-inner px-3 px-md-5 py-5 bg-primary rounded-4 overflow-hidden bn3">
                            <div className="text-content text-center d-flex align-items-center justify-content-center h-100">
                                <div className="tit fw-bold text-primary-white fs-1">우선구매대상 지능정보제품<br /> 국내 1호 시험평가기관</div>
                            </div>
                        </SliderContent>
                        <div className="txt fs-5 text-primary-black fw-bold text-center col-md-8 mx-auto mt-3 px-md-2">한국접근성평가연구원은 2022년 한국지능정보사회진흥원의 우선구매 대상 지능정보제품(키오스크) 시험평가기관으로 공식 선정되었으며 국내 최초로 키오스크 시험평가를 진행한 기관입니다.</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderContent className="slide-inner px-3 px-md-5 py-5 bg-primary rounded-4 overflow-hidden bn4">
                            <div className="text-content text-center d-flex align-items-center justify-content-center h-100">
                                <div className="tit fw-bold text-primary-white fs-1">모두를 위한 디자인<br />유니버설(접근성) 디자인의 선구자</div>
                            </div>
                        </SliderContent>
                        <div className="txt fs-5 text-primary-black fw-bold text-center col-md-8 mx-auto mt-3 px-md-2">성균관대학교 시스템경영공학자 교수이자 (사)한국접근성평가연구원 이사장인 이성일 교수는 장애인 및 고령자 삶의 질 향상을 위한 기술 개발 및 접근성의 표준화를 연구하고 있으며, 유니버설 디자인과 정보통신 접근성 관련 활동을 활발히 진행중입니다.</div>
                    </SwiperSlide>
                    <Next className="nextBtn slider-navigation text-primary-white d-none d-md-flex align-items-center pe-4"><div className="d-md-flex align-items-center justify-content-center"><span className="material-symbols-outlined fw-bold fs-4 d-block">chevron_right</span></div></Next>
                    <Prev className="prevBtn slider-navigation text-primary-white d-none d-md-flex align-items-center ps-4"><div className="d-md-flex align-items-center justify-content-center"><span className="material-symbols-outlined fw-bold fs-4 d-block">chevron_left</span></div></Prev>
                </Swiper>
            </Container>
        </Section>
    )
}