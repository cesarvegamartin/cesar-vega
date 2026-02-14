import type { Metadata } from "next";
import {
	type Locale,
	type LandingData,
	isLocale,
	defaultLocale,
	getPageData,
} from "@lib/i18n";
import Content from "@components/layout/Content";
import Landing from "@components/sections/Landing";

type Params = { lang: string };

export async function generateMetadata({
	params,
}: { params: Promise<Params> }): Promise<Metadata> {
	const { lang } = await params;
	const locale: Locale = isLocale(lang) ? lang : defaultLocale;
	const data = getPageData<LandingData>("landing", locale);
	return { title: data.metadata.title };
}

export default async function LandingPage({
	params,
}: { params: Promise<Params> }) {
	const { lang } = await params;
	const locale: Locale = isLocale(lang) ? lang : defaultLocale;
	const data = getPageData<LandingData>("landing", locale);

	return (
		<Content color="white">
			<Landing data={data} />
		</Content>
	);
}
