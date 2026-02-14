import Image from "next/image";
import Title from "@components/typography/Title";
import Flex from "@components/layout/Flex";
import Blockquote from "@components/display/Blockquote";

export default function Contact({
	className = "",
}: { className?: string }) {
	return (
		<Flex
			className={className}
			flexDirection="column"
			justifyContent="center"
		>
			<Title style={{ marginBottom: 80 }}>Contacto</Title>

			<Blockquote style={{ marginBottom: 80 }}>
				Hasta aquí mi turno, si tienes tanto entusiasmo como yo por este
				mundo,
				<br />
				¡no dudes en contactar conmigo!
			</Blockquote>

			<p>
				<Image
					src="/images/icon-google.svg"
					alt="Icono de Google"
					width={20}
					height={20}
					style={{ marginRight: 20, verticalAlign: "middle" }}
				/>
				<a
					target="_blank"
					rel="noopener noreferrer"
					title="Enviar email"
					href="mailto:hola.cesar.vega@gmail.com"
				>
					hola.cesar.vega@gmail.com
				</a>
			</p>

			<p>
				<Image
					src="/images/icon-linkedin.svg"
					alt="Icono de Linkedin"
					width={20}
					height={20}
					style={{ marginRight: 20, verticalAlign: "middle" }}
				/>
				<a
					target="_blank"
					rel="noopener noreferrer"
					title="Abrir perfil en linkedin"
					href="https://es.linkedin.com/in/cesarvegamartin"
				>
					cesarvegamartin
				</a>
			</p>
		</Flex>
	);
}
