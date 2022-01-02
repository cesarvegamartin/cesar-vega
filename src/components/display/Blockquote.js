import React from "react"
import PropTypes from "prop-types"
import "./Blockquote.css"

import Headline from "@components/typography/Headline"

const Blockquote = props => {
  const { children, className, ...customProps } = props

  return (
    <blockquote {...customProps} className={`blockquote ${className}`}>
      <Headline>{children}</Headline>
    </blockquote>
  )
}

Blockquote.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

Blockquote.defaultProps = {
  children: undefined,
  className: "",
}

export default Blockquote
