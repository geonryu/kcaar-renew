import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components"
import { db } from "../../firebase";
import Heading from "../global/heading";

const Section = styled.section``;
const Board = styled.div`
    overflow-x : scroll;
`;
const Member = styled.div`
    
    min-height: 500px;
`;

export default function Members() {
    const [documents, setDocuments] = useState<any[]>([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, 'users'));
    
            const documentData = querySnapshot.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            });
    
            setDocuments(documentData);
    
          } catch (error) {
            console.error('Error getting documents:', error);
          }
        };
    
        fetchData();
      }, [db]);
    return (
        <Section className="py-3">
            <Container>
                <Heading labelTxt={""} titTxt1={`회원관리`} titTxt2={""} txtAlign={"left"}/>
                <Board>
                    <div className="d-flex">
                        <div className="col-3">이메일(id)</div>
                        <div className="col-2">성명(단체명)</div>
                        <div className="col-3">연락처</div>
                        <div className="col-1">권한</div>
                        <div className="col-2 fs-6 text-center">서비스이용동의</div>
                        <div className="col-2 fs-6 text-center">개인정보활용동의</div>
                        <div className="col-2 fs-6 text-center">마케팅수신동의</div>
                    </div>
                    <Member className="border-top border-bottom">
                        
                        {
                            documents.map((mem, i)=> {
                                return (
                                    <div className="d-flex py-1" key={mem.createdAt + "_" + i}>
                                        <div className="col-3 py-2">{mem.email}</div>
                                        <div className="col-2 py-2">{mem.username}</div>
                                        <div className="col-3 py-2">{mem.phoneNum}</div>
                                        <div className="col-1 py-2">{mem.permission ? "관리자" : "일반"}</div>
                                        <div className="col-2 text-center py-2">{mem.allowService ? "동의" : "미동의"}</div>
                                        <div className="col-2 text-center py-2">{mem.allowPriv ? "동의" : "미동의"}</div>
                                        <div className="col-2 text-center py-2">{mem.allowOpt ? "동의" : "미동의"}</div>
                                    </div>
                                )
                            })
                        }
                    </Member>
                </Board>
            </Container>
        </Section>
    )
}