const formatDate = (date: Date): string => {
	const formatter = new Intl.DateTimeFormat("es-ES", {
		month: "long",
		year: "numeric",
	});
	return formatter.format(date).toUpperCase();
};

const calculateDuration = (start: Date, end: Date): string => {
	let months =
		(end.getFullYear() - start.getFullYear()) * 12 +
		(end.getMonth() - start.getMonth());

	if (months < 1) {
		months = 1;
	}

	const years = Math.floor(months / 12);
	const remainingMonths = months % 12;

	if (years === 0) {
		return remainingMonths === 1 ? "1 mes" : `${remainingMonths} meses`;
	}

	if (remainingMonths === 0) {
		return years === 1 ? "1 año" : `${years} años`;
	}

	const yearStr = years === 1 ? "1 año" : `${years} años`;
	const monthStr =
		remainingMonths === 1 ? "1 mes" : `${remainingMonths} meses`;
	return `${yearStr} y ${monthStr}`;
};

export default function formatInterval(
	...dates: (string | Date)[]
): string {
	const parsedDates = dates.filter((d) => d).map((d) => new Date(d));

	switch (parsedDates.length) {
		case 1:
			return formatDate(parsedDates[0]);
		case 2:
			return `${parsedDates.map(formatDate).join(" - ")}    (${calculateDuration(parsedDates[0], parsedDates[1])})`;
		default:
			throw new Error("formatInterval only takes 1 or 2 dates");
	}
}
