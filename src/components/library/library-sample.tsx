import styled from "styled-components";
import { Container } from "react-bootstrap";
import Heading from "../global/heading";


const Section = styled.section``;
const Board = styled.div``;
const List = styled.div`
    margin-bottom: 24px;
`;
const Thumbnail = styled.div`
    position: relative;
    & img{
        aspect-ratio: 4 / 3;
        width: 100%;
        overflow: hidden;
        height: 100%;
        border-radius: 8px;
    }
    & .tag{
        position: absolute;
        top: 12px;
        left: 12px;
        padding: 2px 8px;
        border-radius: 4px;
        background-color: #fff;
        font-weight: bold;
        color: #0756ff;
    }
`;
const Title = styled.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; 

`;

export default function LibrarySample() {
    return(
        <Section className="py-5">
            <Container>
                <Heading labelTxt={"NEWS & NOTICE"} titTxt1={`한국접근성평가연구원의 소식`} titTxt2={""} txtAlign={"center"}/>
                <Board className="d-flex flex-wrap justify-content-between">
                    <List className="col col-2 col-md-3 col-lg-4">
                        <div className="border rounded-4 p-2">
                            <a href="https://www.segye.com/newsView/20230702509737?OutUrl=naver" target="_blank">
                                <Thumbnail>
                                    <div className="tag fs-6">보도자료</div>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fnews7.jpeg?alt=media&token=3e34c1d8-58fb-4609-bd4a-77f102c17b58" alt="장애인이 키오스크를 통해 주문하는 모습" />
                                </Thumbnail>
                                <Title className="tit my-2">LG전자 “맹인도, 휠체어 탄 장애인도 쓸 수 있는 키오스크 선보인다”</Title>
                                <div className="date fs-6 fw-bold text-gray-600">2023-07-02</div>
                            </a>
                        </div>
                    </List>
                    <List className="col col-2 col-md-3 col-lg-4">
                        <div className="border rounded-4 p-2">
                            <a href="https://live.lge.co.kr/2306-universal-design/" target="_blank">
                                <Thumbnail>
                                    <div className="tag fs-6">참고자료</div>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fnews6.jpeg?alt=media&token=b158172a-eba1-4751-813c-cf09b3d0227e" alt="성균관대학교 시스템경영공학과 이성일 교수" />
                                </Thumbnail>
                                <Title className="tit my-2">모든 사람을 위한 디자인, 유니버설 디자인의 필요충분조건</Title>
                                <div className="date fs-6 fw-bold text-gray-600">2023-06-07</div>
                            </a>
                        </div>
                    </List>
                    <List className="col col-2 col-md-3 col-lg-4">
                        <div className="border rounded-4 p-2">
                            <a href="https://www.yna.co.kr/view/AKR20230627084700017?input=1195m" target="_blank">
                                <Thumbnail>
                                    <div className="tag fs-6">보도자료</div>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fnews5.jpeg?alt=media&token=370063fb-895d-4dff-a294-e81fe6360916" alt="장애인 사용자가 키오스크를 이용하는 모습" />
                                </Thumbnail>
                                <Title className="tit my-2">"모두가 쉽게 쓰자" 키오스크 접근성 보장 협의체 출범</Title>
                                <div className="date fs-6 fw-bold text-gray-600">2023-06-27</div>
                            </a>
                        </div>
                    </List>
                    <List className="col col-2 col-md-3 col-lg-4">
                        <div className="border rounded-4 p-2">
                            <a href="https://newsis.com/view/?id=NISX20230620_0002345237&cID=10201&pID=10200" target="_blank">
                                <Thumbnail>
                                    <div className="tag fs-6">보도자료</div>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fnews4.jpeg?alt=media&token=38887de8-790f-4716-bf7f-4d735b85bdb8" alt="보건복지부 전경" />
                                </Thumbnail>
                                <Title className="tit my-2">장애인 산부인과·건강검진기관 진료 접근성 강화…세부기준 마련</Title>
                                <div className="date fs-6 fw-bold text-gray-600">2023-06-20</div>
                            </a>
                        </div>
                    </List>
                    <List className="col col-2 col-md-3 col-lg-4">
                        <div className="border rounded-4 p-2">
                            <a href="https://bravo.etoday.co.kr/view/atc_view/14540" target="_blank">
                                <Thumbnail>
                                    <div className="tag fs-6">보도자료</div>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fnews3.jpeg?alt=media&token=7aa26469-5783-414d-b01e-cede6d4cddf1" alt="" />
                                </Thumbnail>
                                <Title className="tit my-2">한국접근성평가연구원, 디지털 약자 위해 키오스크부터 표준화 시작</Title>
                                <div className="date fs-6 fw-bold text-gray-600">2023-05-04</div>
                            </a>
                        </div>
                    </List>
                    <List className="col col-2 col-md-3 col-lg-4">
                        <div className="border rounded-4 p-2">
                            <a href="https://www.donga.com/news/It/article/all/20230216/117921271/1" target="_blank">
                                <Thumbnail>
                                    <div className="tag fs-6">보도자료</div>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fnews2.jpeg?alt=media&token=c6f340d8-41c3-4380-b18c-cae4cf958881" alt="" />
                                </Thumbnail>
                                <Title className="tit my-2">[디지털 취약 극복] 한국접근성평가연구원 “장애인·고령자 위한 키오스크 표준화”</Title>
                                <div className="date fs-6 fw-bold text-gray-600">2023-02-16</div>
                            </a>
                        </div>
                    </List>
                    <List className="col col-2 col-md-3 col-lg-4">
                        <div className="border rounded-4 p-2">
                            <a href="https://newsis.com/view/?id=NISX20221125_0002100793&cID=13005&pID=13100" target="_blank">
                                <Thumbnail>
                                    <div className="tag fs-6">보도자료</div>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fnews1.jpeg?alt=media&token=89be7d66-0d58-4693-96d1-51ef3a20ac61" alt="" />
                                </Thumbnail>
                                <Title className="tit my-2">NIA, 키오스크 접근성 시험평가 기관 3곳 지정</Title>
                                <div className="date fs-6 fw-bold text-gray-600">2022-11-25</div>
                            </a>
                        </div>
                    </List>
                </Board>
            </Container>
        </Section>
    )
}