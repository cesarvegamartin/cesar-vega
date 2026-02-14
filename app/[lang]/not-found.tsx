import {
	type Locale,
	type NotFoundData,
	isLocale,
	defaultLocale,
	getPageData,
} from "@lib/i18n";
import Content from "@components/layout/Content";
import NotFoundSection from "@components/sections/NotFound";
import { headers } from "next/headers";

async function getLangFromHeaders(): Promise<Locale> {
	const headersList = await headers();
	const referer = headersList.get("referer") ?? "";
	const match = referer.match(/\/(es|en)(\/|$)/);
	if (match && isLocale(match[1])) return match[1];
	return defaultLocale;
}

export default async function NotFoundPage() {
	const locale = await getLangFromHeaders();
	const data = getPageData<NotFoundData>("not-found", locale);

	return (
		<Content color="white">
			<NotFoundSection data={data} lang={locale} />
		</Content>
	);
}
