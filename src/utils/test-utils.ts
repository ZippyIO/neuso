/* eslint-disable */
import { cleanup, render, RenderOptions } from '@testing-library/react';
import { afterEach } from 'vitest';
import fetch from 'node-fetch';
// @ts-ignore
global.fetch = fetch;

afterEach(() => {
    cleanup();
});

const customRender = (ui: JSX.Element, options?: RenderOptions) =>
    render(ui, {
        // wrap provider(s) here if needed
        wrapper: ({ children }) => children,
        ...options,
    });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
