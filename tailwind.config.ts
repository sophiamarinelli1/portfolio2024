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
			customBold: ["ABCMonumentGrotesk-Bold-Trial"],
			customMed: ["ABCMonumentGrotesk-Medium-Trial"],
			custom: ["NeueHaasDisplay-Roman"],
			customLight: ["NeueHaasDisplay-Light"],
			customMono: ["ABCGaisyrMono-Medium-Trial"],
		},
		extend: {
			fontSize: {
				actionS: ["12px", { lineHeight: "14px", letterSpacing: "0.05em" }],
				actionM: ["14px", { lineHeight: "16px", letterSpacing: "0.05em" }],
				actionL: ["24px", { lineHeight: "24px", letterSpacing: "0.02em" }],
				note: ["12px", { lineHeight: "14px", letterSpacing: "0.04em" }],
				body: ["18px", { lineHeight: "18px", letterSpacing: "0.01em" }],
				xl: ["24px", { lineHeight: "28px", letterSpacing: "0.02em" }],
				"2xl": ["32px", { lineHeight: "36px", letterSpacing: "0.02em" }],
				"3xl": ["48px", { lineHeight: "52px", letterSpacing: "0.01em" }],
				"4xl": ["64px", { lineHeight: "64px", letterSpacing: "0.03em" }],
				"6xl": ["96px", { lineHeight: "92px", letterSpacing: "0.03em" }],
				"7xl": ["128px", { lineHeight: "112px", letterSpacing: "0.04em" }],
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
