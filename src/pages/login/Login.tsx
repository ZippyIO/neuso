import { signInWithPopup } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { RiGoogleFill } from 'react-icons/ri';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { auth, googleProvider } from '../../utils/firebase';

const Login = () => {
    const location = useLocation();
    const { user, loaded } = useAuth();
    const [loading, setLoading] = useState(loaded);

    useEffect(() => {
        if (user !== null && user !== undefined) setLoading(true);
    }, [user, loaded]);

    const handeLoginClick = () => {
        setLoading(true);
        signInWithPopup(auth, googleProvider);
    };

    if (loading) {
        return (
            <div>
                {user !== null && user !== undefined && (
                    <Navigate
                        to="/dashboard"
                        state={{ from: location }}
                        replace
                    />
                )}
                <div>
                    Logging in, you will be redireted after a few seconds if
                    sucessful. If you are not redirected click{' '}
                    <Link to="/dashboard">Here</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="font-opensans h-42 flex flex-col items-stretch justify-center gap-2 rounded-xl bg-zinc-900 p-12 text-center shadow-xl">
                <div>
                    <h1 className="text-3xl font-extrabold text-blue-500">
                        Neuso - Login
                    </h1>
                </div>
                <button
                    onClick={handeLoginClick}
                    className="m-1 flex h-10 items-center justify-center rounded-lg bg-emerald-500 p-1 text-inherit transition-colors hover:bg-emerald-600 active:bg-emerald-700"
                    type="button"
                >
                    <div className="flex items-center justify-center">
                        <RiGoogleFill size="20px" />
                        Sign in with Google
                        <div className="flex-1" />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Login;
