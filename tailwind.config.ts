import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			customBlack: ["NeueHaasDisplay-Black"],
			customBold: ["NeueHaasDisplay-Bold"],
			customMed: ["NeueHaasDisplay-Mediu"],
			custom: ["NeueHaasDisplay-Roman"],
			customLight: ["NeueHaasDisplay-Light"],
			customMono: ["ABCSyntMono-Regular-Trial"],
			customSerifMed: ["ABCSynt-Medium-Trial"],
		},
		extend: {
			fontSize: {
				note: ["12px", "14px"],
				body: ["16px", "18px"],
				xl: ["24px", "24px"],
				"2xl": ["32px", "36px"],
				"3xl": ["48px", "52px"],
				"4xl": ["64px", "64px"],
				"6xl": ["96px", "92px"],
				"7xl": ["128px", "112px"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
