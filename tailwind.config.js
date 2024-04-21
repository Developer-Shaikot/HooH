/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            // fontFamily: {
            // 	inter: ["'Inter'", "'sans-serif'"],
            // 	manrope: ["'Manrope'", "'sans-serif'"],
            // },
            filter: {
                custom: "brightness(0) saturate(100%) invert(100%) sepia(0%) hue-rotate(0deg)",
            },
            gridTemplateColumns: {
                13: "repeat(13,minmax(0,1fr))",
            },
            screens: {
                xs: "400px",
                "browser-end": "500px",
                tablet: "850px",
            },
            boxShadow: {
                focus: "0 0 4px 0 rgba(69, 106, 109, 0.4)",
            },
            colors: {
                "red-theme": "#FF454F",

                "indigo-theme": "#1E4DB7",

                "orange-theme": "#FB9678",

                "blue-theme": "#1A97F5",

                "green-theme": "#03C9D7",

                "default-theme": "#006D5A",

                "dark-theme": "#101828",
                "dark-theme-primary": "#1d2939",
                "dark-700": "#141414",
                "dark-200": "#000",
            },
            backgroundImage: {
                select: "url('/icons/arrow-down.svg')",
            },
            pointerEvents: {
                auto: "auto",
            },
        },
    },
    variants: {
        extend: {
            // Enable hover variants for your custom filter utility
            filter: ["hover"],
        },
    },
    plugins: [],
};
