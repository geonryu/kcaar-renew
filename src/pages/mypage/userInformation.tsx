import styled from "styled-components";
import {  Navigate, useLocation } from "react-router-dom";
import MypageNavigation from "../../components/auth/mypage/mypage-navi";
import MyInformation from "../../components/auth/mypage/myinformation";

const Wrap = styled.div``;

export default function UserInformation() {
    const { state } = useLocation();
    
    if(state) {
        return (
            <Wrap>
                <MypageNavigation></MypageNavigation>
                <MyInformation></MyInformation>
            </Wrap>
        )
    } else {
        return(
            <Navigate to="/mypage" />
        )
    }
}