import type { Metadata } from "next";
import Content from "@components/layout/Content";
import About from "@components/sections/About";

export const metadata: Metadata = {
	title: "About",
};

export default function AboutPage() {
	return (
		<Content color="grey">
			<About />
		</Content>
	);
}
