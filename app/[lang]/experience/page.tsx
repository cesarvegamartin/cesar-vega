import type { Metadata } from "next";
import {
	type Locale,
	type ExperienceData,
	isLocale,
	defaultLocale,
	getPageData,
	getCommon,
} from "@lib/i18n";
import Content from "@components/layout/Content";
import Experience from "@components/sections/Experience";

type Params = { lang: string };

export async function generateMetadata({
	params,
}: { params: Promise<Params> }): Promise<Metadata> {
	const { lang } = await params;
	const locale: Locale = isLocale(lang) ? lang : defaultLocale;
	const data = getPageData<ExperienceData>("experience", locale);
	return { title: data.metadata.title };
}

export default async function ExperiencePage({
	params,
}: { params: Promise<Params> }) {
	const { lang } = await params;
	const locale: Locale = isLocale(lang) ? lang : defaultLocale;
	const common = getCommon(locale);
	const data = getPageData<ExperienceData>("experience", locale);

	return (
		<Content color="grey">
			<Experience data={data} locale={locale} duration={common.duration} />
		</Content>
	);
}
