
import styled from "styled-components";
import Heading from "../../global/heading";
import { useEffect, useState } from "react";
import { auth, db } from "../../../firebase";
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";

const Section = styled.section``;

export default function MyInformation() {
    const [userData, setUserData] = useState<any | null>(null);
    const [isLoading] = useState(false);
    const [allowAll, setAllowAll] = useState(false)
    const [allowService, setAllowService] = useState(false);
    const [allowPriv, setAllowPriv] = useState(false);
    const [allowOpt, setAllowOpt] = useState(false);
    const [error, setError] = useState("");
    const user: any = auth.currentUser;

    useEffect(() => {
        if(allowService && allowPriv && allowOpt) {
            setAllowAll(true);
        } else {
            setAllowAll(false);
        }
    }, [allowAll, allowService, allowPriv, allowOpt]);
    
    useEffect(() => {
        const fetchUser = async() => {
            try {
                const collectionRef = collection(db, 'users');
                const userQuery = query(collectionRef, where('uid', '==', user.uid));
                const querySnapshot = await getDocs(userQuery);

                if (!querySnapshot.empty) {
                    const result = querySnapshot.docs[0].data();
                    setAllowOpt(result.allowOpt);
                    setUserData(result);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            
        }
        fetchUser();
    }, []);

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: {name}
        } = e;
        if(name === "allowOpt") {
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

        if(isLoading ) return;

        try {
            const q = query(collection(db, 'users'), where('uid', '==', user.uid));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach( async(docSnapshot) => {
                const userDocRef = doc(db, 'users', docSnapshot.id);
                const updateData = {
                    allowOpt: allowOpt,
                };
                await updateDoc(userDocRef, updateData);
            });
        } catch (err) {
            console.error(err);
        }
    }
    // const userDocRef = doc(db, 'users', user.uid);
    // const userDocSnapshot = await getDoc(userDocRef);
    // if (userDocSnapshot.exists()) {
    //     await updateDoc(userDocRef, { allowOpt : allowOpt });
    //     alert("정보가 수정되었습니다.");
    // } else {
    //     await setDoc(userDocRef, { allowOpt : allowOpt });
    // }
    
    return(
        <Section className="py-5">
            <Heading labelTxt={"MY INFORMATION"} titTxt1={`내 가입정보`} titTxt2={""} txtAlign={"center"}/>
            <div className="wrapper col-12 col-lg-6 col-xl-4 mx-lg-auto border-top py-5">
                <div className="emailJoin">
                    <form action="" id="joinForm" onSubmit={onSubmit}>
                        <div className="join-id mb-3">
                            <label className="mb-1 text-primary-blue fw-bold fs-6" htmlFor="email">아이디(이메일)</label>
                            <div className="ck-auth d-flex border border-primary rounded">
                                <input className="px-2 py-2 bg-white d-block rounded w-100" defaultValue={userData ? userData.email : ""} readOnly onChange={onChange} type="text" id="email" name="email" required/>
                            </div>
                        </div>
                        <div className="join-name mb-3">
                            <label className="mb-1 text-primary-blue fw-bold fs-6" htmlFor="joinName">이름</label>
                            <input id="joinName" defaultValue={userData ? userData.username : ""} readOnly onChange={onChange} name="name" className="px-2 py-2 bg-white border border-primary d-block rounded w-100" type="text" placeholder="이름 또는 단체(법인)명" />
                        </div>
                        <div className="join-auth pb-3">
                            <label className="text-primary-blue fw-bold fs-6" htmlFor="tel">연락처</label>
                            <input id="tel" onChange={onChange} defaultValue={userData ? userData.phoneNum : ""} readOnly className="px-2 py-2 bg-white border border-primary d-block rounded w-100" name="tel" type="tel" placeholder="휴대전화 번호" maxLength={13} />
                        </div>
                        <hr className="hr" />
                        <div className="policy pt-3">
                            <div className="label-policy mb-1 text-primary-blue fw-bold fs-6">약관동의</div>
                            <div className="allow-list rounded bg-white">
                                <div className="allow-service position-relative border-bottom px-2 py-2 d-flex justify-content-between">
                                    <input id="allowService" name="allowService" onChange={onChange} className="ck" type="checkbox" value="agree" checked />
                                    <label className="label-for-ck w-80 h-100" htmlFor="allowService">이용약관(필수)</label>
                                    <a href="#" className="d-flex text-decoration-underline">[보기]</a>
                                </div>
                                <div className="allow-priv position-relative border-bottom px-2 py-2 d-flex justify-content-between">
                                    <input id="allowPriv" name="allowPriv" onChange={onChange} className="ck" type="checkbox" value="agree" checked />
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