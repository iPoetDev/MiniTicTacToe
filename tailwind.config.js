
module.exports = {
    content: {
        relative: true,
        files: [
            'index.html',
            'game-*.html',// main index file & entrypoint
            //'./src/*.{html}',
            './src/assets/css/*.{css}',
            './src/assets/js/*.{html,js}',
        ],
    },
    theme: {
        container: {
            center: true,
        },
        fontFamily: {
            'inter': ['Inter', 'sans-serif'],
        },
        extend: {
            colors: {
                'x': 'rgba(240, 46, 170, 0.7)',  // RED for X
                'o': 'indigo'   // BLUE for O
            },
        },
        screens: {
            'sm': '336px', // Mobile
            'md': '768px', // Tablet
            'lg': '1024px', // Tablet Landscape
            'xl': '1366px', // Desktop Portrait
            '2xl': '1440px' // Full HD
        }
    },
    plugins: [

    ],
}
