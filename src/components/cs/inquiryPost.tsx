import styled from "styled-components"
import Heading from "../global/heading";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { auth, db, storage } from "../../firebase";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const Section = styled.section``;

const Select = styled.div`
    position: relative;
`;
const Selected = styled.div``;
const Options = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #fff;
`;
const Opt = styled.button`
    display: block;
    width: 100%;
    text-align: left;
    &:hover{background-color: #eff4fe;}
`;
const Input = styled.input``;
const Textarea = styled.textarea``;
const AttachFileButton = styled.label``;
const AttachFileInput = styled.input``;

const inquiryCategory = [
    "가전 접근성시험평가 의뢰",
    "키오스크 접근성시험평가 의뢰",
    "접근성 컨설팅 의뢰",
    "연구 및 제휴",
    "이용문의",
    "기타",
];

export default function InquiryPost() {
    const [ isPop, setIsPop] = useState(false);
    const [ seletedIndex, setSelectedIndex ] = useState(99999);
    const [ seletedValue, setSelectedValue ] = useState("문의 유형을 선택해주세요.");
    const [tit, setTit] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState<File | null>(null);//File이거나 Null
    const [fileName, setFileName] = useState("");
    const navigate = useNavigate();

    const handlePop = () => {
        setIsPop(!isPop);
    }

    const handleSelect = (e : React.MouseEvent<HTMLButtonElement>) => {
        const idx = Number(e.currentTarget.getAttribute("data-idx"));
        const val = e.currentTarget.value;
        setSelectedIndex(idx);
        setSelectedValue(val);
        setIsPop(false);
    }

    const onFocusedTextarea = () => {
        setContent("");
    }

    const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: {name, value}
        } = e; 
        if(name === "tit") {
            setTit(value);
        }
    }
    const onChangeTextarea = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const {
            target: {name, value}
        } = e; 
        if(name === "content") {
            setContent(value);
        }
    }
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: {name, files}
        } = e; 
        if(name === "file") {
            if(files && files.length === 1) {
                setFile(files[0]);
                setFileName(files[0].name);
            }
        } 
    }

    const onSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user = auth.currentUser;
        if(!user) return;
        try {
            const doc = await addDoc(collection(db, "inquiry"), {
                category: seletedValue,
                writer : user.displayName,
                email : user.email,
                writerId : user.uid,
                phoneNum : user.phoneNumber,
                tit : tit,
                content : content,
                createdAt : Date.now(),
                ans : "" 
            }); //db 저장
            await updateDoc(doc, {
                id: doc.id
            });
            if(file) {
                const locationRef = ref(storage, `inquiry/${tit}/${doc.id}`);
                const result = await uploadBytes(locationRef, file);
                const url = await getDownloadURL(result.ref);
                await updateDoc(doc, {
                    attached: url,
                    attachedName : file.name
                });
            }
           
        } catch(e) {
            console.log(e);
        } finally {
            navigate("/contact");
        }
    }

    return (
        <Section className="py-5 col col-12 col-md-8 mx-auto">
            <Container>
                <Heading labelTxt={"CONTACT"} titTxt1={`문의하기`} titTxt2={""} txtAlign={"center"}/>
                <form action="" onSubmit={onSubmit}>
                    <Select>
                        <Selected onClick={handlePop} className={`py-1 px-2 rounded border d-flex justify-content-between`}>{seletedValue}<span className="material-symbols-outlined">expand_more</span></Selected>
                        <Options className={`border rounded mt-2 ${isPop ? "d-block" : "d-none"}`}>
                            {
                                inquiryCategory.map((opt, i) => {
                                    return <Opt onClick={handleSelect} className={`py-1 px-2 ${seletedIndex === i ? "bg-primary text-white" : ""}`} data-idx={i} value={opt} name="opt" type="button">{opt}</Opt>
                                })
                            }
                        </Options>
                    </Select>
                    <Input onChange={onChangeInput} placeholder="제목을 입력해주세요." name="tit" type="text" className="border rounded w-100 px-2 py-1 mt-3"/>
                    <Textarea onFocus={onFocusedTextarea} placeholder="문의하실 내용을 작성해주세요." onChange={onChangeTextarea} className="border rounded w-100 mt-3 p-2" name="content" rows={10}></Textarea>
                    <div className="d-flex mt-3">
                        <input className="border rounded col d-block px-2 py-1 fs-6 text-gray-600" type="text" readOnly value={fileName !== "" ? fileName : "파일은 최대 10MB까지 업로드 하실 수 있습니다."} />
                        <AttachFileButton className="btn border fw-bold d-block ms-2" htmlFor="file">파일첨부</AttachFileButton>
                        <AttachFileInput
                            onChange={onFileChange}
                            name="file"
                            type="file"
                            id="file"
                            accept="image/*, application/pdf, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.openxmlformats-officedocument.wordprocessingml.document" className="d-none"
                        />
                    </div>
                    <div className="fs-6 text-gray-600">이미지파일, .hwp, .pdf, .xlsx 확장자만 업로드 가능합니다.</div>
                    <input type="submit" value="등록하기" className="d-block col-12 col-md-4 bg-primary text-white rounded py-2 fw-bold mx-auto mt-5" />
                </form>
            </Container>
        </Section>
    )
}