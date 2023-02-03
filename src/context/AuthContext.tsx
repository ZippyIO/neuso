import { User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth, firestore } from '../utils/firebase';

type Props = {
    children: React.ReactNode;
};

export const AuthContext = createContext<User | null>(null);

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider: React.FC<Props> = ({ children }: Props) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
            setUser(firebaseUser);
            if (firebaseUser) {
                const userDoc = doc(firestore, 'users', firebaseUser.uid);
                const snapshot = await getDoc(userDoc);
                if (!snapshot.exists()) setDoc(userDoc, {});
            }
        });

        return unsubscribe;
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
