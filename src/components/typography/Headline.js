import React from "react"
import PropTypes from "prop-types"
import "./Headline.css"

const Headline = props => {
  const { children, className, ...customProps } = props

  return (
    <div {...customProps} className={`headline ${className}`}>
      {children}
    </div>
  )
}

Headline.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

Headline.defaultProps = {
  children: undefined,
  className: "",
}

export default Headline
