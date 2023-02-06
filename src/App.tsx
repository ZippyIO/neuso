import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';

const App = () => (
    <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<p>Missing page</p>} />
    </Routes>
);

export default App;
