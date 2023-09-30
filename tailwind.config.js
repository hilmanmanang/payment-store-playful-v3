/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                gray: {
                    200: "#E3E8EF",
                    900: "#111729"
                }
            }
        },
    },
    plugins: [],
}

