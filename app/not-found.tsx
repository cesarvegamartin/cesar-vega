import type { Metadata } from "next";
import Content from "@components/layout/Content";
import NotFound from "@components/sections/NotFound";

export const metadata: Metadata = {
	title: "404: No encontrado",
};

export default function NotFoundPage() {
	return (
		<Content color="white">
			<NotFound />
		</Content>
	);
}
