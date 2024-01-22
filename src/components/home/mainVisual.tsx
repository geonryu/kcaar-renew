import { Container } from "react-bootstrap";
import styled from "styled-components";

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const Section = styled.section``;
const SliderContent = styled.div`
    height: 320px;
    & .tit {text-shadow: 3px 3px 3px rgba(0,0,0,0.3)}
    &.bn1{
        background-image : url(https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fmain-bn-4.jpg?alt=media&token=cb6db73b-e811-4e25-9b1f-f0b20daed002);
    }
    &.bn2{
        background-image : url(https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fmain-bn-m1.jpg?alt=media&token=ed968cbd-fcaf-44f0-abd8-5392cb3e9598);
    }
    &.bn3{
        background-image : url(https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fa.jpg?alt=media&token=f8b662ee-9d23-4371-8a33-46a680e80bfa);
    }
    @media(min-width: 992px){
        height: 380px;

        &.bn1{
            background-image : url(https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fmain-bn-4.jpg?alt=media&token=cb6db73b-e811-4e25-9b1f-f0b20daed002);
        }
        &.bn2{
            background-image : url(https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fmain-bn-1.jpg?alt=media&token=fe100266-a9fe-4cf6-ade0-3d7996f5e4aa);
        }
        &.bn3{
            background-image : url(https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fmain-bn-2.jpg?alt=media&token=dcbdd63a-6d8f-4b5b-91ff-986379578db6);
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
                        <SliderContent className=".slide-inner px-3 px-md-5 py-5 bg-primary rounded-4 overflow-hidden bn1">
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
                        <SliderContent className="slide-inner px-3 px-md-5 py-5 rounded-4 overflow-hidden bn2">
                            <div className="text-content text-center d-flex align-items-center justify-content-center h-100">
                                <div className="tit fw-bold text-primary-white fs-1">우선구매대상 지능정보제품<br /> 국내 1호 시험평가기관</div>
                            </div>
                        </SliderContent>
                        <div className="txt fs-5 text-primary-black fw-bold text-center col-md-8 mx-auto mt-3 px-md-2">한국접근성평가연구원은 2022년 한국지능정보사회진흥원의 우선구매 대상 지능정보제품(키오스크) 시험평가기관으로 공식 선정되었으며 국내 최초로 키오스크 시험평가를 진행한 기관입니다.</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderContent className="slide-inner px-3 px-md-5 py-5 bg-primary rounded-4 overflow-hidden bn3">
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