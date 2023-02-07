import { Link } from 'react-router-dom';

const Home = () => (
    <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex h-48 flex-col items-center justify-center gap-2 rounded-md bg-gray-800 px-8">
            <h1 className="font-montserrat text-2xl font-bold text-gray-200">
                Nueso - Mood & Life Tracker
            </h1>
            <div className="flex gap-2">
                <Link
                    to="/login"
                    className="h-8 w-36 rounded-md bg-blue-500 py-1 px-8 text-center font-medium text-gray-100 transition-colors hover:bg-blue-600 active:bg-blue-700"
                >
                    Log in
                </Link>
                <Link
                    to="/signup"
                    className="h-8 w-36 rounded-md bg-blue-500 py-1 px-8 text-center font-medium text-gray-100 transition-colors hover:bg-blue-600 active:bg-blue-700"
                >
                    Sign up
                </Link>
            </div>
        </div>
    </div>
);

export default Home;
