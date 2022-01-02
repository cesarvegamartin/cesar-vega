import * as React from "react"
import PropTypes from "prop-types"

import Title from "@components/typography/Title"
import Subtitle from "@components/typography/Subtitle"
import Flex from "@components/layout/Flex"
import Blockquote from "@components/display/Blockquote"
import Card from "@components/display/Card"

const Formation = ({ className, ...customProps }) => (
  <Flex
    {...customProps}
    className={className}
    flexDirection="column"
    justifyContent="center"
  >
    <Title style={{ marginBottom: 80 }}>Formación</Title>

    <Blockquote style={{ marginBottom: 80 }}>
      Me considero una persona autodidacta y curiosa, me entusiasma investigar
      <br />
      nuevos desarrollos y escudriñar los que funcionan correctamente.
      <br />
      Como todo desarrollador estoy siempre a la última.
    </Blockquote>

    <Subtitle style={{ marginBottom: 20 }}>2019</Subtitle>

    <Card
      title="Professional Scrum Master"
      subtitle="SCRUM.ORG"
      startDate="2019-11"
      style={{ marginBottom: 40 }}
    />

    <Subtitle style={{ marginBottom: 20 }}>2013</Subtitle>

    <Card
      title="Técnico Superior en Desarrollo de Aplicaciones Multiplataforma"
      subtitle="IES JULIÁN MARÍAS"
      startDate="2011-09"
      endDate="2013-06"
      style={{ marginBottom: 40 }}
    />
  </Flex>
)

Formation.propTypes = {
  className: PropTypes.string,
}

export default Formation
