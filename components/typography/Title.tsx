import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Title.module.css";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
	children?: ReactNode;
}

export default function Title({
	children,
	className = "",
	...props
}: TitleProps) {
	return (
		<h1 {...props} className={`${styles.title} ${className}`}>
			{children}
		</h1>
	);
}
