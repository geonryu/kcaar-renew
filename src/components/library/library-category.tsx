import { useState } from "react";
import { Badge, Container } from "react-bootstrap";
import styled from "styled-components";

const Badges = styled.div`
    & .filter{
        text-wrap: nowrap;     
    }
    & .category{
        overflow-y : scroll;
    }
    & .category .track{
        min-width: max-content;
    }

    & .badge {background-color: #d4e4ff; color: #000; opacity: 50%; &:hover{opacity: 100%;} &.on{opacity: 100%; color: #007aff}}
`;
// const BadgeDefault = styled.div`background-color: #e9ecef; color: #000000; opacity: 50%; &:hover{opacity: 100%;} &.on{opacity: 100%;}`;
// const BadgeNotice = styled.div`background-color: #d4e4ff; color: #2979ff; opacity: 50%; &:hover{opacity: 100%;} &.on{opacity: 100%;}`;
// const BadgeAttach = styled.div`background-color: #fee8f2; color: #f6338a; opacity: 50%; &:hover{opacity: 100%;} &.on{opacity: 100%;}`;
// const BadgeIr = styled.div`background-color: #e5f9f6; color: #00bfa5; opacity: 50%; &:hover{opacity: 100%;} &.on{opacity: 100%;}`;
// const BadgePress = styled.div`background-color: #ffebe5; color: #ff3d00; opacity: 50%; &:hover{opacity: 100%;} &.on{opacity: 100%;}`;
// const BadgeMedia = styled.div`background-color: #efe8ff; color: #651dff; opacity: 50%; &:hover{opacity: 100%;} &.on{opacity: 100%;}`;
// const BadgeEtc = styled.div`background-color: #ccf2f6; color: #00bcd4; opacity: 50%; &:hover{opacity: 100%;} &.on{opacity: 100%;}`;

export default function LibraryCategory() {
    const [badge, SetBadge] = useState("default");
    const onClickBadge = (e : React.MouseEvent<HTMLInputElement>) => {
        const tit = e.currentTarget.getAttribute("data-tit") || "dafault";
        SetBadge(tit);
    }

    return (
        <Container>
            <Badges className="pb-2 border-bottom mb-3 d-flex align-items-center">
                <div className="pb-2 d-flex align-items-center pe-3 bg-white filter text-gray-800"><span className="material-symbols-outlined fs-5">tune</span> 카테고리</div>
                <div className="pb-2 category w-100">
                    <div className="track">
                        <div onClick={onClickBadge} data-tit="default" className={`badge fs-6 me-2 ${badge === 'default' ? 'on' : null}`}><a href="#">전체보기</a></div>
                        <div onClick={onClickBadge} data-tit="notice" className={`badge fs-6 me-2 ${badge === 'notice' ? 'on' : null}`}><a href="#">공지사항</a></div>
                        <div onClick={onClickBadge} data-tit="attach" className={`badge fs-6 me-2 ${badge === 'attach' ? 'on' : null}`}><a href="#">참고자료</a></div>
                        <div onClick={onClickBadge} data-tit="ir" className={`badge fs-6 me-2 ${badge === 'ir' ? 'on' : null}`}><a href="#">공시자료</a></div>
                        <div onClick={onClickBadge} data-tit="press" className={`badge fs-6 me-2 ${badge === 'press' ? 'on' : null}`}><a href="#">언론보도</a></div>
                        <div onClick={onClickBadge} data-tit="media" className={`badge fs-6 me-2 ${badge === 'media' ? 'on' : null}`}><a href="#">미디어</a></div>
                        <div onClick={onClickBadge} data-tit="etc" className={`badge fs-6 ${badge === 'etc' ? 'on' : null}`}><a href="#">기타</a></div>
                    </div>
                </div>
            </Badges>
        </Container>
    )
}