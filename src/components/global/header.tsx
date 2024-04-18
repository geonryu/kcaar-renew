import styled from "styled-components"
import GlovalNavigation from "./nav";
import { useState } from "react";
import { Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = styled.header`
    position: fixed; top: 0; left: 0; width: 100%; z-index: 99999; transition: all 0.4s; height: 66px;

    & > .container {height: 65px;}
    @media (min-width: 992px) {
        overflow: hidden;

        &.active{height: 400px;}
        & .sub{
            display: block !important;
            height: unset;
        }
        &::after{
            // content: '';
            display: block;
            width: 100%;
            height: 0;
            transition: height 0.3s;
            background-color: #fff;
            // position: absolute;
            top: 100%;
            left: 0;
        }
        &.extend::after{
            // border-bottom: 1px solid #dee2e6;
            height: 200px;
        }
    }

`;
const HeaderWrap = styled.div``;
const Logo = styled.h1``;
const BtnNav = styled.div`
    width: 35px; height: 35px;
    & .navbar-toggler{width: 100%; height: 100%; font-size: 0; position: relative;}
    & .navbar-toggler::before{content: ''; display: block; width: 28px; height: 2px; background-color: #000; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -9px);}
    & .navbar-toggler span{display: block; width: 28px; height: 2px; background-color: #000; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);}
    & .navbar-toggler::after{content: ''; display: block; width: 28px; height: 2px; background-color: #000; position: absolute; top: 50%; left: 50%; transform: translate(-50%, 7px);}
    & .navbar-toggler.active::before{top: calc(50% + 7px); transform: translate(-50%, -9px) rotate(-45deg); transition: top 0.15s 0.0s, transform 0.15s 0.15s;}
    & .navbar-toggler.active span{display: none;}
    & .navbar-toggler.active::after{top: calc(50% - 9px); transform: translate(-50%, 7px) rotate(45deg); transition: top 0.15s 0.0s, transform 0.15s 0.15s;}
`;

export default function GlobalHeader() {
    const [navBtn, setNavBtn] = useState(false);
    const onClickNavBtn = () => { 
        !navBtn ? setNavBtn(true) : setNavBtn(false);
    }
    
    return (
        <Header className={`header bg-primary-white border-bottom fixed-top ${navBtn ? "active" : "none"}`}>
            <Container className="navbar-expand-lg navbar-light">
                <HeaderWrap className="d-flex align-items-center align-items-lg-start justify-content-between h-100 w-100">
                    <Col xs={5} md={3} lg={2} className="h-100">
                        <Logo id="logo" className="mb-0 h-100 py-2 d-flex align-items-center">
                            <Link to="/"><img className="h-100" src="https://firebasestorage.googleapis.com/v0/b/kcaar-dbf18.appspot.com/o/assets%2Fkcaar-logo.svg?alt=media&token=b49d8da2-7790-4c92-b523-23bba8c75a2d&_gl=1*1km8rig*_ga*ODgwNzAyNDA3LjE2OTI0NDA5MTM.*_ga_CW55HF8NVT*MTY5OTE2Njc4MC4xNy4xLjE2OTkxNjg0OTIuMzYuMC4w" alt="한국접근성평가연구원" /></Link>
                        </Logo>
                    </Col>
                    <GlovalNavigation setHeaderStatus={setNavBtn} headerStatus={navBtn}></GlovalNavigation>
                    <BtnNav className="btn-nav-opn d-lg-none">
                        <button onClick={onClickNavBtn} className={`navbar-toggler border-0 px-1 py-2 ${navBtn ? "active" : "none"}`}>
                            <span>메뉴열기/닫기</span>
                        </button>
                    </BtnNav>
                </HeaderWrap>
            </Container>
        </Header>
    )
}