import { Outlet } from "react-router-dom"
import styled from "styled-components"
import GlobalFooter from "../components/global/footer";
import GlobalHeader from "../components/global/header";

const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    overflow: hidden;
`;
const Main = styled.main`
    padding-top: 65px;
`;
export default function Layout() {
    return (
        <Wrapper>
            <GlobalHeader></GlobalHeader>
            <Main>
                <Outlet />
            </Main>
            <GlobalFooter></GlobalFooter>
        </Wrapper>
    )
}