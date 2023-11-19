import { Container } from "react-bootstrap";
import styled from "styled-components"
import Heading from "../global/heading";

const Section = styled.section``;

export default function InquiryManage() {
    return (
        <Section className="py-5">
            <Container>
                <Heading labelTxt={""} titTxt1={`문의하기`} titTxt2={""} txtAlign={"left"}/>
            </Container>
        </Section>
    )
}