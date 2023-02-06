import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';

const Navbar = () => (
    <div className="flex items-center justify-between bg-blue-600 px-4 py-2">
        <h1 className="text-2xl font-bold text-zinc-100">Neuso</h1>
        <div className="flex items-center gap-2">
            <ul className="flex gap-2 text-zinc-100">
                <li className="text-inherit">
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li className="text-inherit">
                    <NavLink to="/settings">Settings</NavLink>
                </li>
            </ul>
            <Dropdown />
        </div>
    </div>
);

export default Navbar;
