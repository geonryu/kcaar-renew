import styled from "styled-components";
import GlobalFooter from "../components/global/footer";
import GlobalHeader from "../components/global/header";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    overflow: hidden;
`;
const Main = styled.main`
    padding-top: 65px;
`;

export default function Mypage() {
    
    return (
        <Wrapper>
            <Main>
                <GlobalHeader></GlobalHeader>
                <Container>
                    <Outlet></Outlet>
                </Container>
                <GlobalFooter></GlobalFooter>
            </Main> 
        </Wrapper>
    )
}