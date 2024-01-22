import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../global/heading";
import LibraryCategory from "./library-category";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";


const Section = styled.section``;
const Thumbnail = styled.div`
    position: relative;
    & img{
        aspect-ratio: 4 / 3;
        width: 100%;
        overflow: hidden;
        height: 100%;
        border-radius: 8px;
    }
    & .tag{
        position: absolute;
        top: 12px;
        left: 12px;
        padding: 2px 8px;
        border-radius: 4px;
        background-color: #fff;
        font-weight: bold;
        color: #0756ff;
    }
`;
const Title = styled.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; 

`;

export default function Libraries() {
    const [library, setLibrary] = useState<any[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'library'));
                
                const documentData = querySnapshot.docs.map((doc) => {
                    return {
                    id: doc.id,
                    ...doc.data(),
                    };
                });
        
                setLibrary(documentData);
            } catch (error) {
                console.error('Error getting documents:', error);
            }
        };
        fetchData();
    }, []);

    return(
        <Section className="py-5">
            <Container>
                <Heading labelTxt={"NEWS & NOTICE"} titTxt1={`한국접근성평가연구원의 소식`} titTxt2={""} txtAlign={"center"}/>
                <LibraryCategory></LibraryCategory>
                <Row>
                    {
                        library.map((list, i) => {
                            const crtAt = new Date(list.createdAt);
                            let yy = crtAt.getFullYear();
                            let mm:any = crtAt.getMonth() + 1;
                            if(mm < 10) {
                                mm = "0" + mm;
                            }
                            let dd:any = crtAt.getDate();
                            if(dd < 10) {
                                dd = "0" + dd;
                            }
                            return (
                                // <List key={list.realCreatedAt + "_" + i}>
                                //     <Row className="py-2">
                                //         <Col xs={2} className="text-center">{list.category}</Col>
                                //         <Col xs={5} className="text-truncate">{list.tit}</Col>
                                //         <Col xs={2} className="text-center">{`${yy}.${mm}.${dd}`}</Col>
                                //         <Col xs={3} className="text-center">
                                //             <Btn className="px-2 py-1 bg-gray-200 rounded fs-6 fw-bold" type="button" value={"보기/수정"} />
                                //             <Btn className="px-2 py-1 bg-gray-200 rounded fs-6 fw-bold ms-2" type="button" value={"삭제"} />
                                //         </Col>
                                //     </Row>
                                // </List>
                                <Col xs={6} sm={6} md={4} lg={3} className="mb-3" key={list.realCreatedAt + "_" + i}>
                                    <div className="border rounded-4 p-2">
                                        <a href={list.redirectionURL} target="_blank">
                                            <Thumbnail>
                                                <div className="tag fs-6">보도자료</div>
                                                <img src="https://firebasestorage.googleapis.com/v0/b/kcaar-65f39.appspot.com/o/default%2Fnews7.jpeg?alt=media&token=3e34c1d8-58fb-4609-bd4a-77f102c17b58" alt="장애인이 키오스크를 통해 주문하는 모습" />
                                            </Thumbnail>
                                            <Title className="tit my-2">{list.tit}</Title>
                                            <div className="date fs-6 fw-bold text-gray-600">{`${yy}-${mm}-${dd}`}</div>
                                        </a>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </Section>
    )
}