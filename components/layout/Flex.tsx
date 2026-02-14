import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	flexDirection?: CSSProperties["flexDirection"];
	alignItems?: CSSProperties["alignItems"];
	justifyContent?: CSSProperties["justifyContent"];
	flexWrap?: CSSProperties["flexWrap"];
	flexGrow?: CSSProperties["flexGrow"];
	flexBasis?: CSSProperties["flexBasis"];
	flexShrink?: CSSProperties["flexShrink"];
	flex?: CSSProperties["flex"];
}

export default function Flex({
	children,
	className = "",
	style,
	flexDirection,
	alignItems,
	justifyContent,
	flexWrap,
	flexGrow,
	flexBasis,
	flexShrink,
	flex,
	...props
}: FlexProps) {
	return (
		<div
			{...props}
			className={className}
			style={{
				display: "flex",
				flexDirection,
				alignItems,
				justifyContent,
				flexWrap,
				flexGrow,
				flexBasis,
				flexShrink,
				flex,
				...style,
			}}
		>
			{children}
		</div>
	);
}
