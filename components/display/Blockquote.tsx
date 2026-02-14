import type { HTMLAttributes, ReactNode } from "react";
import Headline from "@components/typography/Headline";
import styles from "./Blockquote.module.css";

interface BlockquoteProps
	extends HTMLAttributes<HTMLQuoteElement> {
	children?: ReactNode;
}

export default function Blockquote({
	children,
	className = "",
	...props
}: BlockquoteProps) {
	return (
		<blockquote
			{...props}
			className={`${styles.blockquote} ${className}`}
		>
			<Headline>{children}</Headline>
		</blockquote>
	);
}
