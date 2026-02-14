import Link from "next/link";
import Title from "@components/typography/Title";
import Subtitle from "@components/typography/Subtitle";
import Flex from "@components/layout/Flex";

export default function NotFound() {
	return (
		<Flex
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
		>
			<Title style={{ marginBottom: 80 }}>
				404: No encontrado
			</Title>

			<Subtitle>
				La página a la que intentas acceder no existe
			</Subtitle>

			<Link href="/" style={{ paddingTop: 80 }}>
				Ir al inicio
			</Link>
		</Flex>
	);
}
