/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Roboto", "Arial", "sans-serif"],
			mono: ["Roboto Mono", "Menlo", "Consolas", "monospace"],
		},
		extend: {
			spacing: {
				88: "22rem",
				96: "24rem",
				104: "27rem",
				120: "30rem",
				144: "36rem",
				180: "45rem",
				240: "60rem",
			},
		},
	},
	extend: {},
	plugins: [],
};
