import type { Metadata } from "next";
import Content from "@components/layout/Content";
import Landing from "@components/sections/Landing";

export const metadata: Metadata = {
	title: "Landing",
};

export default function LandingPage() {
	return (
		<Content color="white">
			<Landing />
		</Content>
	);
}
