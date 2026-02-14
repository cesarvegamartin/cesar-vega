import { blockquoteStyles } from "./blockquote.styles"

type BlockquoteProps = {
  children: React.ReactNode
}

export function Blockquote({ children }: BlockquoteProps) {
  return (
    <blockquote className={blockquoteStyles.wrapper}>
      {children}
    </blockquote>
  )
}
