import { signInWithPopup } from 'firebase/auth';
import { RiGoogleFill } from 'react-icons/ri';
import { auth, googleProvider } from '../../utils/firebase';

const Login = () => (
    <div className="flex h-screen w-screen items-center justify-center">
        <div className="font-opensans h-42 flex flex-col items-stretch justify-center gap-2 rounded-xl bg-zinc-900 p-12 text-center shadow-xl">
            <div>
                <h1 className="text-3xl font-extrabold text-blue-500">
                    Neuso - Login
                </h1>
            </div>
            <button
                onClick={() => signInWithPopup(auth, googleProvider)}
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

export default Login;
