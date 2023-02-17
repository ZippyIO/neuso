/* eslint-disable */
import { cleanup, render, RenderOptions } from '@testing-library/react';
import { afterEach } from 'vitest';
import fetch from 'node-fetch';
import { useLocation } from 'react-router-dom';
// @ts-ignore
global.fetch = fetch;

afterEach(() => {
    cleanup();
});

const customRender = (ui: JSX.Element, options?: RenderOptions) => {
    render(ui, {
        // wrap provider(s) here if needed
        wrapper: ({ children }) => children,
        ...options,
    });
};

export const LocationDisplay = () => {
    const location = useLocation();
    return <div data-testid="location-display">{location.pathname}</div>;
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
