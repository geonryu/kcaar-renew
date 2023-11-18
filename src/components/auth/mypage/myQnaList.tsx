
import styled from "styled-components";
import Heading from "../../global/heading";

const Section = styled.section``;

export default function MyQnAList() {
    return(
        <Section className="py-5">
            <Heading labelTxt={"MY HISTORY"} titTxt1={`내 문의사항`} titTxt2={""} txtAlign={"left"}/>
        </Section>
    )
}