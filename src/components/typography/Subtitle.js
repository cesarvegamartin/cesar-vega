import React from "react"
import PropTypes from "prop-types"
import "./Subtitle.css"

const Subtitle = props => {
  const { children, className, ...customProps } = props

  return (
    <div {...customProps} className={`subtitle ${className}`}>
      {children}
    </div>
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
