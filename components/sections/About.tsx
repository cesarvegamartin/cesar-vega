import type { AboutData } from "@lib/i18n";
import Title from "@components/typography/Title";
import Flex from "@components/layout/Flex";
import Blockquote from "@components/display/Blockquote";

interface AboutProps {
	data: AboutData;
	className?: string;
}

export default function About({ data, className = "" }: AboutProps) {
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

			{data.paragraphs.map((text) => (
				<p key={text}>{text}</p>
			))}
		</Flex>
	);
}
