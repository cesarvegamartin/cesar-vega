import React from "react"
import PropTypes from "prop-types"
import "./Content.css"

const Content = props => {
  const { color, component: Component, ...customProps } = props

  return (
    <section className={`content content--color-${color}`}>
      <Component {...customProps} />
    </section>
  )
}

Content.propTypes = {
  children: PropTypes.any,
  color: PropTypes.oneOf("white", "grey"),
  className: PropTypes.string,
  component: PropTypes.any,
}

Content.defaultProps = {
  children: undefined,
  color: "white",
  className: "",
  component: "div",
}

export default Content
