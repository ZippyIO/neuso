import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { LocationDisplay } from '../../utils/test-utils';
import Dashboard from '../../pages/dashboard/Dashboard';
import Home from '../../pages/home/Home';

import ProtectedRoutes from '../ProtectedRoutes';

const Main = () => (
    <MemoryRouter initialEntries={['/dashboard']}>
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Home />
                        <LocationDisplay />
                    </>
                }
            />
            <Route element={<ProtectedRoutes />}>
                <Route
                    path="/dashboard"
                    element={
                        <>
                            <Dashboard />
                            <LocationDisplay />
                        </>
                    }
                />
            </Route>
        </Routes>
    </MemoryRouter>
);

describe('ProtectedRoutes redirect', () => {
    test('should navigate to dashboard when loaded is true', () => {
        const user = null;
        const loaded = true;
        render(
            <AuthContext.Provider value={{ user, loaded }}>
                <Main />
            </AuthContext.Provider>,
        );

        expect(screen.getByTestId('page-dashboard')).toBeInTheDocument();
        expect(screen.getByTestId('location-display')).toHaveTextContent(
            /^\/dashboard/,
        );
    });

    test('should navigate to home when loaded false & user null', () => {
        const user = null;
        const loaded = false;
        render(
            <AuthContext.Provider value={{ user, loaded }}>
                <Main />
            </AuthContext.Provider>,
        );

        expect(screen.getByTestId('page-home')).toBeInTheDocument();
        expect(screen.getByTestId('location-display')).toHaveTextContent(/^\//);
    });
});
