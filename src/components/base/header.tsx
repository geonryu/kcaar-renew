export default function Header() {
    const opnNav = () => {
        document.querySelector("header").classList.toggle("opn");
    }
    const navOver = () => {
        document.querySelector(".navi").addEventListener("mouseover", () => {
            document.querySelector("header").classList.add("expand");
        })
        document.querySelector(".navi").addEventListener("mouseout", () => {
            document.querySelector("header").classList.remove("expand");
        });
    }

    const viewSub = (e) => {
        document.querySelectorAll(".nav-item").forEach(item => {
            item.classList.remove("active");
            e.currentTarget.classList.add("active");
        });
    }
    return (
        <header className="header bg-primary-white border-bottom fixed-top">
            <nav className="navbar navbar-expand-lg navbar-light h-100">
                <div className="container d-flex align-items-center justify-content-between h-100">
                    <h1 id="logo" className="mb-0 h-100 py-1 col-lg-3"><a href="/"><img className="h-100" src="https://firebasestorage.googleapis.com/v0/b/kcaar-dbf18.appspot.com/o/assets%2Fkcaar-logo.svg?alt=media&token=b49d8da2-7790-4c92-b523-23bba8c75a2d&_gl=1*1km8rig*_ga*ODgwNzAyNDA3LjE2OTI0NDA5MTM.*_ga_CW55HF8NVT*MTY5OTE2Njc4MC4xNy4xLjE2OTkxNjg0OTIuMzYuMC4w" alt="한국접근성평가연구원" /></a></h1>
                    <div onMouseEnter={navOver} className="navi ms-auto" id="navbarText">
                        <div className="container d-lg-flex flex-lg-row-reverse align-items-center justify-content-between h-100">
                            <div className="utils py-4 py-lg-0">
                                <div className="btn btn-primary-blue w-100 d-block text-white fw-bold ms-lg-1 ms-xl-2 rounded-pill"><a href="/login">로그인/회원가입</a></div>
                                {/* not logged in */}
                                {/* <div className="user-welcome bg-blue-light bg-lg-none w-100 p-3 p-lg-0 rounded d-lg-flex">
                                    <div className="info mb-3 pb-3 mb-lg-0 pb-lg-0 border-bottom border-lg-bottom-0 d-flex align-items-end align-items-lg-center">
                                    <div className="msg">
                                            <div className="welcome d-block d-lg-none">안녕하세요.</div>
                                            <span className="user-name fs-5 fw-bold me-1 fs-lg-0" id="userNamePrint">유건</span>님
                                        </div>
                                        <div className="mypage fw-bold ms-auto mx-lg-3"><a href="#"><span className="material-symbols-outlined d-block text-gray-700">settings</span></a></div>
                                    </div>
                                    <div className="logout text-center text-lg-start text-gray-600"><a href="#">로그아웃</a></div>
                                </div> */}
                                {/* Logged In */}
                            </div>
                            <div className="navigation h-100 border-top border-md-0">
                                <ul className="navbar-nav mr-auto fw-bold fs-5 h-100">
                                    <li onClick={viewSub} className="nav-item px-lg-1 px-xl-2 d-flex align-items-center active">
                                        <div className="nav-hd fw-normal"><button className="nav-link p-2 px-lg-1 px-xl-2 d-block w-100 text-start">연구원 소개</button></div>
                                        <ul className="sub-nav ps-1 ps-lg-0 pt-lg-2 fw-normal">
                                            <li className="sub-nav-link border-bottom border-lg-bottom-0 mx-lg-2"><a href="/intro" className="d-block p-2 w-100">인사의 글</a></li>
                                            <li className="sub-nav-link border-bottom border-lg-bottom-0 mx-lg-2"><a href="/intro" className="d-block p-2 w-100">조직도</a></li>
                                            <li className="sub-nav-link border-bottom border-lg-bottom-0 mx-lg-2"><a href="/intro" className="d-block p-2 w-100">오시는 길</a></li>
                                        </ul>
                                    </li>
                                    <li onClick={viewSub} className="nav-item px-lg-1 px-xl-2 d-flex align-items-center">
                                        <div className="nav-hd fw-normal"><button className="nav-link p-2 px-lg-1 px-xl-2 d-block w-100 text-start">접근성시험평가</button></div>
                                        <ul className="sub-nav ps-1 ps-lg-0 pt-lg-2 fw-normal">
                                            <li className="sub-nav-link border-bottom border-lg-bottom-0 mx-lg-2"><a href="#" className="d-block p-2 w-100">키오스크 접근성시험평가</a></li>
                                            <li className="sub-nav-link border-bottom border-lg-bottom-0 mx-lg-2"><a href="#" className="d-block p-2 w-100">가전 접근성시험평가</a></li>
                                        </ul>
                                    </li>
                                    <li onClick={viewSub} className="nav-item px-lg-1 px-xl-2 d-flex align-items-center">
                                        <div className="nav-hd fw-normal"><button className="nav-link p-2 px-lg-1 px-xl-2 d-block w-100 text-start">접근성협의체</button></div>
                                        <ul className="sub-nav ps-1 ps-lg-0 pt-lg-2 fw-normal">
                                            <li className="sub-nav-link border-bottom border-lg-bottom-0 mx-lg-2"><a href="#" className="d-block p-2 w-100">sub item7</a></li>
                                            <li className="sub-nav-link border-bottom border-lg-bottom-0 mx-lg-2"><a href="#" className="d-block p-2 w-100">sub item8</a></li>
                                            <li className="sub-nav-link border-bottom border-lg-bottom-0 mx-lg-2"><a href="#" className="d-block p-2 w-100">sub item9</a></li>
                                        </ul>
                                    </li>
                                    <li onClick={viewSub} className="nav-item px-lg-1 px-xl-2 d-flex align-items-center">
                                        <div className="nav-hd fw-normal"><button className="nav-link p-2 px-lg-1 px-xl-2 d-block w-100 text-start">자료실</button></div>
                                        <ul className="sub-nav ps-1 ps-lg-0 pt-lg-2 fw-normal">
                                            <li className="sub-nav-link border-bottom border-lg-bottom-0 mx-lg-2"><a href="#" className="d-block p-2 w-100">sub item7</a></li>
                                            <li className="sub-nav-link border-bottom border-lg-bottom-0 mx-lg-2"><a href="#" className="d-block p-2 w-100">sub item8</a></li>
                                            <li className="sub-nav-link border-bottom border-lg-bottom-0 mx-lg-2"><a href="#" className="d-block p-2 w-100">sub item9</a></li>
                                        </ul>
                                    </li>
                                    <li onClick={viewSub} className="nav-item px-lg-1 px-xl-2 d-flex align-items-center">
                                        <div className="nav-hd fw-normal"><button className="nav-link p-2 px-lg-1 px-xl-2 d-block w-100 text-start">문의하기</button></div>
                                        <ul className="sub-nav ps-1 ps-lg-0 pt-lg-2 fw-normal">
                                            <li className="sub-nav-link border-bottom"><a href="#" className="d-block p-2 w-100">sub item10</a></li>
                                            <li className="sub-nav-link border-bottom"><a href="#" className="d-block p-2 w-100">sub item11</a></li>
                                            <li className="sub-nav-link border-bottom"><a href="#" className="d-block p-2 w-100">sub item12</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="btn-nav-opn d-lg-none">
                        <button onClick={opnNav} className="navbar-toggler border-0 px-1 py-2">
                            <span>메뉴열기/닫기</span>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}