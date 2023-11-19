import styled from "styled-components";
import { Col } from "react-bootstrap";
import { useState } from "react";
import { EmailAuthProvider, getAuth, reauthenticateWithCredential } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Section = styled.section``;

export default function ReCheckAuth() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleReauthentication = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            const credentials = EmailAuthProvider.credential(user.email, password);
            
            try {
                await reauthenticateWithCredential(user, credentials);
                navigate("/mypage/myinformation", { state: true });
            } catch (err) {
                setError("error");
            }
        }
      };

    return(
        <Section className="py-5">
            <h3 className="fs-5 fw-bold mb-3 text-center">비밀번호 확인</h3>
            <div className="text-center mb-5">안전한 정보 관리를 위하여 비밀번호를 재확인합니다.</div>
            <form action="" onSubmit={handleReauthentication}>
                <div className="d-flex justify-content-center flex-wrap col-md-8 mx-auto">
                    <Col xs={12} sm={9} className="me-3"><input onChange={handlePasswordChange} type="password" className="border rounded d-block w-100 p-2 mb-3 mb-md-2" /></Col>
                    <Col xs={12} sm={2}><input type="button" className="border rounded d-block w-100 py-2 bg-primary text-white fw-bold" value={"확인"} /></Col>
                    {
                        error ? (
                            <div className="text-point fs-6">비밀번호를 확인해주세요.
                                <Link to={"/"} className="fs-6 text-primary d-block text-decoration-underline mt-5">비밀번호를 잊으셨나요?</Link>
                            </div>
                        ) : null
                    }
                </div>
            </form>
        </Section>
    )
}