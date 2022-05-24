import React from "react"
import PropTypes from "prop-types"
import TransitionLink from "gatsby-plugin-transition-link"

const TRANSITION_LENGTH = 1

const exitTransition = {
  length: TRANSITION_LENGTH,
  trigger: () => {
    if (document) {
      // Preventing overflow here make the animation smoother IMO
      document.body.style.overflow = "hidden"
    }
  },
}

const entryTransition = {
  delay: TRANSITION_LENGTH,
  trigger: () => {
    if (document && window) {
      // Ensuring we're at the top of the page when the page loads
      // prevents any additional JANK when the transition ends.
      window.scrollTo(0, 0)
      document.body.style.overflow = "visible"
    }
  },
}

function CustomTransitionLink(props) {
  const { to } = props

  return (
    <TransitionLink
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
      to={nextProjectUrl}
      exit={exitTransition}
      entry={entryTransition}
    >
      {to}
      {/* <FadingNextProjectHeading pose={transitionStatus}>
          <NextProjectHeading />
        </FadingNextProjectHeading> */}
      {/* <SlidingHeader pose={transitionStatus}>
          <ProjectHeader project={project.next} truncated={shouldTruncate} />
        </SlidingHeader> */}
    </TransitionLink>
  )
}

CustomTransitionLink.propTypes = {
  propname: PropTypes.string,
}

CustomTransitionLink.defaultProps = {
  propname: undefined,
}

export default CustomTransitionLink
