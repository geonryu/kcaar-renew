
import styled from "styled-components";
import Heading from "../../global/heading";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, db } from "../../../firebase";
import { createUserWithEmailAndPassword, deleteUser, sendEmailVerification, updateProfile } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { addDoc, collection } from "firebase/firestore";

const Section = styled.section``;

export default function MyInformation() {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tel, setTel] = useState("");
    const [allowAll, setAllowAll] = useState(false)
    const [allowService, setAllowService] = useState(false);
    const [allowPriv, setAllowPriv] = useState(false);
    const [allowOpt, setAllowOpt] = useState(false);
    const [error, setError] = useState("");
    const [emailErr, setEmailErr] = useState("true");
    const [ckEn, setCkEn] = useState("");
    const [ckNum, setCkNum] = useState("");
    const [ckSpe, setCkSpe] = useState("");
    const [ckLen, setCkLen] = useState("");
    const [ckPw, setCkPw] = useState("true");
    const [cert, setCert] = useState("false");//인증버튼 제어
    const [flag, setFlag] = useState(true);
    const [certResult, setCertResult] = useState(false);
    const [certError, setCertError] = useState(false);

    useEffect(() => {
        if(allowService && allowPriv && allowOpt) {
            setAllowAll(true);
        } else {
            setAllowAll(false);
        }
    }, [allowAll, allowService, allowPriv, allowOpt]);
    

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: {name, value}
        } = e;
        if(name === "name") {
            setName(value);
        } else if(name === "email") {
            setEmail(value);
            setCertResult(false);
            const re = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
            if(!re.test(value)) {
                setEmailErr("false");
            } else {
                setEmailErr("true");
            }
            if(emailErr === "true" && value.length >= 2) {
                setCert("true");
            } else {
                setCert("false");
            }
        } else if(name === "password") {
            const num = value.search(/[0-9]/g);
            const eng = value.search(/[a-z]/gi);
            const spe = value.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
            value.length < 8 || value.length > 20 ? setCkLen("no") : setCkLen("ok");
            eng < 0 ? setCkEn("no") : setCkEn("ok");
            num < 0 ? setCkNum("no") : setCkNum("ok");
            spe < 0 ? setCkSpe("no") : setCkSpe("ok");
            setPassword(value);
        } else if(name === "passwordCk") {
            if(value !== password) {
                setCkPw("false");
            } else {
                setCkPw("true");
            }
        } else if(name === "tel") {
            let dashed = value.replace(/[^0-9]/g, "").replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
            setTel(dashed);
        } else if(name === "allowService") {
            if(e.target.checked) {
                setAllowService(true);
            } else {
                setAllowService(false);
            }
        } else if(name === "allowPriv") {
            if(e.target.checked) {
                setAllowPriv(true);
            } else {
                setAllowPriv(false);
            }
        } else if(name === "allowOpt") {
            if(e.target.checked) {
                setAllowOpt(true);
            } else {
                setAllowOpt(false);
            }
        } else if(name === "allowAll") {
            if(!allowAll) {
                setAllowAll(true);
                setAllowService(true);
                setAllowPriv(true);
                setAllowOpt(true);
            } else {
                setAllowAll(false);
                setAllowService(false);
                setAllowPriv(false);
                setAllowOpt(false);
            }
        }
    }

    const onSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        if(name === "") {setError("이름 또는 단체(법인)명을 확인해주세요."); return;}
        if(tel === "") {setError("전화번호를 입력해주세요."); return;}
        if(allowService === false) {setError("이용약관을 동의해주세요."); return;}
        if(allowPriv === false) {setError("개인정보수집 및 이용동의를 체크해주세요."); return;}
        // console.log(isLoading || name === "" || email === "" || password === "" || tel==="" || allowService === "false" || allowPriv === "false" || emailErr === "false" || ckPw === "false" || ckEn === "no" || ckNum === "no" || ckSpe === "no" || ckLen === "no");
        if(isLoading || name === "" || email === "" || password ==="" || tel==="" || !allowService || !allowPriv || emailErr === "false" || ckPw === "false" || ckEn === "no" || ckNum === "no" || ckSpe === "no" || ckLen === "no" || !emailVerifiedStatus) return;

        try{
            setLoading(true);
            const credentials = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(credentials.user,{
                displayName: name,
            }); 
            await addDoc(collection(db, "users"), {
                username: credentials.user.displayName || "Anonymous",
                uid : credentials.user.uid,
                email : credentials.user.email,
                phoneNum : tel,
                allowService : allowService,
                allowPriv : allowPriv,
                allowOpt : allowOpt,
            }); //db 저장 
            navigate("/");
        } catch(e) {
            if(e instanceof FirebaseError) {
                setError(e.message);
                if(e.message === "Firebase: Error (auth/email-already-in-use)."){
                    setError("이미 사용중인 이메일입니다.");
                }
            }
        } finally {
            setLoading(false)
        }
    }
    return(
        <Section className="py-5">
            <Heading labelTxt={"MY INFORMATION"} titTxt1={`내 가입정보`} titTxt2={""} txtAlign={"center"}/>
            <div className="wrapper col-12 col-lg-6 col-xl-4 mx-lg-auto border-top py-5">
                <div className="emailJoin">
                    <form action="" id="joinForm" onSubmit={onSubmit}>
                        <div className="join-id mb-3">
                            <label className="mb-1 text-primary-blue fw-bold fs-6" htmlFor="email">아이디(이메일)</label>
                            <div className="ck-auth d-flex border border-primary rounded">
                                <input className="px-2 py-2 bg-white d-block rounded w-100" readOnly onChange={onChange} type="text" id="email" name="email" required/>
                            </div>
                        </div>
                        <div className="join-name mb-3">
                            <label className="mb-1 text-primary-blue fw-bold fs-6" htmlFor="joinName">이름</label>
                            <input id="joinName" onChange={onChange} name="name" className="px-2 py-2 bg-white border border-primary d-block rounded w-100" type="text" placeholder="이름 또는 단체(법인)명" />
                        </div>
                        <div className="join-auth pb-3">
                            <label className="text-primary-blue fw-bold fs-6" htmlFor="tel">연락처</label>
                            <input id="tel" onChange={onChange} className="px-2 py-2 bg-white border border-primary d-block rounded w-100" name="tel" type="tel" placeholder="휴대전화 번호" maxLength={13} value={tel} />
                        </div>
                        <hr className="hr" />
                        <div className="policy pt-3">
                            <div className="label-policy mb-1 text-primary-blue fw-bold fs-6">약관동의</div>
                            <div className="allow-all position-relative px-2 py-2 rounded bg-white mb-1">
                                <input id="allowAll" name="allowAll" className="ck" onChange={onChange} type="checkbox" value={""} checked={allowAll} />
                                <label className="label-for-ck w-100 h-100" htmlFor="allowAll">약관 전체동의</label>
                            </div>
                            <div className="allow-list rounded bg-white">
                                <div className="allow-service position-relative border-bottom px-2 py-2 d-flex justify-content-between">
                                    <input id="allowService" name="allowService" onChange={onChange} className="ck" type="checkbox" value="agree" checked={allowService} />
                                    <label className="label-for-ck w-80 h-100" htmlFor="allowService">이용약관(필수)</label>
                                    <a href="#" className="d-flex text-decoration-underline">[보기]</a>
                                </div>
                                <div className="allow-priv position-relative border-bottom px-2 py-2 d-flex justify-content-between">
                                    <input id="allowPriv" name="allowPriv" onChange={onChange} className="ck" type="checkbox" value="agree" checked={allowPriv} />
                                    <label className="label-for-ck w-80 h-100" htmlFor="allowPriv">개인정보수집 및 이용동의(필수)</label>
                                    <a href="#" className="d-flex text-decoration-underline">[보기]</a>
                                </div>
                                <div className="allow-opt position-relative border-bottom px-2 py-2 d-flex justify-content-between">
                                    <input id="allowOpt" name="allowOpt" onChange={onChange} className="ck" type="checkbox" value="agree" checked={allowOpt} />
                                    <label className="label-for-ck w-80 h-100" htmlFor="allowOpt">이벤트, 쿠폰 알림 메일 및 SNS 수신(선택)</label>
                                </div>
                            </div>
                        </div>
                        <div className="btn-join d-flex">
                            <button type="button" className="me-2 px-2 py-2 mt-3 d-block w-100 rounded fw-bold border">취소</button>
                            <button type="submit" className="px-2 py-2 mt-3 d-block w-100 bg-primary rounded text-white fw-bold">{isLoading ? "처리중" : "정보수정"}</button>
                        </div>
                        {error !== "" ? <span className="px-1 mt-2 fs-6 text-point d-block">{error}</span> : null}
                    </form>
                </div>
            </div>
        </Section>
    )
}