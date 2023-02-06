/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
    ],
    theme: {
        fontFamily: {
            opensans: ['Open Sans', 'sans-serif'],
            montserrat: ['Montserrat', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [require('tailwindcss-radix')()],
};
