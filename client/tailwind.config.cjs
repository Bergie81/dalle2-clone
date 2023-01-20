/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#58BCB7",
				secondary: "#6667AB",
				tertiary: "#FACA57",
				light: "#F5F5F5",
				dark: "#333333",
			},
			screens: {
				xs: "480px",
			},
			fontFamily: {
				inter: ["Inter var", "sans-serif"],
			},
			boxShadow: {
				card: "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)",
				cardhover:
					"0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)",
			},
		},
	},
	plugins: [],
};
