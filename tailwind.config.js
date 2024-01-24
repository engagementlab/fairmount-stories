/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			keyframes: {
				fillBar: {
					"0%": {
						width: 0
					},
					"100%": {
						width: "var(--percentage)"
					}
				}
			}
		}
	},
	plugins: []
};