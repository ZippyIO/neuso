import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoutes = () => {
    const location = useLocation();
    const { user, loaded } = useAuth();

    return (
        <>
            {loaded && user !== null && <Outlet />}
            {!loaded && user === null && (
                <Navigate to="/login" state={{ from: location }} replace />
            )}
        </>
    );
};

export default ProtectedRoutes;
