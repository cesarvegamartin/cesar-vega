import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Caption.module.css";

interface CaptionProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
}

export default function Caption({
	children,
	className = "",
	...props
}: CaptionProps) {
	return (
		<div {...props} className={`${styles.caption} ${className}`}>
			{children}
		</div>
	);
}
