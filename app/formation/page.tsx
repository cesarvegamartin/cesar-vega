import type { Metadata } from "next";
import Content from "@components/layout/Content";
import Formation from "@components/sections/Formation";

export const metadata: Metadata = {
	title: "Formación",
};

export default function FormationPage() {
	return (
		<Content color="grey">
			<Formation />
		</Content>
	);
}
