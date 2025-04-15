

import { useEffect, useState } from "react"
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth"
import { auth } from "./firebaseconfig"
import router from "next/router";

interface User {
    uid: string;
    email: string;
}

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user ? { uid: user.uid, email: user.email || '' } : null);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);
    return { user, loading };
};

export const useUnAuth = async () => {    
    try{
        await signOut(auth);
    } catch (error) {
        console.error("Erro ao sair: ", error);
    }
};