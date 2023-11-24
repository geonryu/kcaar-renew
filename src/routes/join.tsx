import styled from "styled-components";
import GlobalHeader from "../components/global/header";
import GlobalFooter from "../components/global/footer";
import JoinForm from "../components/auth/joinForm";

const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    overflow: hidden;
`;
const Main = styled.main`
    padding-top: 65px;
`;

export default function Join() {
    return (
        <Wrapper>
            <GlobalHeader></GlobalHeader>
            <Main>
                <JoinForm></JoinForm>
            </Main>
            <GlobalFooter></GlobalFooter>
        </Wrapper>
    )
}