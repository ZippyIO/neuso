import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoutes = () => {
    const location = useLocation();
    const { user, loaded } = useAuth();
    if (loaded) {
        return <Outlet />;
    }

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {!loaded && user === null && (
                <Navigate to="/" state={{ from: location }} replace />
            )}
        </>
    );
};

export default ProtectedRoutes;
