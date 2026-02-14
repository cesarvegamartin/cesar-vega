import type { DurationStrings, Locale } from "@lib/i18n";

const localeMap: Record<string, string> = {
	es: "es-ES",
	en: "en-GB",
};

const formatDate = (date: Date, locale: Locale): string => {
	const formatter = new Intl.DateTimeFormat(localeMap[locale] ?? locale, {
		month: "long",
		year: "numeric",
	});
	return formatter.format(date).toUpperCase();
};

function pluralize(
	count: number,
	one: string,
	other: string,
): string {
	return count === 1 ? one : other.replace("{count}", String(count));
}

const calculateDuration = (
	start: Date,
	end: Date,
	duration: DurationStrings,
): string => {
	let months =
		(end.getFullYear() - start.getFullYear()) * 12 +
		(end.getMonth() - start.getMonth());

	if (months < 1) {
		months = 1;
	}

	const years = Math.floor(months / 12);
	const remainingMonths = months % 12;

	if (years === 0) {
		return pluralize(
			remainingMonths,
			duration.month_one,
			duration.month_other,
		);
	}

	const yearStr = pluralize(years, duration.year_one, duration.year_other);

	if (remainingMonths === 0) {
		return yearStr;
	}

	const monthStr = pluralize(
		remainingMonths,
		duration.month_one,
		duration.month_other,
	);
	return `${yearStr} ${duration.and} ${monthStr}`;
};

export default function formatInterval(
	locale: Locale,
	duration: DurationStrings,
	...dates: (string | Date)[]
): string {
	const parsedDates = dates
		.filter((d) => d)
		.map((d) => {
			if (typeof d === "string" && d === "now") {
				return new Date();
			}
			return new Date(d);
		});

	switch (parsedDates.length) {
		case 1:
			return formatDate(parsedDates[0], locale);
		case 2:
			return `${parsedDates.map((d) => formatDate(d, locale)).join(" - ")}    (${calculateDuration(parsedDates[0], parsedDates[1], duration)})`;
		default:
			throw new Error("formatInterval only takes 1 or 2 dates");
	}
}
