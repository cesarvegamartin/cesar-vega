import type { Metadata } from "next";
import {
	type Locale,
	type AboutData,
	isLocale,
	defaultLocale,
	getPageData,
} from "@lib/i18n";
import Content from "@components/layout/Content";
import About from "@components/sections/About";

type Params = { lang: string };

export async function generateMetadata({
	params,
}: { params: Promise<Params> }): Promise<Metadata> {
	const { lang } = await params;
	const locale: Locale = isLocale(lang) ? lang : defaultLocale;
	const data = getPageData<AboutData>("about", locale);
	return { title: data.metadata.title };
}

export default async function AboutPage({
	params,
}: { params: Promise<Params> }) {
	const { lang } = await params;
	const locale: Locale = isLocale(lang) ? lang : defaultLocale;
	const data = getPageData<AboutData>("about", locale);

	return (
		<Content color="grey">
			<About data={data} />
		</Content>
	);
}
