import type { ExperienceData, Locale, DurationStrings } from "@lib/i18n";
import Title from "@components/typography/Title";
import Subtitle from "@components/typography/Subtitle";
import Flex from "@components/layout/Flex";
import Blockquote from "@components/display/Blockquote";
import Card from "@components/display/Card";

interface ExperienceProps {
	data: ExperienceData;
	locale: Locale;
	duration: DurationStrings;
	className?: string;
}

export default function Experience({
	data,
	locale,
	duration,
	className = "",
}: ExperienceProps) {
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

			{data.entries.map((entry, idx) => {
				const isLast = idx === data.entries.length - 1;
				const nextHasYear =
					!isLast && data.entries[idx + 1].year;

				return (
					<div key={`${entry.company}-${entry.startDate}`}>
						{entry.year && (
							<Subtitle style={{ marginBottom: 20 }}>
								{entry.year}
							</Subtitle>
						)}

						<Card
							title={entry.title}
							subtitle={entry.company}
							startDate={entry.startDate}
							endDate={entry.endDate}
							locale={locale}
							duration={duration}
							style={{
								marginBottom: nextHasYear || isLast ? 40 : 20,
							}}
						>
							{entry.tasks && entry.tasks.length > 0 && (
								<ul>
									{entry.tasks.map((task) => (
										<li key={task}>{task}</li>
									))}
								</ul>
							)}
						</Card>
					</div>
				);
			})}
		</Flex>
	);
}
