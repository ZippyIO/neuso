import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { RiGoogleFill } from 'react-icons/ri';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { auth, googleProvider } from '../../services/firebase/firebase';

const SignUp = () => {
    const location = useLocation();
    const { loaded } = useAuth();
    const [error, setError] = useState<string | null>(null);

    const handleSignUpForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { email, password } = e.target as HTMLFormElement;
        createUserWithEmailAndPassword(auth, email.value, password.value).catch(
            ({ message }) => {
                setError(message.replace('Firebase:', ''));
            },
        );
    };

    const handleSignUpGoogle = () => {
        signInWithPopup(auth, googleProvider).catch(({ message }) => {
            setError(message.replace('Firebase:', ''));
        });
    };

    if (loaded) {
        return <Navigate to="/dashboard" state={{ from: location }} replace />;
    }

    return (
        <div
            data-testid="page-signup"
            className="flex h-screen w-screen items-center justify-center"
        >
            <div className="h-42 bg-dark-700 flex flex-col items-stretch justify-center gap-2 rounded-xl p-12 text-center shadow-xl">
                {error && (
                    <div className="bg-dark-800 rounded-lg border-4 border-red-500 p-1.5">
                        <p className="text-sm font-medium text-gray-100">
                            {error}
                        </p>
                    </div>
                )}
                <div>
                    <h1 className="font-montserrat text-4xl font-extrabold text-zinc-200">
                        Neuso
                    </h1>
                    <p className="font-montserrat text-xl font-semibold text-zinc-200">
                        Create an account
                    </p>
                    <p className="text-zinc-300">Please enter your details.</p>
                </div>
                <form
                    action=""
                    onSubmit={handleSignUpForm}
                    className="flex flex-col gap-1"
                >
                    <label
                        htmlFor="email"
                        className="ml-0.5 text-left text-sm font-medium text-zinc-300"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="signup-email"
                        className="bg-dark-900 rounded-lg px-2 py-1"
                        placeholder="Enter your email"
                    />
                    <label
                        htmlFor="password"
                        className="ml-0.5 text-left text-sm font-medium text-zinc-300"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="signup-password"
                        className="bg-dark-900 rounded-lg px-2 py-1"
                        placeholder="Create a password"
                    />
                    <p className="ml-0.5 text-left text-sm text-zinc-400">
                        Must be at least 6 characters.
                    </p>
                    <button
                        className="mt-2 flex h-10 items-center justify-center rounded-lg bg-green-600 p-1 text-inherit transition-colors hover:bg-green-700 active:bg-green-800"
                        type="submit"
                    >
                        Create Account
                    </button>
                </form>
                <button
                    onClick={handleSignUpGoogle}
                    className="flex h-10 w-full items-center justify-center rounded-lg bg-indigo-600 p-1 text-inherit transition-colors hover:bg-indigo-700 active:bg-indigo-800"
                    type="button"
                >
                    <div className="flex items-center justify-center">
                        <RiGoogleFill size="20px" />
                        &nbsp;Sign up with Google
                        <div className="flex-1" />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SignUp;
