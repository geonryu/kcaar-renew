import { Outlet } from "react-router-dom"
import Footer from "../components/global/footer"
import GlovalHeader from "../components/global/header"
import styled from "styled-components"

const Main = styled.main`
    padding-top: 65px;
`;
export default function Layout() {
    return (
        <div>
            <GlovalHeader></GlovalHeader>
            <Main>
                <Outlet />
            </Main>
            <Footer></Footer>
        </div>
    )
}