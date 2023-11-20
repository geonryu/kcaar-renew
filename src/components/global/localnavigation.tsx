import { Container } from "react-bootstrap";
import styled from "styled-components"

const LNB = styled.div``;
const LocalNavi = styled.div``;

export default function LocalNavigation(props: any) {
    return (
        <LNB>
            <Container>
                <div className="d-flex my-5 border bg-white rounded-4 overflow-hideen">
                    {
                        props.LNB.map((navi: any, i: number) => {
                            return(
                                <LocalNavi className={`col-${12 / props.LNB.length}`} key={navi.key + i}>
                                    <a href={navi.to} className={`${navi.isActive === "true" ? "bg-primary text-white" : "bg-white text-black"} rounded-4 fw-bold d-flex py-2 justify-content-center`}>
                                        {navi.tit}
                                    </a>
                                </LocalNavi>
                            )
                        })
                    }
                </div>
            </Container>
        </LNB>
    )
}