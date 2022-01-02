import Flex from "@components/layout/Flex"
import Subtitle from "@components/typography/Subtitle"
import Title from "@components/typography/Title"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import * as React from "react"

const Landing = ({ className }) => (
  <Flex flexDirection="column" justifyContent="center" alignItems="center">
    <Title style={{ marginBottom: 80 }}>404: No encontrado</Title>

    <Subtitle>La página a la que intentas acceder no existe</Subtitle>

    <Link to="/" style={{ paddingTop: 80 }}>
      Ir al inicio
    </Link>
  </Flex>
)

Landing.propTypes = {
  className: PropTypes.string,
}

export default Landing
