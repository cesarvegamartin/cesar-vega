import Link from "next/link";
import type { NotFoundData, Locale } from "@lib/i18n";
import Title from "@components/typography/Title";
import Subtitle from "@components/typography/Subtitle";
import Flex from "@components/layout/Flex";

interface NotFoundProps {
	data: NotFoundData;
	lang: Locale;
}

export default function NotFound({ data, lang }: NotFoundProps) {
	return (
		<Flex
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
		>
			<Title style={{ marginBottom: 80 }}>{data.title}</Title>

			<Subtitle>{data.subtitle}</Subtitle>

			<Link href={`/${lang}`} style={{ paddingTop: 80 }}>
				{data.linkText}
			</Link>
		</Flex>
	);
}
