import { Link } from 'react-router-dom';

const Home = () => (
    <div className="flex h-screen w-screen items-center justify-center">
        <div className="bg-dark-700 flex h-48 flex-col items-center justify-center gap-2 rounded-md px-8 shadow-lg">
            <h1 className="font-montserrat text-2xl font-bold text-gray-200">
                Nueso - Mood & Life Tracker
            </h1>
            <div className="flex gap-2">
                <Link
                    to="/login"
                    className="h-8 w-36 rounded-md bg-green-600 py-1 px-8 text-center font-medium text-gray-100 transition-colors hover:bg-green-700 active:bg-green-800"
                >
                    Log in
                </Link>
                <Link
                    to="/signup"
                    className="h-8 w-36 rounded-md bg-green-600 py-1 px-8 text-center font-medium text-gray-100 transition-colors hover:bg-green-700 active:bg-green-800"
                >
                    Sign up
                </Link>
            </div>
        </div>
    </div>
);

export default Home;
