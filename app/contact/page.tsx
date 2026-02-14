import type { Metadata } from "next";
import Content from "@components/layout/Content";
import Contact from "@components/sections/Contact";

export const metadata: Metadata = {
	title: "Contacto",
};

export default function ContactPage() {
	return (
		<Content color="grey">
			<Contact />
		</Content>
	);
}
