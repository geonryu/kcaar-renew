import { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
// import reset from "styled-reset";
import { auth } from "./firebase";
import Header from "./components/base/header";
import Footer from "./components/base/footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./routes/login";
import Join from "./routes/join";
import Home from "./routes/home";

const router = createBrowserRouter([
    {
      path:"/", 
      element: <Home />
    },
    {//로그인/회원가입 라우팅은 별도로 취급하고 싶음
        path: "/login",
        element: <Login />
    },
    {
        path: "/join",
        element: <Join />
    }
  ]);

const GlobalStyles = createGlobalStyle`
    *{box-sizing: border-box; margin: 0; padding: 0;}
`;

const Wrapper = styled.div`
`;
const Main = styled.main`
    padding-top: 60px;
    @media all and (min-width: 992px) {
        padding-top: 96px;
    }
`;
function App() {
    // const [isLoading, setIsLoading] = useState(true);
    const init =async () => {
        await auth.authStateReady();
    }
    useEffect(() => {
        init();
    }, []);
    return (
        <Wrapper>
            <GlobalStyles />
            {/* {isLoading ? <LoadingScreen /> : <RouterProvider router={router}/>} */}
            <Header />
            <Main>
                <RouterProvider router={router}/>
            </Main>
            <Footer />
        </Wrapper>
    )
}

export default App
