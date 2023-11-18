import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components"
import Heading from "../../global/heading";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Section = styled.section``;
const MapView = styled.div`
    width: 100%;
    height: 420px;
`;

const {kakao} = window;
declare global {
    interface Window {
    kakao: any;
    }
}

export default function Map() {
    useEffect(() => {
        let container = document.getElementById('map');
        let options = {
            center: new kakao.maps.LatLng(37.5807101354544, 127.003684244697),
            level: 3
        };

        const map = new kakao.maps.Map(container, options);

        let markerPosition = options.center;
        let marker = new kakao.maps.Marker({
            "position" : markerPosition
        });
        
        marker.setMap(map);
    }, []);

    return (
        <Section className="py-5">
            <Container>
                <Heading labelTxt={"Location"} titTxt1={`오시는 길`} titTxt2={""} txtAlign={"center"}/>
                <MapView id="map" className="rounded-4 shadow-sm"></MapView>
                <Row className="mt-3 mb-5 my-md-5">
                    <Col xs={6} sm={6}><Link to="https://naver.me/F5CbdOzV" className="d-block fs-6 fw-bold text-center border rounded py-2 mb-3 mb-md-0">네이버지도 바로가기</Link></Col>
                    <Col xs={6} sm={6}><Link to="https://kko.to/-QcOZe3ZbR" className="d-block fs-6 fw-bold text-center border rounded py-2">카카오지도 바로가기</Link></Col>
                </Row>
                <Col md={12} className="mx-auto border-top">
                    <div className="direction ">
                        <div className="location py-3 d-flex border-bottom">
                            <div className="ico px-3 fw-bold text-primary-blue"><span
                                    className="fs-1 material-symbols-outlined">pin_drop</span></div>
                            <div className="txt">
                                <div className="tit fw-bold text-gray-700 mb-2">서울 종로구 대학로8길 26 6층</div>
                            </div>
                        </div>
                        <div className="car py-3 d-flex border-bottom">
                            <div className="ico px-3 fw-bold text-primary-blue"><span className="fs-1 material-symbols-outlined">local_parking</span></div>
                            <div className="txt">
                                <div className="tit fw-bold text-gray-700 mb-2">자차 이용시</div>
                                <div className="">준비된 주차장이 없습니다. 인근에 태원주차장 또는 동호주차장 등이 있습니다.</div>
                            </div>
                        </div>
                        <div className="subway py-3 d-flex border-bottom">
                            <div className="ico px-3 fw-bold text-primary-blue"><span
                                    className="fs-1 material-symbols-outlined">directions_subway</span></div>
                            <div className="txt">
                                <div className="tit fw-bold text-gray-700 mb-2">지하철 이용시 - 4호선 혜화역</div>
                                <div className="">혜화역 2번출구 나와 도보 3분</div>
                            </div>
                        </div>
                        <div className="bus py-3 d-flex border-bottom">
                            <div className="ico px-3 fw-bold text-primary-blue"><span
                                    className="fs-1 material-symbols-outlined">train</span></div>
                            <div className="txt w-100">
                                <div className="tit fw-bold mb-2">버스 이용시</div>
                                <div className="mb-2 pb-2 border-bottom">
                                    <div className="tit fw-bold text-gray-700">혜화역, 마로니에공원</div>
                                    <div className="di fs-6 text-gray-600 mb-2">혜화역.동성중고(장면총리가옥) 방면</div>
                                    <div className="">[간선] 100번, 102번, 104번, 106번 107번, 109번, 140번, 143번, 150번, 160번, 162번,
                                        273번, 301번, 710번, N16(심야)<br/>[지선] 2112번, 직행 1101번, 1102번 7101번<br/>[마을] 종로07, 종로08
                                    </div>
                                </div>
                                <div className="mb-2 pb-2 border-bottom">
                                    <div className="tit fw-bold text-gray-700">대학로</div>
                                    <div className="di fs-6 text-gray-600 mb-2">창경궁 방면</div>
                                    <div className="">[순환] TOUR01</div>
                                </div>
                                <div className="mb-2">
                                    <div className="tit fw-bold text-gray-700">혜화역.서울대병원입구</div>
                                    <div className="di fs-6 text-gray-600 mb-2">방송통신대.이화장 방면</div>
                                    <div className="">
                                        [간선] 109번, 601번, 273번, N16(심야)<br/>[지선] 2112번<br/>[마을] 종로08, 종로07, 종로12
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Container>
        </Section>
    )
}