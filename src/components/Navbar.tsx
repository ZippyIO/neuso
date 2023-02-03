import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../utils/firebase';

const Navbar = () => {
    const user = useContext(AuthContext);

    return (
        <div className="flex items-center justify-between bg-blue-600 px-4 py-2">
            <h1 className="text-2xl font-bold text-zinc-100">Neuso</h1>
            <div className="flex items-center gap-2">
                <ul className="flex gap-2 text-zinc-100">
                    <li className="text-inherit">
                        <NavLink to="">Dashboard</NavLink>
                    </li>
                    <li className="text-inherit">
                        <NavLink to="settings">Settings</NavLink>
                    </li>
                </ul>
                <p>{user?.displayName}</p>
                <button
                    onClick={() => signOut(auth)}
                    className="rounded-md bg-blue-700 p-1.5 hover:bg-blue-800 active:bg-blue-900"
                    type="button"
                >
                    Sign out
                </button>
            </div>
        </div>
    );
};
export default Navbar;
