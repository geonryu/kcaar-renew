import styled, { createGlobalStyle } from "styled-components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./routes/layout";
import Home from "./pages/home";
import CEOMessage from "./pages/center/ceomessage";
import Location from "./pages/center/location";
import Organization from "./pages/center/organization";
import KioskEval from "./pages/evaluation/kiosk";
import ApplianceEval from "./pages/evaluation/appliance";
import Library from "./pages/library/library";
import Contact from "./pages/cs/contact";
import Counsultation from "./pages/center/counsultation";
import Accessibility from "./pages/evaluation/accessibility";
import Login from "./routes/login";
import Join from "./routes/join";
import UserInformation from "./pages/mypage/userInformation";
import QNA from "./pages/mypage/qna";
import MypageAuth from "./pages/mypage/mypage-auth";
import Mypage from "./routes/mypage";

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
                path:"/", 
                children: [
                    {
                        path: "/center/ceomessage",
                        element: <CEOMessage />
                    },
                    {
                        path: "/center/organization",
                        element: <Organization />
                    },
                    {
                        path: "/center/location",
                        element: <Location />
                    },
                    {
                        path: "/center/Counsultation",
                        element: <Counsultation />
                    }
                ]
            },
            {
                path:"/", 
                children: [
                    {
                        path: "/evaluation/accessibility",
                        element: <Accessibility />
                    },
                    {
                        path: "/evaluation/kiosk",
                        element: <KioskEval />
                    },
                    {
                        path: "/evaluation/appliance",
                        element: <ApplianceEval />
                    },
                ]
            },
            {
                path:"/library", 
                element: <Library />,
            },
            {
                path:"/contact", 
                element: <Contact />,
            },
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/join",
        element: <Join />
    },
    {
        path: "/mypage",
        element: <Mypage />,
        children: [
            {
                path: "/mypage",
                element: <MypageAuth />
            },
            {
                path: "/mypage/myInformation",
                element: <UserInformation />
            },
            {
                path: "/mypage/qna",
                element: <QNA />
            },
        ]
    },
  ]);

  const GlobalStyles = createGlobalStyle`
  *, :after, :before, ::after, ::before {box-sizing:border-box}
  * {margin:0; padding: 0; background-repeat: no-repeat; background-size: cover; background-position: center center;}
  body, html {height:100%; font-family: 'Pretendard'; font-weight: 400;}
  body {-webkit-font-smoothing:antialiased; line-height:1.5}
  canvas, img, picture, svg, video {display:block;max-width:100%}
  button, input, select, textarea {font:inherit; border: 0; background-color: transparent;}
  button{cursor: pointer;}
  h1, h2, h3, h4, h5, h6, p {overflow-wrap:break-word}
  #__next, #root {isolation:isolate}
  ul,ol{list-style: none;}
  a{text-decoration: none; color: inherit;}
  img{vertical-align: top; max-width: 100%;}
  textarea{resize: none;}
  select, option{appearance: none;}
`
const Wrapper = styled.div`
`;

function App() {
  // const [count, setCount] = useState(0)
  
  return (
      <Wrapper>
          <GlobalStyles />
          <RouterProvider router={router}/>
      </Wrapper>
  )
}

export default App
