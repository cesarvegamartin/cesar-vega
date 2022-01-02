import * as React from "react"
import PropTypes from "prop-types"

import Title from "@components/typography/Title"
import Subtitle from "@components/typography/Subtitle"
import Flex from "@components/layout/Flex"
import Blockquote from "@components/display/Blockquote"
import Card from "@components/display/Card"
import { StaticImage } from "gatsby-plugin-image"

const Contact = ({ className, ...customProps }) => (
  <Flex
    {...customProps}
    className={className}
    flexDirection="column"
    justifyContent="center"
  >
    <Title style={{ marginBottom: 80 }}>Contacto</Title>

    <Blockquote style={{ marginBottom: 80 }}>
      Hasta aquí mi turno, si tienes tanto entusiasmo como yo por este mundo,
      <br />
      ¡no dudes en contactar conmigo!
    </Blockquote>

    <p>
      <StaticImage
        src="../../images/icon-google.png"
        formats={["auto", "webp", "avif"]}
        style={{ marginRight: 20 }}
        alt="Icono de Google"
        placeholder="G"
      />
      <a
        target="_blank"
        rel="noopener noreferrer"
        title="Enviar email"
        href="mailto:hola.cesar.vega@gmail.com"
      >
        hola.cesar.vega@gmail.com
      </a>
    </p>

    <p>
      <StaticImage
        src="../../images/icon-linkedin.png"
        formats={["auto", "webp", "avif"]}
        style={{ marginRight: 20 }}
        alt="Icono de Linkedin"
        placeholder="In"
      />
      <a
        target="_blank"
        rel="noopener noreferrer"
        title="Abrir perfil en linkedin"
        href="https://es.linkedin.com/in/cesarvegamartin"
      >
        cesarvegamartin
      </a>
    </p>
  </Flex>
)

Contact.propTypes = {
  className: PropTypes.string,
}

export default Contact
