import { signInWithPopup } from 'firebase/auth';
import { RiGoogleFill } from 'react-icons/ri';
import { auth, googleProvider } from '../../utils/firebase';

const Login = () => (
    <div className="flex justify-center items-center w-screen h-screen">
        <div className="flex flex-col gap-2 justify-center items-stretch text-center font-opensans bg-zinc-900 p-12 h-42 rounded-xl shadow-xl">
            <div>
                <h1 className="text-3xl font-extrabold text-blue-500">
                    Neuso - Login
                </h1>
            </div>
            <button
                onClick={() => signInWithPopup(auth, googleProvider)}
                className="flex items-center justify-center text-inherit p-1 m-1 h-10 rounded-lg bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700"
                type="button"
            >
                <div className="flex justify-center items-center">
                    <RiGoogleFill size="20px" />
                    Sign in with Google
                    <div className="flex-1" />
                </div>
            </button>
        </div>
    </div>
);

export default Login;
