import { Navigate } from "react-router-dom";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

interface User {
  uid: string;
  permission: boolean;
}

export default function AdminProtect({ children }: { children: React.ReactNode }) {
  const [perm, setPerm] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('Authenticated user:', user);

        const fetchUser = async () => {
          try {
            const collectionRef = collection(db, 'users');
            const userQuery = query(collectionRef, where('uid', '==', user.uid));
            const querySnapshot = await getDocs(userQuery);

            if (!querySnapshot.empty) {
              const result = querySnapshot.docs[0].data() as User;
              console.log('User data from Firestore:', result);  // 디버깅용 로그

              // Check if 'permission' field exists in the Firestore document
              if ('permission' in result) {
                setPerm(result.permission);
              } else {
                console.error('Permission field is missing in the user document.');
                setPerm(null);
              }
            } else {
              console.log('No matching documents.');
              setPerm(null);
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
            setPerm(null);
          } finally {
            setLoading(false);
          }
        };

        fetchUser();
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (perm === null) {
    return <Navigate to="/" />;
  }

  if (perm) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" />;
  }
}
