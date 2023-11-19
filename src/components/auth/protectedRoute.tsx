import { Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useState } from "react";

export default function ProtectedRoute({children} : {children:React.ReactNode}) {
    const [user, setUser] = useState<any>(() => {
        const storedData = localStorage.getItem('cur');
        return storedData ? JSON.parse(storedData) : false;
    });
    
    if(!user) {
        return <Navigate to="/login" />
    }
    return children;
}