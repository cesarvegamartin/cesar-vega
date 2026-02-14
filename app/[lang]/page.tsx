import type { Metadata } from "next";
import {
	type Locale,
	type LandingData,
	type AboutData,
	type ExperienceData,
	type FormationData,
	type ContactData,
	isLocale,
	defaultLocale,
	getPageData,
	getCommon,
} from "@lib/i18n";
import Content from "@components/layout/Content";
import Landing from "@components/sections/Landing";
import About from "@components/sections/About";
import Experience from "@components/sections/Experience";
import Formation from "@components/sections/Formation";
import Contact from "@components/sections/Contact";

type Params = { lang: string };

export async function generateMetadata({
	params,
}: { params: Promise<Params> }): Promise<Metadata> {
	const { lang } = await params;
	const locale: Locale = isLocale(lang) ? lang : defaultLocale;
	const data = getPageData<LandingData>("landing", locale);
	return { title: data.metadata.title };
}

export default async function HomePage({
	params,
}: { params: Promise<Params> }) {
	const { lang } = await params;
	const locale: Locale = isLocale(lang) ? lang : defaultLocale;
	const common = getCommon(locale);

	const landing = getPageData<LandingData>("landing", locale);
	const about = getPageData<AboutData>("about", locale);
	const experience = getPageData<ExperienceData>("experience", locale);
	const formation = getPageData<FormationData>("formation", locale);
	const contact = getPageData<ContactData>("contact", locale);

	return (
		<>
			<Content color="white">
				<Landing data={landing} />
			</Content>
			<Content color="grey">
				<About data={about} />
			</Content>
			<Content color="white">
				<Experience data={experience} locale={locale} duration={common.duration} />
			</Content>
			<Content color="grey">
				<Formation data={formation} locale={locale} duration={common.duration} />
			</Content>
			<Content color="white">
				<Contact data={contact} />
			</Content>
		</>
	);
}
