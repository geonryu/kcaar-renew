import { Navigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function Admin({children} : {children:React.ReactNode}) {
    const [perm, setPerm] = useState<any>(false);
    const [user, setUser] = useState<any>(() => {
        const storedData = localStorage.getItem('cur');
        return storedData ? JSON.parse(storedData) : false;
    });
   

    useEffect(() => {
        const fetchUser = async() => {
            try {
                const collectionRef = collection(db, 'users');
                const userQuery = query(collectionRef, where('uid', '==', user.uid));
                const querySnapshot = await getDocs(userQuery);
                if (!querySnapshot.empty) {
                    const result = querySnapshot.docs[0].data();
                    setPerm(result.permission);
                    console.log(perm);
                }
            } catch (error) {
                console.error('Permission denied');
            }
            
        }
        fetchUser();
    }, []);
    if(!perm || !user) {
        return <Navigate to="/" />
    }
    return children;
}