import React, { useMemo } from "react"
import PropTypes from "prop-types"
import "./Card.css"

import Headline from "@components/typography/Headline"
import Caption from "@components/typography/Caption"
import formatInterval from "@utils/formatInterval"

const Card = props => {
  const { title, subtitle, startDate, endDate, children, ...customProps } =
    props

  const dates = useMemo(
    () => [startDate, endDate].filter(d => d),
    [startDate, endDate]
  )

  const formatedDate = useMemo(
    () => formatInterval(startDate, endDate),
    [dates]
  )

  return (
    <div {...customProps}>
      {title && <Headline>{title}</Headline>}

      {subtitle && <Caption>{subtitle}</Caption>}

      {!!dates.length && (
        <Caption style={{ marginBottom: 10, whiteSpace: "pre" }}>
          {formatedDate}
        </Caption>
      )}

      {children}
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  children: PropTypes.any,
}

Card.defaultProps = {}

export default Card
