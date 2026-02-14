import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Subtitle.module.css";

interface SubtitleProps extends HTMLAttributes<HTMLHeadingElement> {
	children?: ReactNode;
}

export default function Subtitle({
	children,
	className = "",
	...props
}: SubtitleProps) {
	return (
		<h2 {...props} className={`${styles.subtitle} ${className}`}>
			{children}
		</h2>
	);
}
