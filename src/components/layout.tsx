import { Outlet } from "react-router-dom"
import GlobalFooter from "./global/footer"
import GlobalHeader from "./global/header"


export default function Layout() {
    return (
        <div>
            <GlobalHeader></GlobalHeader>
            <main>
                <Outlet />
            </main>
            <GlobalFooter></GlobalFooter>
        </div>
    )
}