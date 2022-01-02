import React from "react"
import PropTypes from "prop-types"
import "./Subtitle.css"

const Subtitle = props => {
  const { children, className, ...customProps } = props

  return (
    <h2 {...customProps} className={`subtitle ${className}`}>
      {children}
    </h2>
  )
}

Subtitle.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

Subtitle.defaultProps = {
  children: undefined,
  className: "",
}

export default Subtitle
