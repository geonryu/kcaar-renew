import { Navigate } from "react-router-dom";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function AdminProtect({children} : {children:React.ReactNode}) {
    const [perm, setPerm] = useState<any | null>(null);
    const user = useState<any>(() => {
        const storedData = localStorage.getItem('cur');
        return storedData ? JSON.parse(storedData) : false;
    });
    if(!user[0]) {
        return <Navigate to={"/"} />
    }
    useEffect(() => {
        const fetchUser = async() => {
            try {
                const collectionRef = collection(db, 'users');
                const userQuery = query(collectionRef, where('uid', '==', user[0].uid));
                const querySnapshot = await getDocs(userQuery);
                if (!querySnapshot.empty) {
                    const result = querySnapshot.docs[0].data();
                    setPerm(result);
                }
            } catch (error) {
                console.error('Permission denied');
            } finally {
                
            }
        }
        fetchUser();
    }, []);

    useEffect(() => {
        if (perm) {
            if(perm.permission !== true) {
                window.location.href = "/";
            }
        }
    }, [perm]);
    
    if (!perm) {
        return <div>404 Not Founded</div>;
    } else if(perm) {
        if(perm.permission) {
            return children;
        }
    }
}