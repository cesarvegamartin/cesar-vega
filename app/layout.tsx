import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Roboto_Slab, Quicksand } from "next/font/google";
import "@styles/reset.css";
import "@styles/common.css";

const robotoSlab = Roboto_Slab({
	subsets: ["latin"],
	weight: ["100"],
	display: "swap",
	variable: "--font-heading",
});

const quicksand = Quicksand({
	subsets: ["latin"],
	weight: ["300", "400", "500"],
	display: "swap",
	variable: "--font-body",
});

export const metadata: Metadata = {
	title: {
		default: "César Vega",
		template: "César Vega | %s",
	},
	description:
		"He trabajado como desarrollador de back-end y front-end, siendo esté último mi preferido ya que se acerca más al usuario. Tengo pasión por cómo funcionan las cosas, una cierta obsesión por la experiencia de usuario y me satisface ver el resultado final.",
	authors: [{ name: "César Vega", url: "https://cesarvega.dev" }],
	openGraph: {
		title: "César Vega",
		description:
			"He trabajado como desarrollador de back-end y front-end, siendo esté último mi preferido ya que se acerca más al usuario.",
		url: "https://cesarvega.dev",
		siteName: "César Vega",
		type: "website",
		locale: "es_ES",
	},
	twitter: {
		card: "summary",
		title: "César Vega",
		description:
			"He trabajado como desarrollador de back-end y front-end, siendo esté último mi preferido ya que se acerca más al usuario.",
	},
	icons: {
		icon: "/images/favicon.png",
	},
};

export const viewport: Viewport = {
	themeColor: "#EC6544",
};

export default function RootLayout({
	children,
}: { children: ReactNode }) {
	return (
		<html
			lang="es"
			className={`${robotoSlab.variable} ${quicksand.variable}`}
		>
			<body style={{ fontFamily: "var(--font-body)" }}>
				<main>{children}</main>
			</body>
		</html>
	);
}
