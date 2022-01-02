import React from "react"
import PropTypes from "prop-types"
import "./Caption.css"

const Caption = props => {
  const { children, className, ...customProps } = props

  return (
    <div {...customProps} className={`caption ${className}`}>
      {children}
    </div>
  )
}

Caption.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

Caption.defaultProps = {
  children: undefined,
  className: "",
}

export default Caption
