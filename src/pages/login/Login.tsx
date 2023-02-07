import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { RiGoogleFill } from 'react-icons/ri';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { auth, googleProvider } from '../../utils/firebase';

const Login = () => {
    const location = useLocation();
    const { loaded } = useAuth();
    const [error, setError] = useState<string | null>(null);

    const handleEmailLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { email, password } = e.target as HTMLFormElement;
        signInWithEmailAndPassword(auth, email.value, password.value).catch(
            ({ message }) => {
                setError(message.replace('Firebase:', ''));
            },
        );
    };

    const handeLoginGoogle = () => {
        signInWithPopup(auth, googleProvider).catch(({ message }) => {
            setError(message.replace('Firebase:', ''));
        });
    };

    if (loaded) {
        return <Navigate to="/dashboard" state={{ from: location }} replace />;
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="font-opensans h-42 flex w-96 flex-col items-stretch justify-center gap-2 rounded-xl bg-gray-800 p-12 text-center shadow-xl">
                {error && (
                    <div className="rounded-lg border-4 border-red-500 bg-zinc-800 p-1.5">
                        <p className="text-sm font-medium text-gray-100">
                            {error}
                        </p>
                    </div>
                )}
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-200">
                        Neuso - Login
                    </h1>
                </div>
                <form
                    action=""
                    onSubmit={handleEmailLogin}
                    className="flex flex-col"
                >
                    <label
                        htmlFor="email"
                        className="text-lg font-medium text-gray-200"
                    >
                        Email:
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="signup-email"
                        className="rounded-lg bg-zinc-900 p-1"
                    />
                    <label
                        htmlFor="password"
                        className="text-lg font-medium text-gray-200"
                    >
                        Password:
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="signup-password"
                        className="rounded-lg bg-zinc-900 p-1"
                    />
                    <button
                        className="mt-2 flex h-10 items-center justify-center rounded-lg bg-emerald-500 p-1 text-inherit transition-colors hover:bg-emerald-600 active:bg-emerald-700"
                        type="submit"
                    >
                        Log in
                    </button>
                </form>
                <p>OR</p>
                <button
                    onClick={handeLoginGoogle}
                    className="m-1 flex h-10 items-center justify-center rounded-lg bg-blue-500 p-1 text-inherit transition-colors hover:bg-blue-600 active:bg-blue-700"
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
