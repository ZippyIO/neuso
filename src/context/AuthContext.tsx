import { User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { auth, firestore } from '../services/firebase/firebase';

type Props = {
    children: React.ReactNode;
};

type AuthContextType = {
    user: User | null | undefined;
    loaded: boolean;
};

export const AuthContext = createContext<AuthContextType>({
    user: undefined,
    loaded: false,
});

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider: React.FC<Props> = ({ children }: Props) => {
    const [user, setUser] = useState<User | null | undefined>(undefined);
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser);
                setLoaded(true);
                const userDoc = doc(firestore, 'users', firebaseUser.uid);
                const snapshot = await getDoc(userDoc);
                if (!snapshot.exists()) setDoc(userDoc, {});
            } else {
                setUser(firebaseUser);
                setLoaded(false);
            }
        });

        return unsubscribe;
    }, []);

    const contextValue = useMemo(() => ({ user, loaded }), [user, loaded]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};
