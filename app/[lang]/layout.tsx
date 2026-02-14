import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Roboto_Slab, Quicksand } from "next/font/google";
import {
	type Locale,
	locales,
	isLocale,
	defaultLocale,
	getCommon,
} from "@lib/i18n";
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

type Params = { lang: string };

export async function generateStaticParams() {
	return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
	params,
}: { params: Promise<Params> }): Promise<Metadata> {
	const { lang } = await params;
	const locale: Locale = isLocale(lang) ? lang : defaultLocale;
	const { siteMetadata } = getCommon(locale);

	return {
		title: {
			default: siteMetadata.title.default,
			template: siteMetadata.title.template,
		},
		description: siteMetadata.description,
		authors: siteMetadata.authors as Metadata["authors"],
		openGraph: {
			title: siteMetadata.openGraph.title,
			description: siteMetadata.openGraph.description,
			url: siteMetadata.openGraph.url,
			siteName: siteMetadata.openGraph.siteName,
			type: "website",
			locale: siteMetadata.openGraph.locale,
		},
		twitter: {
			card: "summary",
			title: siteMetadata.twitter.title,
			description: siteMetadata.twitter.description,
		},
		icons: {
			icon: "/images/favicon.png",
		},
	};
}

export const viewport: Viewport = {
	themeColor: "#EC6544",
};

export default async function LangLayout({
	children,
	params,
}: { children: ReactNode; params: Promise<Params> }) {
	const { lang } = await params;
	const locale: Locale = isLocale(lang) ? lang : defaultLocale;

	return (
		<html
			lang={locale}
			className={`${robotoSlab.variable} ${quicksand.variable}`}
		>
			<body style={{ fontFamily: "var(--font-body)" }}>
				<main>{children}</main>
			</body>
		</html>
	);
}
