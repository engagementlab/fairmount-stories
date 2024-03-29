/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			animation: {
				fill: "fillBar 1s cubic-bezier(.99,.01,.64,1) var(--delay) forwards",
				"enter": "enter .7s ease-in-out var(--delay) forwards",
				"enter-bottom": "enterBottom .7s ease-in-out var(--delay) forwards"
			},
			keyframes: {
				fillBar: {
					"0%": {
						width: 0
					},
					"100%": {
						width: "var(--percentage)"
					}
				},
				enter: {
					"0%": {
						opacity: 0,
						transform: "translateY(calc(var(--nudge)*5%))"
						//  transform: translateX(calc(var(--child-index)*10%))
					},
					"100%": {
						opacity: 1,
						transform: "translateY(0)"
					}
				},
				enterBottom: {
					"0%": {
						opacity: 0,
						transform: "translateY(5%)"
					},
					"100%": {
						opacity: 1,
						transform: "translateY(0)"
					}
				}
			}
		}
	},
	plugins: []
};