import { Outlet, Link, useNavigate } from "react-router-dom"
import { auth } from "../firebase";
import Header from "./base/header";
import Footer from "./base/footer";
import styled from "styled-components";
import { useEffect, useState } from "react";


export default function Layout() {
    return (
        <div>
            <Header></Header>
            <main>
                <Outlet />
            </main>
            <Footer></Footer>
        </div>
    )
}