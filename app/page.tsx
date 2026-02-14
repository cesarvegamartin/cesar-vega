import type { Metadata } from "next";
import Content from "@components/layout/Content";
import Landing from "@components/sections/Landing";
import About from "@components/sections/About";
import Experience from "@components/sections/Experience";
import Formation from "@components/sections/Formation";
import Contact from "@components/sections/Contact";

export const metadata: Metadata = {
	title: "Desarrollador web",
};

export default function HomePage() {
	return (
		<>
			<Content color="white">
				<Landing />
			</Content>
			<Content color="grey">
				<About />
			</Content>
			<Content color="white">
				<Experience />
			</Content>
			<Content color="grey">
				<Formation />
			</Content>
			<Content color="white">
				<Contact />
			</Content>
		</>
	);
}
