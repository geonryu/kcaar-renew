import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { auth } from "../../firebase";
import { FirebaseError } from "firebase/app";

const Section = styled.section``;

export default function LoginForm() {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: {name, value}
        } = e;
        if(name === "email") {
            setEmail(value);
        } else if(name === "password") {
            setPassword(value);
        }
    }
    const onSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        if(isLoading || email === "" || password ==="") {
            setError("err");
            return
        };
        try{
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            localStorage.setItem('user', JSON.stringify(user));
            navigate("/");
        } catch(e:any) {
            if(e instanceof FirebaseError) {
                setError(e.message);
                // auth/email-already-in-use
            }
            //set Error (중복성, 유효성 검사)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Section className="py-5">
            <div className="container">
                <div className="wrapper col-12 col-lg-6 col-xl-4 mx-lg-auto">
                    <h2 className="login-logo border-bottom text-center pb-3 mb-3 fw-bold">로그인</h2>
                    <div className="email-login mb-3">
                        <form action="" id="loginForm" onSubmit={onSubmit}>
                            <div className="user-id mb-3"><input onChange={onChange} className="px-2 py-2 bg-white border border-primary d-block rounded w-100 border d-block w-100" id="email" name="email" type="email" placeholder={"아이디(이메일)을 입력하세요."} /></div>
                            <div className="user-pw mb-3"><input onChange={onChange} className="px-2 py-2 bg-white border border-primary d-block rounded w-100 border d-block w-100" id="password" name="password" type="password" placeholder={"비밀번호를 입력하세요."} /></div>
                            <div className="btn-submit"><button className="px-2 py-2 d-block w-100 bg-primary-blue text-white rounded fw-bold" id="loginSubmit" type="submit">{isLoading ? "처리중" : "로그인"}</button></div>
                            {error !== "" ? <span className="px-1 mt-2 fs-6 text-point d-block">아이디 또는 비밀번호를 확인해주세요.</span> : null}
                        </form>
                    </div>
                    <div className="join pt-3 pb-5">
                        <div className="text-center mb-3 text-gray-600 fs-6">또는</div>
                        <div className="btn-join border border-primary-blue rounded"><a href="/join" className="text-primary fw-bold d-block w-100 px-2 py-2 text-center">이메일로 회원가입</a></div>
                    </div>
                    <div className="forgot d-flex justify-content-center border-top pt-3">
                        <div className="forgot-id fs-6 mx-3 link-gray-900"><a href="/forgotId">{"아이디 (이메일) 찾기"}</a></div> 
                        <div className="forgot-pw fs-6 mx-3 link-gray-900"><a href="/forgotPassword">비밀번호 찾기</a></div>
                    </div>
                </div>
            </div>
        </Section>
    )
}