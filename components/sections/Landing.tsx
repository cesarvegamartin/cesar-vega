import Image from "next/image";
import Subtitle from "@components/typography/Subtitle";
import Title from "@components/typography/Title";
import Flex from "@components/layout/Flex";

export default function Landing({
	className = "",
}: { className?: string }) {
	return (
		<Flex
			className={className}
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
		>
			<Image
				src="/images/avatar.png"
				alt="Foto de César Vega"
				width={200}
				height={200}
				priority
			/>
			<Title style={{ textAlign: "center" }}>CÉSAR VEGA</Title>
			<Subtitle>Desarrollador web</Subtitle>
		</Flex>
	);
}
