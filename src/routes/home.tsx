import styled from "styled-components";
import { auth } from "../firebase";

export default function Home() {
    return (
        <div>
            <section className="main-visual py-5 overflow-hidden">
                <div className="container">
                    <div className="slider swiper overflow-visible" id="mainVisual">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide slide-item">
                                <div className=".slide-inner px-3 px-md-5 py-5 bg-primary rounded h-100 overflow-hidden">
                                    <div className="text-content px-3 px-md-5 px-md-5 rounded">
                                        <div className="tit fw-bold text-primary-white fs-3 pt-4 px-md-2 mb-3">우선구매대상 지능정보제품<br /> 국내 1호 시험평가기관</div>
                                        <div className="txt fx-5 text-primary-white px-md-2">한국접근성평가연구원은 2022년 한국지능정보사회진흥원의 우선구매 대상 지능정보제품(키오스크) 시험평가기관으로 공식 선정되었으며 국내 최초로 키오스크 시험평가를 진행한 기관입니다.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide slide-item container">
                                <div className=".slide-inner px-3 px-md-5 py-5 bg-primary rounded h-100 overflow-hidden">
                                    <div className="text-content px-3 px-md-5 px-md-5 rounded">
                                        <div className="tit fw-bold text-primary-white fs-3 pt-4 px-md-2 mb-3">모두를 위한 디자인<br />유니버설(접근성) 디자인의 선구자</div>
                                        <div className="txt fx-5 text-primary-white px-md-2">성균관대학교 시스템경영공학자 교수이자 (사)한국접근성평가연구원 이사장인 이성일 교수는 장애인 및 고령자 삶의 질 향상을 위한 기술 개발 및 접근성의 표준화를 연구하고 있으며, 유니버설 디자인과 정보통신 접근성 관련 활동을 활발히 진행중입니다.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide slide-item container">
                                <div className=".slide-inner px-3 px-md-5 py-5 bg-primary rounded h-100 overflow-hidden">
                                    <div className="text-content px-3 px-md-5 px-md-5 rounded">
                                        <div className="tit fw-bold text-primary-white fs-3 pt-4 px-md-2 mb-3">LG전자 키오스크 평가기관</div>
                                        <div className="txt fx-5 text-primary-white px-md-2">한국접근성평가연구원은 우선구매대상 지능정보제품 검증서를 취득한 LG전자 키오스크 제품의 국내 최초 시험평가 기관입니다.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-next slider-navigation text-primary-white d-none d-md-flex align-items-center pe-4"><div className="d-md-flex align-items-center justify-content-center"><span className="material-symbols-outlined fw-bold fs-4 d-block">chevron_right</span></div></div>
                        <div className="btn-prev slider-navigation text-primary-white d-none d-md-flex align-items-center ps-4"><div className="d-md-flex align-items-center justify-content-center"><span className="material-symbols-outlined fw-bold fs-4 d-block">chevron_left</span></div></div>
                    </div>
                    <div className="dots d-flex justify-content-center py-3"></div>
                </div>
                <script>
                    {/* const mainSlider = new Swiper("#mainVisual", {
                        spaceBetween : "20",
                        centeredSlides: true,
                        slidesPerView : 1,
                        loop: true,
                        navigation: {
                            nextEl: ".main-visual .btn-next",
                            prevEl: ".main-visual .btn-prev",
                        },
                        pagination: {
                            el: ".main-visual .dots",
                        },
                    }); */}
                </script>
            </section>
            <section className="intro py-5">
                <div className="container">
                    <h3 className="fw-bold">
                        <span className="fs-6 d-block text-primary mb-1 fw-bold">KCAAR</span>
                        세상을 연결하는 작은 변화,<br />
                        <span className="text-primary">한국접근성평가연구원</span>이 만들어갑니다.
                    </h3>
                </div>
                <div className="context">
                    <div className="container">
                        <div className="row py-5 col-lg-12 flex-lg-row-reverse">
                            <div className="col col-11 col-lg-6"><div className="image rounded overflow-hidden"><img src="https://firebasestorage.googleapis.com/v0/b/kcaar-dbf18.appspot.com/o/assets%2Fmain-bn-img1.jpg?alt=media&token=4e6383d8-ab7c-449d-ba7e-db7230054c4f&_gl=1*1pkt05h*_ga*ODgwNzAyNDA3LjE2OTI0NDA5MTM.*_ga_CW55HF8NVT*MTY5OTE3MTkyOC4xOC4wLjE2OTkxNzE5MjguNjAuMC4w" alt="" /></div></div>
                            <div className="col col-12 col-lg-6 d-flex flex-column justify-content-end">
                                <h4 className="tit fw-bold mt-3 mb-1">접근성 평가 방법론<br />및 표준의 연구 개발</h4>
                                <div className="txt">사단법인 한국접근성평가연구원은 각종 전자정보통신 제품 및 서비스의 접근성을 향상시키기 위한 기술 표준과 이를 효과적으로 시험, 평가하는 연구방법론을 개발하고, 개발된 표준 및 방법론을 실제 제품 및 서비스에 적용하는 연구를 수행합니다.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="context bg-blue-light">
                    <div className="container">
                        <div className="row py-5 col-lg-12 text-end text-lg-start">
                            <div className="col col-11 col-lg-6 ms-auto ms-lg-0"><div className="image rounded overflow-hidden"><img src="https://firebasestorage.googleapis.com/v0/b/kcaar-dbf18.appspot.com/o/assets%2Fmain-bn-img2.jpg?alt=media&token=3b7362bd-b9ed-49bb-9a9f-bdce93085992&_gl=1*pkld6*_ga*ODgwNzAyNDA3LjE2OTI0NDA5MTM.*_ga_CW55HF8NVT*MTY5OTE3MTkyOC4xOC4xLjE2OTkxNzE5NDEuNDcuMC4w" alt="" /></div></div>
                            <div className="col col-12 col-lg-6 d-flex flex-column justify-content-end">
                                <h4 className="tit fw-bold mt-3 mb-1">접근성 시험·평가에 관한 연구와<br />결과 보고서 발행</h4>
                                <div className="txt">접근성 및 사용성 분야의 전문가들이 모여서 다양한 제품과 서비스의 접근성 시험평가 결과를 공익적 차원에서 공개함으로써 우리 사회의 전반적인 접근성 향상을 도모하고, 궁극적으로는 우리나라의 장애인과 고령자의 삶의 질 향상에 기여함을 목적으로 합니다.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="context">
                    <div className="container">
                        <div className="row py-5 col-lg-12 flex-lg-row-reverse">
                            <div className="col col-11 col-lg-6"><div className="image rounded overflow-hidden"><img src="https://firebasestorage.googleapis.com/v0/b/kcaar-dbf18.appspot.com/o/assets%2Fmain-bn-img3.jpg?alt=media&token=10696e17-add7-41ff-b8dc-a1866ddb0194&_gl=1*1oo6z2l*_ga*ODgwNzAyNDA3LjE2OTI0NDA5MTM.*_ga_CW55HF8NVT*MTY5OTE3MTkyOC4xOC4xLjE2OTkxNzE5NTEuMzcuMC4w" alt="" /></div></div>
                            <div className="col col-12 col-lg-6 d-flex flex-column justify-content-end">
                                <h4 className="tit fw-bold mt-3 mb-1">학술도서 및 접근성 관련<br />홍보물 출판 교육 사업</h4>
                                <div className="txt">사단법인 한국접근성평가연구원은 더 많은 사람들에게 전자정보통신 관련 제품과 서비스의 접근성을 보장할 수 있는 최적의 방법을 학술적으로 연구하고 교육하기 위한 구체적인 방법을 모색합니다.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="context bg-blue-light">
                    <div className="container">
                        <div className="row py-5 col-lg-12 text-end text-lg-start">
                            <div className="col col-11 col-lg-6 ms-auto ms-lg-0"><div className="image rounded overflow-hidden"><img src="https://firebasestorage.googleapis.com/v0/b/kcaar-dbf18.appspot.com/o/assets%2Fmain-bn-img4.jpg?alt=media&token=efd9a14d-056d-4191-bf52-716af3ce81ce&_gl=1*nlrb1x*_ga*ODgwNzAyNDA3LjE2OTI0NDA5MTM.*_ga_CW55HF8NVT*MTY5OTE3MTkyOC4xOC4xLjE2OTkxNzE5NjAuMjguMC4w" alt="" /></div></div>
                            <div className="col col-12 col-lg-6 d-flex flex-column justify-content-end">
                                <h4 className="tit fw-bold mt-3 mb-1">전자정보통신 제품 및 서비스에<br />대한 접근성 컨설팅</h4>
                                <div className="txt">사단법인 한국접근성평가연구원은 각종 전자정보통신 제품 및 서비스의 접근성에 대해 전문적·학술적인 접근이 어려운 기업 및 단체들을 위해 심도있고 혁신적인 인사이트로 장기적인 비전과 즉각적인 피드백을 제시합니다.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="notice py-5">
                <div className="container">
                    <h3 className="fw-bold"><span className="fs-6 d-block text-primary mb-1 fw-bold">NEW & NOTICE</span> KCAAR 소식</h3>
                    <div className="row py-5">
                        <div className="col col-12 col-lg-6">
                            <div className="wrap">
                                <div className="tit border-bottom mb-2 pb-2 d-flex align-items-center justify-content-between">
                                    <h4 className="fw-bold">공지사항</h4>
                                    <div className="btn-more text-primary"><a href="#">more+</a></div>
                                </div>
                                <div className="list">
                                    <ol className="p-0">
                                        <li>
                                            <a href="#" className="d-flex py-3 border-bottom">
                                                <div className="board-tit text-truncate col-10">asdasda dsaa sda sd asdasda sdas das ass asda sd aasd asd as as das das das dasd a</div>
                                                <div className="date col-2 text-end">2023.01.01</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex py-3 border-bottom">
                                                <div className="board-tit text-truncate col-10">asdasda dsaa sda sd asdasda sdas das ass asda sd aasd asd as as das das das dasd a</div>
                                                <div className="date col-2 text-end">2023.01.01</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex py-3 border-bottom">
                                                <div className="board-tit text-truncate col-10">asdasda dsaa sda sd asdasda sdas das ass asda sd aasd asd as as das das das dasd a</div>
                                                <div className="date col-2 text-end">2023.01.01</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex py-3 border-bottom">
                                                <div className="board-tit text-truncate col-10">asdasda dsaa sda sd asdasda sdas das ass asda sd aasd asd as as das das das dasd a</div>
                                                <div className="date col-2 text-end">2023.01.01</div>
                                            </a>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-lg-6 mt-5 mt-lg-0">
                            <div className="wrap">
                                <div className="tit border-bottom mb-2 pb-2 d-flex align-items-center justify-content-between">
                                    <h4 className="fw-bold">새소식</h4>
                                    <div className="btn-more text-primary"><a href="#">more+</a></div>
                                </div>
                                <div className="list">
                                    <ol className="p-0">
                                        <li>
                                            <a href="#" className="d-flex py-3 border-bottom">
                                                <div className="board-tit text-truncate col-10">asdasda dsaa sda sd asdasda sdas das ass asda sd aasd asd as as das das das dasd a</div>
                                                <div className="date col-2 text-end">2023.01.01</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex py-3 border-bottom">
                                                <div className="board-tit text-truncate col-10">asdasda dsaa sda sd asdasda sdas das ass asda sd aasd asd as as das das das dasd a</div>
                                                <div className="date col-2 text-end">2023.01.01</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex py-3 border-bottom">
                                                <div className="board-tit text-truncate col-10">asdasda dsaa sda sd asdasda sdas das ass asda sd aasd asd as as das das das dasd a</div>
                                                <div className="date col-2 text-end">2023.01.01</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex py-3 border-bottom">
                                                <div className="board-tit text-truncate col-10">asdasda dsaa sda sd asdasda sdas das ass asda sd aasd asd as as das das das dasd a</div>
                                                <div className="date col-2 text-end">2023.01.01</div>
                                            </a>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
            </section>
        </div>
    );
}