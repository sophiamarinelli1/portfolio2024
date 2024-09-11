import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
			<body className={`font-customMed text-body h-full bg-white text-black`}>
				<main className="mx-auto max-w-full ">{children}</main>
			</body>
		</html>
	);
}
