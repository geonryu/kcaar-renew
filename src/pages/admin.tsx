import styled from "styled-components"
import { Link, Outlet } from "react-router-dom";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const Wrapper = styled.div`
    max-width: 1920px;
    overflow: hidden;
`;
const Main = styled.main``;
const PopAd = styled.div`height: 32px; line-height: 32px; & div{height: 100%;}`;
const Nav = styled.div`
    border-bottom: 2px solid #f0f0f0;
    height: 72px;
    & div{
        height: 100%;
        position: relative;
    }
    & div.active::after{
        content: '';
        display: block;
        width: 100%;
        position: absolute;
        top: 100%;
        left: 0;
        height: 2px;
        background-color: #007aff;
    }
    & div.active a{
        color: #007aff;
    }
`;


export default function AdminHome() {
    const [isActive, setIsActive] = useState("");
    const onClick = (e : React.MouseEvent<HTMLDivElement>) => {
        const idx = e.currentTarget.getAttribute("data-idx") || "";
        setIsActive(idx);
    }
    return (
        <Wrapper>
            <PopAd className="bg-primary fw-bold text-white fs-6 text-center ">
                <Swiper
                    direction={'vertical'}
                    speed={1000}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>한국접근성평가연구원 웹페이지 리뉴얼! 🎉🎉🎉</SwiperSlide>
                    <SwiperSlide>🚨 관리자페이지 오류사항은 <span className="text-decoration-underline">유건 연구원</span> 또는 <span className="text-decoration-underline">오류제보 탭</span>을 활용하여 제보해주세요.</SwiperSlide>
                    <SwiperSlide>관리자페이지는 PC접속 환경을 권장합니다.</SwiperSlide>
                    <SwiperSlide>🔥 현재 개발중 : 컨텐츠관리 | 자료실 | 오류제보 🔥</SwiperSlide>
                </Swiper>
            </PopAd>
            <Nav className="d-flex">
                <div onClick={onClick} data-idx="0" className={`${isActive === "0" ? "active" : null}`}><Link className={`d-block py-2 px-3 fw-bold d-flex align-items-center h-100`} to={"/"}><img className="h-50" src="https://firebasestorage.googleapis.com/v0/b/kcaar-dbf18.appspot.com/o/assets%2Fkcaar-logo.svg?alt=media&token=b49d8da2-7790-4c92-b523-23bba8c75a2d&_gl=1*1km8rig*_ga*ODgwNzAyNDA3LjE2OTI0NDA5MTM.*_ga_CW55HF8NVT*MTY5OTE2Njc4MC4xNy4xLjE2OTkxNjg0OTIuMzYuMC4w" alt="한국접근성평가연구원" /></Link></div>
                <div onClick={onClick} data-idx="1" className={`${isActive === "1" ? "active" : null}`}><Link className={`d-block py-2 px-3 fw-bold d-flex align-items-center h-100`} to={"/admin/members"}>회원관리</Link></div>
                <div onClick={onClick} data-idx="2" className={`${isActive === "2" ? "active" : null}`}><Link className={`d-block py-2 px-3 fw-bold d-flex align-items-center h-100`} to={"/admin/bannerManagement"}>컨텐츠관리</Link></div>
                <div onClick={onClick} data-idx="3" className={`${isActive === "3" ? "active" : null}`}><Link className={`d-block py-2 px-3 fw-bold d-flex align-items-center h-100`} to={"/admin/libraryManagement"}>자료실</Link></div>
                <div onClick={onClick} data-idx="4" className={`${isActive === "4" ? "active" : null}`}><Link className={`d-block py-2 px-3 fw-bold d-flex align-items-center h-100`} to={"/admin/inquiryManagement"}>문의사항</Link></div>
                <div onClick={onClick} data-idx="5" className={`${isActive === "5" ? "active" : null}`}><Link className={`d-block py-2 px-3 fw-bold d-flex align-items-center h-100`} to={"/admin/report"}>오류제보</Link></div>
            </Nav>
            <Main>
                <Outlet />
            </Main>
        </Wrapper>
    )
}