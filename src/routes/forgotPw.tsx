import styled from "styled-components";
import GlobalFooter from "../components/global/footer";
import GlobalHeader from "../components/global/header";
import ForgotPw from "../components/auth/forgotPw";

const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    overflow: hidden;
`;
const Main = styled.main`
    padding-top: 65px;
`;

export default function ForgotPassword() {
    
    return (
        <Wrapper>
            <Main>
                <GlobalHeader></GlobalHeader>
                <ForgotPw></ForgotPw>
                <GlobalFooter></GlobalFooter>
            </Main> 
        </Wrapper>
    )
}