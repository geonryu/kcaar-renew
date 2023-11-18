import styled from "styled-components";
import MainVisual from "../components/home/mainVisual";
import Introduce from "../components/home/introduce";
import HomeNotice from "../components/home/homeNotice";
import MoreInformation from "../components/home/moreinfo";

const Wrap = styled.div``;

export default function Home() {
    return(
        <Wrap>
            <MainVisual></MainVisual>
            <Introduce></Introduce>
            <HomeNotice></HomeNotice>
            <MoreInformation></MoreInformation>
        </Wrap>
    )
}