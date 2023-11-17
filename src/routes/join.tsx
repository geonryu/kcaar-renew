// import { FirebaseError } from "firebase/app";
// import { ActionCodeOperation, createUserWithEmailAndPassword, deleteUser, getAuth, sendEmailVerification, sendSignInLinkToEmail, signOut, updateProfile } from "firebase/auth";
// import { useEffect, useState } from "react";
// import { useNavigate, useResolvedPath, useRoutes } from "react-router-dom";
// import { auth, db } from "../firebase";
// import styled from "styled-components";
// import { addDoc, collection, updateDoc } from "firebase/firestore";
// import firebase from "firebase/compat/app";

// export default function Join() {
//     const navigate = useNavigate();
//     const [isLoading, setLoading] = useState(false);
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [tel, setTel] = useState("");
//     const [allowService, setAllowService] = useState("false");
//     const [allowPriv, setAllowPriv] = useState("false");
//     const [allowOpt, setAllowOpt] = useState("false");
//     const [error, setError] = useState("");
//     const [emailErr, setEmailErr] = useState("true");
//     const [ckEn, setCkEn] = useState("");
//     const [ckNum, setCkNum] = useState("");
//     const [ckSpe, setCkSpe] = useState("");
//     const [ckLen, setCkLen] = useState("");
//     const [ckPw, setCkPw] = useState("true");
//     const [cert, setCert] = useState("false");//인증버튼 제어
//     const [flag, setFlag] = useState(true);
//     const [certResult, setCertResult] = useState(false);
//     const [certError, setCertError] = useState(false);
//     const [emailVerifiedStatus, setEmailVerifiedStatus] = useState(false);

//     useEffect(() => {
//         if (flag) {
//           const intervalId = setInterval(() => {
//                 auth.currentUser?.reload();
//                 if (auth.currentUser?.emailVerified) {
//                     clearInterval(intervalId);
//                     deleteUser(auth.currentUser).then(() => {
//                         setEmailVerifiedStatus(true);
//                         setCertResult(true);
//                     }).catch((error) => {
                        
//                     });
//                 }
//           } , 1000);
//         }
//     }, [flag]);
    

//     const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
//         const {
//             target: {name, value}
//         } = e;
//         if(name === "name") {
//             setName(value);
//         } else if(name === "email") {
//             setEmail(value);
//             setCertResult(false);
//             const re = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
//             if(!re.test(value)) {
//                 setEmailErr("false");
//             } else {
//                 setEmailErr("true");
//             }
//             if(emailErr === "true" && value.length >= 2) {
//                 setCert("true");
//             } else {
//                 setCert("false");
//             }
//         } else if(name === "password") {
//             const num = value.search(/[0-9]/g);
//             const eng = value.search(/[a-z]/gi);
//             const spe = value.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
//             value.length < 8 || value.length > 20 ? setCkLen("no") : setCkLen("ok");
//             eng < 0 ? setCkEn("no") : setCkEn("ok");
//             num < 0 ? setCkNum("no") : setCkNum("ok");
//             spe < 0 ? setCkSpe("no") : setCkSpe("ok");
//             setPassword(value);
//         } else if(name === "passwordCk") {
//             if(value !== password) {
//                 setCkPw("false");
//             } else {
//                 setCkPw("true");
//             }
//         } else if(name === "tel") {
//             let dashed = value.replace(/[^0-9]/g, "").replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
//             setTel(dashed);
//         } else if(name === "allowService") {
//             if(e.target.checked) {
//                 setAllowService(value);
//             } else {
//                 setAllowService("false");
//             }
//         } else if(name === "allowPriv") {
//             if(e.target.checked) {
//                 setAllowPriv(value);
//             } else {
//                 setAllowPriv("false");
//             }
//         } else if(name === "allowOpt") {
//             if(e.target.checked) {
//                 setAllowOpt(value);
//             } else {
//                 setAllowOpt("false");
//             }
//         }
//     }

//     const onClickToCert = async (e : React.MouseEvent<HTMLInputElement>) => {
//         const temporalPassword = Math.random().toString(36);
//         try{
//             const credentials = await createUserWithEmailAndPassword(auth, email, temporalPassword);
//             await updateProfile(credentials.user,{
//                 displayName: name,
//             }); 
//         } catch(e) {
//             if(e instanceof FirebaseError) {
//                 console.error(e.message);
//                 setCertError(true);
//             }
//         } finally {
//             const temporalUser = auth.currentUser;
//             setCert("false");
//             // await temporalUser.sendEma();
//             sendEmailVerification(temporalUser)
//             .then(() => {
//                 alert("이메일을 확인하여 인증을 완료해주세요.");
//             });
//         }
//     }
    
//     const onSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setError("");
//         if(emailVerifiedStatus === false) {setError("이메일을 인증해주세요."); return;}
//         if(name === "") {setError("이름 또는 단체(법인)명을 확인해주세요."); return;}
//         if(tel === "") {setError("전화번호를 입력해주세요."); return;}
//         if(allowService === "false") {setError("이용약관을 동의해주세요."); return;}
//         if(allowPriv === "false") {setError("개인정보수집 및 이용동의를 체크해주세요."); return;}
//         // console.log(isLoading || name === "" || email === "" || password === "" || tel==="" || allowService === "false" || allowPriv === "false" || emailErr === "false" || ckPw === "false" || ckEn === "no" || ckNum === "no" || ckSpe === "no" || ckLen === "no");
//         if(isLoading || name === "" || email === "" || password ==="" || tel==="" || allowService === "false" || allowPriv === "false" || emailErr === "false" || ckPw === "false" || ckEn === "no" || ckNum === "no" || ckSpe === "no" || ckLen === "no" || !emailVerifiedStatus) return;

//         try{
//             setLoading(true);
//             const credentials = await createUserWithEmailAndPassword(auth, email, password);
//             await updateProfile(credentials.user,{
//                 displayName: name,
//             }); 
//             await addDoc(collection(db, "users"), {
//                 username: credentials.user.displayName || "Anonymous",
//                 uid : credentials.user.uid,
//                 email : credentials.user.email,
//                 phoneNum : tel,
//                 allowService : allowService,
//                 allowPriv : allowPriv,
//                 allowOpt : allowOpt,
//                 emailVerifiedStatus : emailVerifiedStatus
//             }); //db 저장 
//             navigate("/");
//         } catch(e) {
//             if(e instanceof FirebaseError) {
//                 setError(e.message);
//                 if(e.message === "Firebase: Error (auth/email-already-in-use)."){
//                     setError("이미 사용중인 이메일입니다.");
//                 }
//             }
//         } finally {
//             setLoading(false)
//         }
//     }

//     return (
//         <div className="join py-5">
//             <div className="container">
//                 <div className="wrapper col-12 col-lg-6 col-xl-4 mx-lg-auto">
//                     <h2 className="border-bottom text-center pb-3 mb-3 fw-bold"><span className="fs-6 d-block text-primary mb-2 text-center fw-bold">한국접근성평가연구원</span>회원가입</h2>
//                     <div className="emailJoin">
//                         <form action="" id="joinForm" onSubmit={onSubmit}>
//                             <div className="join-id mb-3">
//                                 <label className="mb-1 text-primary-blue fw-bold fs-6" htmlFor="email">아이디(이메일)</label>
//                                 <div className="ck-auth d-flex border border-primary rounded">
//                                     <input className="px-2 py-2 bg-white d-block rounded w-100" onChange={onChange} type="text" id="email" name="email" placeholder="아이디(이메일)을 입력" required/>
//                                     {cert === "true" ? <input onClick={onClickToCert} id="certEmail" type="button" className="col col-2 px-2 py-2 bg-primary text-white bg-bgDisabled rounded" value="인증" /> : <input onClick={onClickToCert} id="certEmail" type="button" className="col col-2 px-2 py-2 bg-primary text-white bg-bgDisabled rounded" value="인증" disabled/>}
//                                 </div>
//                                 {emailErr === "false" ? <span className="px-1 fs-6 text-point">{"정확한 이메일 주소를 입력해주세요."}</span> : null}
//                                 {certResult === true ? <span className="px-1 fs-6 text-secondary">{"인증이 정상적으로 처리되었습니다."}</span> : null}
//                                 {certError ? <span className="px-1 fs-6 text-point">{"이미 가입된 이메일입니다."}</span> : null}
//                             </div>
//                             <div className="join-pw mb-3">
//                                 <label className="mb-1 text-primary-blue fw-bold fs-6" htmlFor="password">비밀번호</label>
//                                 <input className="px-2 py-2 bg-white border border-primary d-block rounded w-100" onChange={onChange} type="password" id="password" name="password" placeholder="비밀번호 입력" maxLength="20" required/>
//                                 <div className="ck-pw-eff">
//                                     {ckEn === "ok" ? <span className="px-1 me-1 fs-6 text-primary">영문</span> : <span className="px-1 me-1 fs-6 text-gray-500">영문</span>} 
//                                     {ckNum === "ok" ?<span className="px-1 me-1 fs-6 text-primary">숫자</span> : <span className="px-1 me-1 fs-6 text-gray-500">숫자</span>}
//                                     {ckSpe === "ok" ?<span className="px-1 me-1 fs-6 text-primary">특수문자</span> : <span className="px-1 me-1 fs-6 text-gray-500">특수문자</span>}
//                                     {ckLen === "ok" ?<span className="px-1 me-1 fs-6 text-primary">8-20자 이내</span> : <span className="px-1 me-1 fs-6 text-gray-500">8-20자 이내</span>}
//                                 </div>
//                             </div>
//                             <div className="join-pw-ck mb-3">
//                                 <label className="mb-1 text-primary-blue fw-bold fs-6" htmlFor="passwordCk">비밀번호 확인</label>
//                                 <input className="px-2 py-2 bg-white border border-primary d-block rounded w-100" onChange={onChange} type="password" id="passwordCk" name="passwordCk" placeholder="비밀번호 확인" maxLength="20" required/>
//                                 {ckPw !== "true" ? <span className="px-1 fs-6 text-point">{"비밀번호가 일치하지 않습니다."}</span> : null}
//                             </div>
//                             <div className="join-name mb-3">
//                                 <label className="mb-1 text-primary-blue fw-bold fs-6" htmlFor="joinName">이름</label>
//                                 <input id="joinName" onChange={onChange} name="name" className="px-2 py-2 bg-white border border-primary d-block rounded w-100" type="text" placeholder="이름 또는 단체(법인)명" />
//                             </div>
//                             <div className="join-auth pb-3">
//                                 <label className="text-primary-blue fw-bold fs-6" htmlFor="tel">본인인증</label>
//                                 <input id="tel" onChange={onChange} className="px-2 py-2 bg-white border border-primary d-block rounded w-100" name="tel" type="tel" placeholder="휴대전화 번호 입력" maxLength="13" value={tel} />
//                                 {/* <div className="ck-auth mb-3 d-flex border border-primary rounded">
//                                     <input className="w-100 px-2 py-2 " type="num" maxLength="" placeholder="인증번호입력" disabled />
//                                     <input id="certEmail" type="button" className="col col-2 px-2 py-2 bg-primary text-white bg-bgDisabled rounded" value="인증" disabled />
//                                 </div> */}
//                                 {/* <input id="certCall" className="sms px-2 py-2 d-block w-100 bg-primary rounded text-white fw-bold bg-bgDisabled" type="button" value="인증번호 전송" disabled /> */}
//                             </div>
//                             <hr className="hr" />
//                             <div className="policy pt-3">
//                                 <div className="label-policy mb-1 text-primary-blue fw-bold fs-6">약관동의</div>
//                                 <div className="allow-all position-relative px-2 py-2 rounded bg-white mb-1">
//                                     <input id="allowAll" name="allowAll" className="ck" type="checkbox" />
//                                     <label className="label-for-ck w-100 h-100" htmlFor="allowAll">약관 전체동의</label>
//                                 </div>
//                                 <div className="allow-list rounded bg-white">
//                                     <div className="allow-service position-relative border-bottom px-2 py-2 d-flex justify-content-between">
//                                         <input id="allowService" name="allowService" onChange={onChange} className="ck" type="checkbox" value="agree" />
//                                         <label className="label-for-ck w-80 h-100" htmlFor="allowService">이용약관(필수)</label>
//                                         <a href="#" className="d-flex text-decoration-underline">[보기]</a>
//                                     </div>
//                                     <div className="allow-priv position-relative border-bottom px-2 py-2 d-flex justify-content-between">
//                                         <input id="allowPriv" name="allowPriv" onChange={onChange} className="ck" type="checkbox" value="agree" />
//                                         <label className="label-for-ck w-80 h-100" htmlFor="allowPriv">개인정보수집 및 이용동의(필수)</label>
//                                         <a href="#" className="d-flex text-decoration-underline">[보기]</a>
//                                     </div>
//                                     <div className="allow-opt position-relative border-bottom px-2 py-2 d-flex justify-content-between">
//                                         <input id="allowOpt" name="allowOpt" onChange={onChange} className="ck" type="checkbox" value="agree" />
//                                         <label className="label-for-ck w-80 h-100" htmlFor="allowOpt">이벤트, 쿠폰 알림 메일 및 SNS 수신(선택)</label>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="btn-join">
//                                 <button className="px-2 py-2 mt-3 d-block w-100 bg-primary rounded text-white fw-bold">{isLoading ? "처리중" : "회원가입"}</button>
//                             </div>
//                             {error !== "" ? <span className="px-1 mt-2 fs-6 text-point d-block">{error}</span> : null}
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }