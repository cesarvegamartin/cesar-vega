import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

import Subtitle from "@components/typography/Subtitle"
import Title from "@components/typography/Title"
import Flex from "@components/layout/Flex"

const Landing = ({ className }) => (
  <Flex
    className={className}
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
  >
    <StaticImage
      src="../../images/avatar.png"
      formats={["auto", "webp", "avif"]}
      alt="Foto de César Vega"
      placeholder="Foto"
      layout="fixed"
    />

    <Title style={{ textAlign: "center" }}>CÉSAR VEGA</Title>
    <Subtitle>Desarrollador web</Subtitle>
  </Flex>
)

Landing.propTypes = {
  className: PropTypes.string,
}

export default Landing
