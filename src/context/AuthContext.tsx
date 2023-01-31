import { User } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../utils/firebase';

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
        const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
            setUser(firebaseUser);
        });

        return unsubscribe;
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
