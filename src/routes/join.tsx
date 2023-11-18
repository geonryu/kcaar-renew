import { FirebaseError } from "firebase/app";
import { ActionCodeOperation, createUserWithEmailAndPassword, deleteUser, getAuth, sendEmailVerification, sendSignInLinkToEmail, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate, useResolvedPath, useRoutes } from "react-router-dom";
import { auth, db } from "../firebase";
import styled from "styled-components";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import firebase from "firebase/compat/app";
import GlobalHeader from "../components/global/header";
import GlobalFooter from "../components/global/footer";
import JoinForm from "../components/auth/joinForm";

const Wrapper = styled.div`
    max-width: 1920px;
    overflow: hidden;
`;
const Main = styled.main`
    padding-top: 65px;
`;

export default function Join() {
    return (
        <Wrapper>
            <GlobalHeader></GlobalHeader>
            <Main>
                <JoinForm></JoinForm>
            </Main>
            <GlobalFooter></GlobalFooter>
        </Wrapper>
    )
}