import { FirebaseError } from "firebase/app";
import { Unsubscribe } from "firebase/auth";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useState } from "react";
import styled from "styled-components"
import { db } from "../../firebase";

const Section = styled.section``;

export interface Users {
    email : string;
    phoneNum : string;
}

export default function ForgotIdForm() {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [tel, setTel] = useState("");
    const [users, setUsers] = useState<Users[]>([]) || null;

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: {name, value}
        } = e;
        if(name === "tel") {
            let dashed = value.replace(/[^0-9]/g, "").replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
            setTel(dashed);
        }
    }

    const onSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        if(isLoading || tel === "") {
            setError("다시 시도해주세요.");
            return
        };
        try{
            const usersCollection = query(
                collection(db, "users"),
                );
            let unsubscribe : Unsubscribe | null = null;
            unsubscribe = await onSnapshot(usersCollection, (snapshot) => {
                const usersList:any = snapshot.docs.map((doc) => {
                    const { email, phoneNum } = doc.data()
                    if(tel === phoneNum) {
                        return {
                            email, phoneNum
                        }
                    }
                });
                setUsers(usersList);
                return () => {
                    unsubscribe && unsubscribe();
                }
            });
        } catch(e:any) {
            if(e instanceof FirebaseError) {
                console.error(e.message);
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <Section className="py-5">
            <div className="container">
                <div className="wrapper col-12 col-lg-6 col-xl-4 mx-lg-auto">
                    <h2 className="login-logo border-bottom text-center pb-3 mb-3 fw-bold">아이디 찾기</h2>
                    {
                        users.length !== 0 ? (
                            <div className="pb-5 pt-3">
                                <div className="text-center fw-bold mb-3">아이디 찾기 결과</div>
                                {
                                    users.map((usr, i) => {
                                        function masking(email:any) {
                                            var len = email.split('@')[0].length-3;
                                            return email.replace(new RegExp('.(?=.{0,' + len + '}@)', 'g'), '*');
                                        }
                                        
                                        if(usr) {
                                            return <div className="text-center" key={`result_${i}`}>{masking(usr.email)}</div>
                                        } else {
                                            return <div key={`result_${i}`}></div>
                                        }
                                    })
                                }
                                <div className="mt-5">
                                    <div className="bg-primary-blue rounded"><a href="/login" className="text-white fw-bold d-block w-100 px-2 py-2 text-center">로그인</a></div>
                                    <div className="pt-3 pb-5">
                                        <div className="text-center mb-3 text-gray-600 fs-6">또는</div>
                                        <div><a href="/forgotPassword" className="text-primary text-decoration-underline d-block w-100 px-2 py-2 text-center">비밀번호 찾기</a></div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="email-login mb-3">
                                    <form action="" id="loginForm" onSubmit={onSubmit}>
                                        <div className="user-id mb-3"><input onChange={onChange} className="px-2 py-2 bg-white border border-primary d-block rounded w-100 border d-block w-100" id="tel" name="tel" type="tel" value={tel} maxLength={13} placeholder={"가입시 입력한 연락처(전화번호)를 입력해주세요."} /></div>
                                        <div className="btn-submit"><button className="px-2 py-2 d-block w-100 bg-primary-blue text-white rounded fw-bold" id="loginSubmit" type="submit">{isLoading ? "처리중" : "아이디 찾기"}</button></div>
                                        {error !== "" ? <span className="px-1 mt-2 fs-6 text-point d-block">아이디 또는 비밀번호를 확인해주세요.</span> : null}
                                    </form>
                                </div>
                                <div className="join pt-3 pb-5">
                                    <div className="text-center mb-3 text-gray-600 fs-6">또는</div>
                                    <div className="btn-join border border-primary-blue rounded"><a href="/join" className="text-primary fw-bold d-block w-100 px-2 py-2 text-center">이메일로 회원가입</a></div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </Section>
    )
}