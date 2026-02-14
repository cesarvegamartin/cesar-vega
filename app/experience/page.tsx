import type { Metadata } from "next";
import Content from "@components/layout/Content";
import Experience from "@components/sections/Experience";

export const metadata: Metadata = {
	title: "Experiencia",
};

export default function ExperiencePage() {
	return (
		<Content color="grey">
			<Experience />
		</Content>
	);
}
