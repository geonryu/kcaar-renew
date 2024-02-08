import { Container } from "react-bootstrap";
import styled from "styled-components"

const LNB = styled.div``;
const LnbWrap = styled.div`
    overflow: scroll visible;
    &::-webkit-scrollbar{display: none;}
`;
const LocalNavi = styled.div`
    min-width: max-content;
    position: relative;
    &.bg-white::after,
    &:last-child::after{content: none;}
    &::after{
        content: '';
        display: block;
        width: 1px;
        height: 12px;
        background-color: #ced4da;
        position: absolute;
        top: 50%;
        left: 100%;
        transform: translate(-0.5px, -50%);
    }
`;

export default function LocalNavigation(props: any) {
    return (
        <LNB>
            <Container>
                <LnbWrap className="d-flex my-5 border bg-white rounded-pill text-center">
                    {
                        props.LNB.map((navi: any, i: number) => {
                            return(
                                <LocalNavi className={`col-${12 / props.LNB.length}`} key={navi.key + i}>
                                    <a href={navi.to} className={`${navi.isActive === "true" ? "bg-primary text-white" : "bg-white text-black"} rounded-pill fw-bold d-flex py-2 px-3 h-100 justify-content-center d-flex align-items-center justify-content-center`}>
                                        {navi.tit}
                                    </a>
                                </LocalNavi>
                            )
                        })
                    }
                </LnbWrap>
            </Container>
        </LNB>
    )
}