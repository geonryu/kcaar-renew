
export default function Login() {

    return (
        <section className="login py-5">
            <div className="container">
                <div className="wrapper col-12 col-lg-6 col-xl-4 mx-lg-auto">
                    <h2 className="login-logo border-bottom text-center pb-3 mb-3 fw-bold">로그인</h2>
                    <div className="email-login mb-3">
                        <form action="" id="loginForm">
                            <div className="user-id mb-3"><input className="px-2 py-2 bg-white border border-primary d-block rounded w-100 border d-block w-100" id="userId" type="text" placeholder={"아이디(이메일)을 입력하세요."} /></div>
                            <div className="user-pw mb-3"><input className="px-2 py-2 bg-white border border-primary d-block rounded w-100 border d-block w-100" id="userPw" type="text" placeholder={"비밀번호를 입력하세요."} /></div>
                            <div className="btn-submit"><button className="px-2 py-2 d-block w-100 bg-primary-blue text-white rounded fw-bold" id="loginSubmit" type="submit">로그인</button></div>
                        </form>
                    </div>
                    <div className="join pt-3 pb-5">
                        <div className="text-center mb-3 text-gray-600 fs-6">또는</div>
                        <div className="btn-join border border-primary-blue"><a href="/join" className="text-primary fw-bold d-block w-100 px-2 py-2 text-center rounded">이메일로 회원가입</a></div>
                    </div>
                    <div className="forgot d-flex justify-content-center border-top pt-3">
                        <div className="forgot-id fs-6 mx-3 link-gray-900"><a href="/forgotId">{"아이디 (이메일) 찾기"}</a></div> 
                        <div className="forgot-pw fs-6 mx-3 link-gray-900"><a href="#">비밀번호 찾기</a></div>
                    </div>
                </div>
            </div>
        </section>
    )
}