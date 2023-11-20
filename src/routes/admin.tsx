import { Navigate } from "react-router-dom";
import { db } from "../firebase";
import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function AdminProtect({children} : {children:React.ReactNode}) {
    const [perm, setPerm] = useState<any>(false);
    const user = useState<any>(() => {
        const storedData = localStorage.getItem('cur');
        return storedData ? JSON.parse(storedData) : false;
    });

    const fetchUser = async() => {
        try {
            const collectionRef = collection(db, 'users');
            const userQuery = query(collectionRef, where('uid', '==', user[0].uid));
            const querySnapshot = await getDocs(userQuery);
            if (!querySnapshot.empty) {
                const result = querySnapshot.docs[0].data();
                setPerm(result.permission);
            }
        } catch (error) {
            console.error('Permission denied');
        } finally {
            console.log(perm);
            
        }
    }
    fetchUser();
    if(!perm || !user) {
        return <Navigate to="/" />
    }
    
    return children;
}