export default function Footer() {
    return(
        <footer className="bg-blue-dark py-5">
            <div className="container">
                <div className="top d-lg-flex justify-content-between">
                    <div className="ft-nav">
                        <ul className="p-0 text-white fw-bold d-flex flex-wrap justify-content-center justify-content-center">
                            <li className="fw-bold me-3"><a href="#">연구원 소개</a></li>
                            <li className="fw-bold me-3"><a href="#">접근성시험평가</a></li>
                            <li className="fw-bold me-3"><a href="#">접근성협의체</a></li>
                            <li className="fw-bold me-3"><a href="#">자료실</a></li>
                            <li className="fw-bold "><a href="#">문의하기</a></li>
                        </ul>
                    </div>
                    <div className="policy">
                        <ul className="p-0 text-white fw-bold d-flex justify-content-center">
                            <li className=""><a href="#">개인정보처리방침</a></li>
                            <li className="ms-3"><a href="#">이용약관</a></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom row pt-3 border-top border-white">
                    <h2 className="f-logo col-6 text-center col-md-3 mx-auto mb-3"><a href="#"><img src="https://firebasestorage.googleapis.com/v0/b/kcaar-dbf18.appspot.com/o/assets%2Fft-logo.png?alt=media&token=676b6069-e966-461b-95e5-e9ef4cdee9d0&_gl=1*15knof9*_ga*ODgwNzAyNDA3LjE2OTI0NDA5MTM.*_ga_CW55HF8NVT*MTY5OTE2Njc4MC4xNy4xLjE2OTkxNjk0OTguNjAuMC4w" alt="한국접근성평가연구원" /></a></h2>
                    <address className="text-white col-12 col-md-9 text-center text-md-start">
                        (사)한국접근성평가연구원 서울 종로구 대학로8길 26, 6층 (동숭동, 예향빌딩)<br />
                        <b>사업자등록번호</b> 139-82-03219 | <b>대표자</b> 이성일 |<br />
                        <b>eMail</b> kcaar@kcaa.re.kr | <b>대표전화</b> 02-747-7601, 010-2629-2477<br />
                        COPYRIGHT©KOREA ACCESSIBILITY RESEARCH & EVALUATION ALL RIGHTS RESERVED.
                    </address>
                </div>
            </div>
        </footer>
    )
}