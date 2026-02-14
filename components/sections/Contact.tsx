import Image from "next/image";
import type { ContactData } from "@lib/i18n";
import Title from "@components/typography/Title";
import Flex from "@components/layout/Flex";
import Blockquote from "@components/display/Blockquote";

interface ContactProps {
	data: ContactData;
	className?: string;
}

export default function Contact({ data, className = "" }: ContactProps) {
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

			{data.links.map((link) => (
				<p key={link.href}>
					<Image
						src={link.icon}
						alt={link.iconAlt}
						width={20}
						height={20}
						style={{ marginRight: 20, verticalAlign: "middle" }}
					/>
					<a
						target="_blank"
						rel="noopener noreferrer"
						title={link.linkTitle}
						href={link.href}
					>
						{link.label}
					</a>
				</p>
			))}
		</Flex>
	);
}
