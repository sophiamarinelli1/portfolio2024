import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Sophia Marinelli",
	description: "Graphic Designer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`font-customBlack text-body h-full bg-cream text-pink`}>
				<main className="mx-auto max-w-full ">{children}</main>
			</body>
		</html>
	);
}
