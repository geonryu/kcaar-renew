import styled from "styled-components";
import ReCheckAuth from "../../components/auth/mypage/recheck-auth";

const Section = styled.section``;

export default function MypageAuth() {
    return(
        <Section className="py-5">
            <ReCheckAuth></ReCheckAuth>
        </Section>
    )
}