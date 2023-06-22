/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				'light_red': 'hsl(0, 100%, 67%)',
				'orangey_yellow': 'hsl(39, 100%, 56%)',
				'green_teal': 'hsl(166, 100%, 37%)',
				'cobalt_blue': 'hsl(234, 85%, 45%)',
				'dark_gray_blue': 'hsl(224, 30%, 27%)',
				'light_slate_blue': ' hsl(252, 100%, 67%)',
				'light_royal_blue': ' hsl(241, 81%, 54%)',
				'violet_blue': ' hsla(256, 72%, 46%, 1)',
				'persian_blue': ' hsla(241, 72%, 46%, 0)',

			}
		},
	},
	safelist: [
		{
			pattern: /(bg|text)-(light_red|orangey_yellow|green_teal|cobalt_blue|dark_gray_blue)/
		}
	],
	plugins: [],
};
