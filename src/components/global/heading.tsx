import { useState } from "react";
import styled from "styled-components"

const Title = styled.div``;
const Label = styled.div``;
const Txt = styled.div``;

export default function Heading(props: any) {
    const [textAlign, setTextAlign] = useState("left");
    if(textAlign !== props.txtAlign) {
        setTextAlign(props.txtAlign);
    }

    return(
        <Title className={`text-${textAlign} pb-5`}>
            <Label className="fs-6 mb-1 fw-bold text-primary">{props.labelTxt}</Label>
            <Txt className={`text-${props.theme} fs-4 fw-bold`}>{props.titTxt1}{props.titTxt2 !== "" ? <br className="d-block d-md-none"/> : ""}{props.titTxt2}</Txt>
        </Title>
    )
}