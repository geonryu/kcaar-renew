import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import styled from "styled-components";
import { addDoc, collection } from "firebase/firestore";

const Error = styled.span`
    font-width: 600;
    font-size: 12px;
    color: tomato;
`;
export default function Join() {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tel, setTel] = useState("");
    const [allowService, setAllowService] = useState("");
    const [allowPriv, setAllowPriv] = useState("false");
    const [allowOpt, setAllowOpt] = useState("false");
    const [error, setError] = useState("false");
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: {name, value}
        } = e; //??
        if(name === "name") {
            setName(value);
        } else if(name === "email") {
            setEmail(value);
        } else if(name === "password") {
            setPassword(value);
        } else if(name === "tel") {
            setTel(value);
        } else if(name === "allowService") {
            setAllowService(value);
        } else if(name === "allowPriv") {
            setAllowPriv(value);
        } else if(name === "allowOpt") {
            setAllowOpt(value);
        }
    }
    const onSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        // if(isLoading || name === "" || email === "" || password ==="" || tel==="" || allowService === "false" || allowPriv === "false") return;
        try{
            // 1 Create An Account(async await)
            // const credentials = await createUserWithEmailAndPassword(auth, email, password);
            
            // await updateProfile(credentials.user,{
            //     displayName: name,
            // });
            // 2. Save the user information
            await addDoc(collection(db, "users"), {
                // id : credentials.user.uid,
                createdAt : Date.now(),   
                // username: credentials.user.displayName || "Anonymous",
                email
                // , tel, allowService, allowPriv, allowOpt
            }); 
            navigate("/");
        } catch(e) {
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
        <div className="join py-5">
            <div className="container">
                <div className="wrapper col-12 col-lg-6 col-xl-4 mx-lg-auto">
                    <h2 className="border-bottom text-center pb-3 mb-3 fw-bold"><span className="fs-6 d-block text-primary mb-2 text-center fw-bold">한국접근성평가연구원</span>회원가입</h2>
                    <div className="emailJoin">
                        {/* {error !== "" ? <Error>{error}</Error> : null} */}
                        <form action="" id="joinForm" onSubmit={onSubmit}>
                            <div className="join-id mb-3">
                                <label className="mb-1 text-primary-blue fw-bold fs-6" htmlFor="email">아이디(이메일)</label>
                                <input className="px-2 py-2 bg-white border border-primary d-block rounded w-100" onChange={onChange} type="text" id="email" name="email" placeholder="아이디(이메일)을 입력" required />
                                <div id="emailWarn" className="message-warn fs-6 text-point">정확한 이메일을 입력해주세요.</div>
                            </div>
                            <div className="join-pw mb-3">
                                <label className="mb-1 text-primary-blue fw-bold fs-6" htmlFor="password">비밀번호</label>
                                <input className="px-2 py-2 bg-white border border-primary d-block rounded w-100" onChange={onChange} type="password" id="password" name="password" placeholder="비밀번호 입력" maxLength="20" required />
                                <div className="ck-pw-eff">
                                    <span className="px-1 fs-6 text-gray-500">영문</span>
                                    <span className="px-1 fs-6 text-gray-500">숫자</span>
                                    <span className="px-1 fs-6 text-gray-500">특수문자</span>
                                    <span className="px-1 fs-6 text-gray-500">8-20자 이내</span>
                                </div>
                            </div>
                            <div className="join-pw-ck mb-3">
                                <label className="mb-1 text-primary-blue fw-bold fs-6" htmlFor="passwordCk">비밀번호 확인</label>
                                <input className="px-2 py-2 bg-white border border-primary d-block rounded w-100" onChange={onChange} type="password" id="passwordCk" name="passwordCk" placeholder="비밀번호 확인" maxLength="20" required />
                                <div id="pwWarn" className="message-warn fs-6 text-point">비밀번호가 일치하지 않습니다.</div>
                            </div>
                            <div className="join-name mb-3">
                                <label className="mb-1 text-primary-blue fw-bold fs-6" htmlFor="joinName">이름</label>
                                <input id="joinName" onChange={onChange} name="name" className="px-2 py-2 bg-white border border-primary d-block rounded w-100" type="text" placeholder="이름 또는 단체(법인)명" required />
                            </div>
                            <div className="join-auth pb-3">
                                <label className="mb-1 text-primary-blue fw-bold fs-6" htmlFor="joinAuthTel">본인인증</label>
                                <input id="tel" onChange={onChange} className="px-2 py-2 bg-white border border-primary d-block rounded w-100 mb-3" name="tel" type="tel" placeholder="휴대전화 번호 입력" maxLength="13" required />
                                <div className="ck-auth mb-3 d-flex border border-primary rounded">
                                    <input className="w-100 px-2 py-2 " type="num" maxLength="" placeholder="인증번호입력" disabled />
                                    <input id="verify" type="button" className="col col-2 px-2 py-2 bg-primary text-white bg-bgDisabled rounded" value="인증" disabled />
                                </div>
                                <input id="verifyCall" className="sms px-2 py-2 d-block w-100 bg-primary rounded text-white fw-bold bg-bgDisabled" type="button" value="인증번호 전송" disabled />
                            </div>
                            <hr className="hr" />
                            <div className="policy pt-3">
                                <div className="label-policy mb-1 text-primary-blue fw-bold fs-6">약관동의</div>
                                <div className="allow-all position-relative px-2 py-2 rounded bg-white mb-1">
                                    <input id="allowAll" name="allowAll" className="ck" type="checkbox" />
                                    <label className="label-for-ck w-100 h-100" htmlFor="allowAll">약관 전체동의</label>
                                </div>
                                <div className="allow-list rounded bg-white">
                                    <div className="allow-service position-relative border-bottom px-2 py-2 d-flex justify-content-between">
                                        <input id="allowService" name="allowService" onChange={onChange} className="ck" type="checkbox" value="allowed-service" required />
                                        <label className="label-for-ck w-80 h-100" htmlFor="allowService">이용약관(필수)</label>
                                        <a href="#" className="d-flex text-decoration-underline">[보기]</a>
                                    </div>
                                    <div className="allow-priv position-relative border-bottom px-2 py-2 d-flex justify-content-between">
                                        <input id="allowPriv" name="allowPriv" onChange={onChange} className="ck" type="checkbox" value="allowed-private" required />
                                        <label className="label-for-ck w-80 h-100" htmlFor="allowPriv">개인정보수집 및 이용동의(필수)</label>
                                        <a href="#" className="d-flex text-decoration-underline">[보기]</a>
                                    </div>
                                    <div className="allow-opt position-relative border-bottom px-2 py-2 d-flex justify-content-between">
                                        <input id="allowOpt" name="allowOpt" onChange={onChange} className="ck" type="checkbox" value="allowed-optional" />
                                        <label className="label-for-ck w-80 h-100" htmlFor="allowOpt">이벤트, 쿠폰 알림 메일 및 SNS 수신(선택)</label>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-join">
                                <button className="px-2 py-2 mt-3 d-block w-100 bg-primary rounded text-white fw-bold">{isLoading ? "처리중" : "회원가입"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}