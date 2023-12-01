import { Navigate } from "react-router-dom";
import { useState } from "react";

export default function ProtectedRoute({children} : {children:React.ReactNode}) {
    const [user] = useState<any>(() => {
        const storedData = localStorage.getItem('user');
        return storedData ? JSON.parse(storedData) : false;
    });
    
    if(!user) {
        return <Navigate to="/login" />
    }
    return children;
}