import styled from "styled-components";
import MypageNavigation from "../../components/auth/mypage/mypage-navi";
import MyQnAList from "../../components/auth/mypage/myQnaList";

const Wrap = styled.div``;

export default function QNA() {
    return(
        <Wrap>
            <MypageNavigation></MypageNavigation>
            <MyQnAList></MyQnAList>
        </Wrap>
    )
}