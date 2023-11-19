import styled from "styled-components"
import { Link, Outlet } from "react-router-dom";

const Wrapper = styled.div`
    max-width: 1920px;
    overflow: hidden;
`;
const Main = styled.main`
    padding-top: 65px;
`;
const Nav = styled.div``;

export default function AdminHome() {
    return (
        <Wrapper>
            <Nav className="bg-primary d-flex">
                <div><Link className="d-block py-2 px-3 text-white fw-bold border-right" to={"/"}>홈</Link></div>
                <div><Link className="d-block py-2 px-3 text-white fw-bold border-right" to={"/admin/members"}>회원관리</Link></div>
                <div><Link className="d-block py-2 px-3 text-white fw-bold border-right" to={"/admin"}>배너관리</Link></div>
                <div><Link className="d-block py-2 px-3 text-white fw-bold border-right" to={"/admin/libraryManagement"}>소식관리</Link></div>
                <div><Link className="d-block py-2 px-3 text-white fw-bold border-right" to={"/admin/inquiryManagement"}>문의사항</Link></div>
                <div><Link className="d-block py-2 px-3 text-white fw-bold border-right" to={"/admin"}>오류제보</Link></div>
            </Nav>
            <Main>
                <Outlet />
            </Main>
        </Wrapper>
    )
}