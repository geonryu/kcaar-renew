import styled from "styled-components";
import LoginForm from "../components/auth/loginForm";
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

export default function Login() {
    
    return (
        <Wrapper>
            <Main>
                <GlobalHeader></GlobalHeader>
                <LoginForm></LoginForm>
                <GlobalFooter></GlobalFooter>
            </Main> 
        </Wrapper>
    )
}