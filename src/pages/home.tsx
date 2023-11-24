import styled from "styled-components";
import MainVisual from "../components/home/mainVisual";
import Introduce from "../components/home/introduce";
// import HomeNotice from "../components/home/homeNotice";
import MoreInformation from "../components/home/moreinfo";
import NoticeSlider from "../components/home/noticeSlider";

const Wrap = styled.div``;

export default function Home() {
    return(
        <Wrap>
            <MainVisual></MainVisual>
            <Introduce></Introduce>
            {/* <HomeNotice></HomeNotice> */}
            <NoticeSlider></NoticeSlider>
            <MoreInformation></MoreInformation>
        </Wrap>
    )
}