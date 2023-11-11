import { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { auth } from "./firebase";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./routes/login";
import Join from "./routes/join";
import Home from "./routes/home";
import Layout from "./components/layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path:"", 
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/join",
                element: <Join />
            },
        ]
    },
  ]);

const GlobalStyles = createGlobalStyle`
    *{box-sizing: border-box; margin: 0; padding: 0;}
`;

const Wrapper = styled.div`
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
                <RouterProvider router={router}/>
        </Wrapper>
    )
}

export default App
