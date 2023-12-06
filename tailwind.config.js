/** @type {import("tailwindcss").Config} */
module.exports = {
    content: {
        relative: true,
        files: [
            './src/index.html', // main index file & entrypoint
            './src/*.{html}',
            './src/assets/css/*.{css}',
            './src/assets/js/*.{html,js}',
        ],
    },
    theme: {
        container: {
            center: true,
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['Inter', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [require('tailwindcss-owl')],
}
