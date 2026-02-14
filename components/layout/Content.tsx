import type { ReactNode } from "react";
import styles from "./Content.module.css";

interface ContentProps {
	color?: "white" | "grey";
	children: ReactNode;
}

export default function Content({
	color = "white",
	children,
}: ContentProps) {
	const colorClass =
		color === "grey" ? styles.colorGrey : styles.colorWhite;

	return (
		<section className={`${styles.content} ${colorClass}`}>
			{children}
		</section>
	);
}
