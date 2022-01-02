import React from "react"
import PropTypes from "prop-types"
import "./Title.css"

const Title = props => {
  const { children, className, ...customProps } = props

  return (
    <h1 {...customProps} className={`title ${className}`}>
      {children}
    </h1>
  )
}

Title.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

Title.defaultProps = {
  children: undefined,
  className: "",
}

export default Title
