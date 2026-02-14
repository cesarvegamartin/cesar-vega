import Image from "next/image";
import type { LandingData } from "@lib/i18n";
import Subtitle from "@components/typography/Subtitle";
import Title from "@components/typography/Title";
import Flex from "@components/layout/Flex";

interface LandingProps {
	data: LandingData;
	className?: string;
}

export default function Landing({ data, className = "" }: LandingProps) {
	return (
		<Flex
			className={className}
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
		>
			<Image
				src="/images/avatar.png"
				alt={data.avatarAlt}
				width={200}
				height={200}
				priority
			/>
			<Title style={{ textAlign: "center" }}>{data.name}</Title>
			<Subtitle>{data.subtitle}</Subtitle>
		</Flex>
	);
}
