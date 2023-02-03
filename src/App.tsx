import { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthContext } from './context/AuthContext';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';

const App = () => {
    const userAuth = useContext(AuthContext);
    const [user, setUser] = useState<true | false>(false);

    useEffect(() => {
        setUser(!!userAuth);
    }, [userAuth]);

    return (
        <BrowserRouter>
            {!user && (
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            )}
            {user && (
                <>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                    </Routes>
                </>
            )}
        </BrowserRouter>
    );
};

export default App;
