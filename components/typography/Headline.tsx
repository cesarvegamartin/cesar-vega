import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Headline.module.css";

interface HeadlineProps extends HTMLAttributes<HTMLHeadingElement> {
	children?: ReactNode;
}

export default function Headline({
	children,
	className = "",
	...props
}: HeadlineProps) {
	return (
		<h3 {...props} className={`${styles.headline} ${className}`}>
			{children}
		</h3>
	);
}
