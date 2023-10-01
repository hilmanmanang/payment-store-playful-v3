/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                gray: {
                    50: "#F8FAFC",
                    100: "#F2F5F9",
                    200: "#E3E8EF",
                    300: "#CDD5E0",
                    400: "#97A3B6",
                    500: "#677489",
                    600: "#4A5567",
                    700: "#28303F",
                    800: "#20293A",
                    900: "#111729"
                },
                blue: {
                    50: "#F8FAFF",
                    100: "#EDF2FE",
                    200: "#DBE5FD",
                    300: "#BED0FB",
                    400: "#9AB6F8",
                    500: "#4B7DF3",
                    600: "#3F68CA",
                    700: "#3253A2",
                    800: "#263F7A",
                    900: "#192A51"
                },
                base: {
                    50: "#FFFFFF",
                    100: "#FAFAFA",
                    200: "#F6F6F6",
                    300: "#EEEEEE",
                    400: "#DEDEDE",
                    500: "#CCCCCC",
                    600: "#AAAAAA",
                    700: "#666666",
                    800: "#333333",
                    900: "#000000"
                },
                red: {
                    900: '#EA344C'
                }
            }
        },
        screens: {
            'mobile': '375px',
            'tablet': '1024px',
            'desktop': '1440px'
        }
    },
    plugins: [],
}

