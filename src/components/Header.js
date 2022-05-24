import React, { useState } from "react"
import PropTypes from "prop-types"
import TransitionLink from "gatsby-plugin-transition-link"
import SwipeOver from "./behaviour/SwipeOver"

const { TransitionState } = TransitionLink

const sections = ["landing", "about", "experience", "formation", "contact"]

function Header(props) {
  const [previousPage, setPreviousPage] = useState(null)
  const [animationProps, setAnimationProps] = useState({ direction: "down" })

  return (
    <div>
      {sections.map(sectionName => (
        <TransitionLink key={sectionName} to={`/${sectionName}`}>
          {sectionName}
        </TransitionLink>
      ))}
    </div>
  )
}

Header.propTypes = {
  propname: PropTypes.string,
}

Header.defaultProps = {
  propname: undefined,
}

export default Header
