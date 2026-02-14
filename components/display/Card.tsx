import type { HTMLAttributes, ReactNode } from "react";
import Headline from "@components/typography/Headline";
import Caption from "@components/typography/Caption";
import formatInterval from "@utils/formatInterval";
import styles from "./Card.module.css";

interface CardProps extends HTMLAttributes<HTMLElement> {
	title?: string;
	subtitle?: string;
	startDate?: string;
	endDate?: string | Date;
	children?: ReactNode;
}

export default function Card({
	title,
	subtitle,
	startDate,
	endDate,
	children,
	...props
}: CardProps) {
	const dates = [startDate, endDate].filter(Boolean) as (
		| string
		| Date
	)[];

	const formattedDate =
		startDate ? formatInterval(...dates) : null;

	return (
		<article {...props} className={styles.card}>
			{title && <Headline>{title}</Headline>}
			{subtitle && <Caption>{subtitle}</Caption>}
			{formattedDate && (
				<Caption
					style={{ marginBottom: 10, whiteSpace: "pre" }}
				>
					{formattedDate}
				</Caption>
			)}
			{children}
		</article>
	);
}
