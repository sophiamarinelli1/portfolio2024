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
			customBold: ["ABCDiatype-Bold-Trial"],
			customMed: ["ABCDiatype-Medium-Trial"],
			custom: ["NeueHaasDisplay-Roman"],
			customLight: ["NeueHaasDisplay-Light"],
			customMono: ["ABCGaisyrMono-Medium-Trial"],
		},
		extend: {
			fontSize: {
				actionS: ["12px", "14px"],
				actionM: ["16px", "18px"],
				actionL: ["24px", "24px"],
				note: ["12px", "14px"],
				body: ["18px", "18px"],
				xl: ["24px", "24px"],
				"2xl": ["32px", "36px"],
				"3xl": ["48px", "52px"],
				"4xl": ["64px", "64px"],
				"6xl": ["96px", "92px"],
				"7xl": ["128px", "112px"],
			},
			screens: {
				sm: "400px",
				md: "900px",
				lg: "1200px",
				xl: "1440px",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
