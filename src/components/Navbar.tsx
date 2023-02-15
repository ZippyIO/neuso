import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';

const Navbar = () => (
    <div className="flex h-12 items-center justify-between bg-green-600 px-4 py-2">
        <h1 className="font-montserrat text-3xl font-bold text-white">Neuso</h1>
        <div className="flex items-center gap-2">
            <ul className="flex gap-2 text-white">
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
