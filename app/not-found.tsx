import {
	type NotFoundData,
	defaultLocale,
	getPageData,
} from "@lib/i18n";
import Content from "@components/layout/Content";
import NotFoundSection from "@components/sections/NotFound";

export default function RootNotFoundPage() {
	const data = getPageData<NotFoundData>("not-found", defaultLocale);

	return (
		<html lang={defaultLocale}>
			<body>
				<main>
					<Content color="white">
						<NotFoundSection data={data} lang={defaultLocale} />
					</Content>
				</main>
			</body>
		</html>
	);
}
