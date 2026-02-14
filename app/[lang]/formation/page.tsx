import type { Metadata } from "next";
import {
	type Locale,
	type FormationData,
	isLocale,
	defaultLocale,
	getPageData,
	getCommon,
} from "@lib/i18n";
import Content from "@components/layout/Content";
import Formation from "@components/sections/Formation";

type Params = { lang: string };

export async function generateMetadata({
	params,
}: { params: Promise<Params> }): Promise<Metadata> {
	const { lang } = await params;
	const locale: Locale = isLocale(lang) ? lang : defaultLocale;
	const data = getPageData<FormationData>("formation", locale);
	return { title: data.metadata.title };
}

export default async function FormationPage({
	params,
}: { params: Promise<Params> }) {
	const { lang } = await params;
	const locale: Locale = isLocale(lang) ? lang : defaultLocale;
	const common = getCommon(locale);
	const data = getPageData<FormationData>("formation", locale);

	return (
		<Content color="grey">
			<Formation data={data} locale={locale} duration={common.duration} />
		</Content>
	);
}
