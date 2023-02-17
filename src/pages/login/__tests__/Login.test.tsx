import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { LocationDisplay } from '../../../utils/testing/test-utils';
import Dashboard from '../../dashboard/Dashboard';
import Login from '../Login';

const Main = () => (
    <MemoryRouter initialEntries={['/login']}>
        <Routes>
            <Route
                path="/login"
                element={
                    <>
                        <Login />
                        <LocationDisplay />
                    </>
                }
            />
            <Route
                path="/dashboard"
                element={
                    <>
                        <Dashboard />
                        <LocationDisplay />
                    </>
                }
            />
        </Routes>
    </MemoryRouter>
);

describe('Login page redirect', () => {
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

    test('should not navigate to dashboard when loaded is false', () => {
        const user = null;
        const loaded = false;
        render(
            <AuthContext.Provider value={{ user, loaded }}>
                <Main />
            </AuthContext.Provider>,
        );

        expect(screen.getByTestId('page-login')).toBeInTheDocument();
        expect(screen.getByTestId('location-display')).toHaveTextContent(
            /^\/login/,
        );
    });
});
