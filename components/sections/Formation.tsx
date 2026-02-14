import type { FormationData, Locale, DurationStrings } from "@lib/i18n";
import Title from "@components/typography/Title";
import Subtitle from "@components/typography/Subtitle";
import Flex from "@components/layout/Flex";
import Blockquote from "@components/display/Blockquote";
import Card from "@components/display/Card";

interface FormationProps {
	data: FormationData;
	locale: Locale;
	duration: DurationStrings;
	className?: string;
}

export default function Formation({
	data,
	locale,
	duration,
	className = "",
}: FormationProps) {
	return (
		<Flex
			className={className}
			flexDirection="column"
			justifyContent="center"
		>
			<Title style={{ marginBottom: 80 }}>{data.title}</Title>

			<Blockquote style={{ marginBottom: 80 }}>
				{data.quote.split("\n").map((line, i, arr) => (
					<span key={line}>
						{line}
						{i < arr.length - 1 && <br />}
					</span>
				))}
			</Blockquote>

			{data.entries.map((entry) => (
				<div key={`${entry.institution}-${entry.startDate}`}>
					{entry.year && (
						<Subtitle style={{ marginBottom: 20 }}>
							{entry.year}
						</Subtitle>
					)}

					<Card
						title={entry.title}
						subtitle={entry.institution}
						startDate={entry.startDate}
						endDate={entry.endDate}
						locale={locale}
						duration={duration}
						style={{ marginBottom: 40 }}
					/>
				</div>
			))}
		</Flex>
	);
}
