import { FirebaseError } from "firebase/app";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import styled from "styled-components"

const Section = styled.section``;

export default function ForgotPw() {
    const [isLoading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState('');


    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: {name, value}
        } = e;
        if(name === "email") {
            setEmail(value);
        }
    }

    const onSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        
        const auth = getAuth();
        try{
            await sendPasswordResetEmail(auth, email);
            setSuccessMessage("이메일로 이동하여 비밀번호 재설정을 완료해주세요.");
        } catch(e:any) {
            if(e instanceof FirebaseError) {
                console.error(e.message);
                setError("이메일을 확인해주세요.");
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <Section className="py-5">
            <div className="container">
                <div className="wrapper col-12 col-lg-6 col-xl-4 mx-lg-auto">
                    <h2 className="login-logo text-center pb-3 fw-bold">비밀번호 찾기</h2>
                    <div className="border-bottom text-center pb-3 mb-5">가입하신 이메일 계정으로 비밀번호 재설정 링크를 보내드립니다.</div>
                    <div>
                        <div className="email-login mb-3">
                            <form action="" id="loginForm" onSubmit={onSubmit}>
                                <div className="user-id mb-3"><input onChange={onChange} className="px-2 py-2 bg-white border border-primary d-block rounded w-100 border d-block w-100" id="email" name="email" type="email" placeholder={"가입시 입력한 아이디(이메일)를 입력해주세요."} /></div>
                                {
                                    successMessage ? (
                                        <div className="bg-primary-blue rounded"><a href="/join" className="text-white fw-bold d-block w-100 px-2 py-2 text-center">로그인</a></div>
                                    ) : (
                                        <div>
                                            <div className="btn-submit"><button className="px-2 py-2 d-block w-100 bg-primary-blue text-white rounded fw-bold" id="loginSubmit" type="submit">{isLoading ? "처리중" : "비밀번호 재설정"}</button></div>
                                            {error !== "" ? <span className="px-1 mt-2 fs-6 text-point d-block text-center">{error}</span> : null}
                                            {successMessage !== "" ? <span className="px-1 mt-2 fs-6 text-secondary d-block text-center">{successMessage}</span> : null}
                                        </div>
                                    )
                                }
                            </form>
                        </div>
                        <div className="join pt-3 pb-5">
                            <div className="text-center mb-3 text-gray-600 fs-6">또는</div>
                            <div className="btn-join border border-primary-blue rounded"><a href="/join" className="text-primary fw-bold d-block w-100 px-2 py-2 text-center">이메일로 회원가입</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}