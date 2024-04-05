/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {},
    // screens: {
		// 	xl: { max: "1279px" },
		// 	// => @media (max-width: 1279px) { ... }

		// 	lg: { max: "1023px" },
		// 	// => @media (max-width: 1023px) { ... }

		// 	md: { max: "767px" },
		// 	// => @media (max-width: 767px) { ... }

		// 	sm: { max: "639px" },
		// 	// => @media (max-width: 639px) { ... }
		// },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

