import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../../firebase";
import { Container } from "react-bootstrap";

const Nav = styled.nav`
    position: fixed; top: 60px; left: -100%; width: 100%; height: calc(100% - 60px); background-color: #fff; transition:  left 0.2s;
    &.active{left: 0;}
    
    @media (min-width: 992px) {
        position: static; padding: 0; z-index: 99999; width: unset; height: unset;
        height: 100%;
        &.extend{
            left: 0;
            right: 0;
        }
        & .container{
            height: 100%;
        }
    }
`;
const Utils = styled.div``;
const Navi = styled.div`
    position: relative;
    
`;
const Gnb = styled.ul`

    @media (min-width: 992px) {
        height: 330px; border: 0 !important;

    }
`;
const NaviList = styled.li`
    width: 100%;
    position: relative;
    &.active svg {
        transform: rotate(0);
    }

    @media(min-width: 992px) {
        width: unset;
        height: 100%;
        height: 100%;
        border-bottom: 1px solid rgba(0,0,0,0) !important;
    }
`;
const NavHd = styled.div`
    height: 65px;
`;
const Sub = styled.ul`
    display: none;
    background-color: #fafafa;

    &.active {display: block;}

    @media (min-width: 992px) {
        background-color: #fff;
        display: block;
        position: absolute;
        top: 65px;
        left: 0;
        width: max-content;
    }
`;
const Arrow = styled.svg`
    height: 25px; transform: rotate(180deg);
`;

export default function GlovalNavigation(props: any) {
    const [navStatus, SetNavStatus] = useState("");
    const [subStatus, SetSubStatus] = useState("");
    const navigate = useNavigate();
    const [user, setUser] = useState<any>(() => {
        const storedData = localStorage.getItem('cur');
        return storedData ? JSON.parse(storedData) : false;
    });
    const siteMap = [
        {
            title : {en: "Center", ko: "연구원소개", key: "nav1",}, 
            sub : [
                {subtitle: "CEO Message", to: "/center/ceomessage", key: "nav1-1", ko: "인사의 글", ko2: null,},
                {subtitle: "Organization", to: "/center/organization", key: "nav1-2", ko: "조직도", ko2: null,},
                {subtitle: "Location", to: "/center/location", key: "nav1-3", ko: "오시는 길", ko2: null,},
                {subtitle: "Counsultation", to: "/center/counsultation", key: "nav1-4", ko: "접근성협의체", ko2: null,},
            ]
        },
        {
            title : {en: "Evaluation", ko: "접근성시험평가", key: "nav2",}, 
            sub : [
                {subtitle: "Accessibility", to: "/evaluation/accessibility", key: "nav2-1", ko: "접근성시험평가란?", ko2: "",},
                {subtitle: "Kiosk", to: "/evaluation/kiosk", key: "nav2-2", ko: "키오스크", ko2: "접근성시험평가",},
                {subtitle: "Appliances", to: "/evaluation/appliance", key: "nav2-3", ko: "가전", ko2: "접근성시험평가",},
            ]
        },
        {
            title : {en: "Library", ko: "자료실", key: "nav3",}, 
            sub : [
                {subtitle: "Library", to: "/library", key: "nav3-1", ko: "자료실", ko2: null,},
            ]
        },
        {
            title : {en: "Contact", ko: "문의하기", key: "nav4",}, 
            sub : [
                {subtitle: "Contact", to: "/contact", key: "nav4-1", ko: "문의하기", ko2: null,},
            ]
        }
    ]
    
    useEffect(() => {
        props.headerStatus ? SetNavStatus("active") : SetNavStatus("");
        
    }, [props.headerStatus]);

    const onClickToSignout = async () => {
        await auth.signOut();
        localStorage.removeItem("cur");
        setUser(false);
        navigate("/");
        // setNavExtend(false);
        // setSubNavExtend(false);
    } 

    const onClickSub = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.setHeaderStatus(true);
        const idx = e.currentTarget.getAttribute("data-idx");
        SetSubStatus(String(idx));
    }
    const onClickToRedirect = () => {
        props.setHeaderStatus(false);
    }
    const onMouseEnter = () => {
        props.setHeaderStatus(true);
    }
    const onMouseLeave = () => {
        props.setHeaderStatus(false);
    }

    return (
        <Nav className={`ms-auto bg-wthie ${navStatus}`}>
            <Container className="d-lg-flex flex-lg-row-reverse align-items-center justify-content-between h-100">
                <Utils className="utils py-4 py-lg-0">
                    {
                        user
                        ? 
                        <div className="user-welcome bg-blue-light bg-lg-none w-100 p-3 p-lg-0 rounded d-lg-flex">
                            <div className="d-flex align-items-center">
                                <Link to={"/mypage"} className="mb-3 pb-3 mb-lg-0 pb-lg-0 border-bottom border-lg-bottom-0 d-flex align-items-end align-items-lg-center">
                                    <div className="msg">
                                        <div className="welcome d-block d-lg-none">안녕하세요.</div>
                                        <span className="user-name fs-5 fw-bold me-1 fs-lg-0" id="userNamePrint">{user.displayName}</span>님
                                    </div>
                                    <div className="mypage fw-bold ms-auto mx-lg-3 text-gray-600"><span className="material-symbols-outlined d-block ">settings</span></div>
                                </Link>
                            </div>
                            <div><input onClick={onClickToSignout} type="button" value="로그아웃" className="btn fs-6 btn-primary-blue w-100 d-block text-white fw-bold ms-lg-1 ms-xl-2 rounded"/></div>
                        </div>
                        :
                        <div onClick={onClickToRedirect} className="btn btn-primary-blue w-100 d-block text-white fw-bold ms-lg-1 ms-xl-2 rounded fs-6"><a href="/login">로그인/회원가입</a></div>
                    }
                </Utils>
                <Navi className="navigation h-100 border-top border-md-0">
                    <Gnb onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  className="navbar-nav mr-auto fw-bold d-lg-flex align-items-start">
                        {siteMap.map((list, i) => {
                            return (
                                <NaviList key={list.title.key} data-idx={i} className={`border-bottom me-lg-5 ${Number(subStatus) === i ? "active" : ""}`} >
                                    <NavHd className="nav-hd fw-normal w-100">
                                        <button onClick={onClickSub} data-idx={i} className={`nav-link py-2 py-xs-2 py-sm-3 px-lg-1 px-xl-2 d-flex align-items-center justify-content-between w-100 h-100 text-start`}>
                                            <span className="fw-bold text-gray-600">{list.title.ko}</span>
                                            <div className="arr d-lg-none">
                                                <Arrow xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#007aff" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                </Arrow>
                                            </div>
                                        </button>
                                    </NavHd>
                                    <Sub className={`sub-nav ps-2 ps-lg-0 pt-2 fw-normal ${Number(subStatus) === i ? "active" : ""}`}>
                                        {list.sub.map((item, j) => {
                                            return (
                                                <li className="sub-nav-link border-lg-bottom-0 mx-lg-1 mx-lg-2" key={item.key+j}>
                                                    <Link onClick={onClickToRedirect} to={item.to} className="d-block fw-bold text-gray-800 px-3 px-lg-0 py-3 py-sm-3">
                                                        <span>
                                                            {item.ko}
                                                            {item.ko2 ? <br className="d-none d-md-block"/> : ""}
                                                            {item.ko2 ? item.ko2 : ""}
                                                        </span>
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </Sub>
                                </NaviList>
                            )//first return
                        })}
                    </Gnb>
                </Navi>
            </Container>
        </Nav>
    )
}