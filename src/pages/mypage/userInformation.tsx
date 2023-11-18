import styled from "styled-components";
import MyInformation from "../../components/auth/mypage/myinformation";
import MypageNavigation from "../../components/auth/mypage/mypage-navi";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Wrap = styled.div``;

export default function UserInformation() {
    const [isReauthenticated, setIsReauthenticated] = useState(false);

    if(isReauthenticated) {
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