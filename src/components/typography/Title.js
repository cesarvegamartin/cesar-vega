import React from "react"
import PropTypes from "prop-types"
import "./Title.css"

const Title = props => {
  const { children, className, ...customProps } = props

  return (
    <div {...customProps} className={`title ${className}`}>
      {children}
    </div>
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
