import * as React from "react"
import PropTypes from "prop-types"

import Title from "@components/typography/Title"
import Flex from "@components/layout/Flex"
import Blockquote from "@components/display/Blockquote"

const About = ({ className, ...customProps }) => (
  <Flex
    {...customProps}
    className={className}
    flexDirection="column"
    justifyContent="center"
  >
    <Title style={{ marginBottom: 80 }}>Introducción</Title>

    <Blockquote style={{ marginBottom: 80 }}>
      Me encanta este mundo,
      <br />
      deseo seguir programando toda mi vida como hasta ahora,
      <br />
      con el máximo entusiasmo y dedicación.
    </Blockquote>

    <p>
      Recuerdo el primer día de escuela cuando me había apuntado a algo llamado
      "programación", tenía tanta curiosidad como miedo ya que no conocía nada
      acerca del tema, sólo sabía que se me daban bien las "cosas de
      ordenadores". Hoy en día ese miedo se ha convertido en seguridad y en mi
      mayor virtud.
    </p>
    <p>
      Empecé con Java desarrollando en Android y aunque me gustaba, decidí hacer
      un curso de web. Es cuando ví el potencial que ofrece el desarrollo web:
      su sencilled y flexibilidad. Me di cuenta de que la mayoría de los
      proyectos se podrían hacer con esa tecnología y me resultaba emocionante,
      ¡había encontrado la rama que me gustaba!.
    </p>
    <p>
      He trabajado como desarrollador de back-end y front-end, siendo esté
      último mi preferido ya que se acerca más al usuario. Tengo pasión por cómo
      funcionan las cosas, una cierta obsesión por la experiencia de usuario y
      me satisface ver el resultado final.
    </p>
    <p>
      Hasta aquí mi turno, me gustaría seguir creciendo personal y
      profesionalmente en una gran empresa, si tienes tanto entusiasmo como yo
      por este mundo, ¡no dudes en contactar conmigo!
    </p>
  </Flex>
)

About.propTypes = {
  className: PropTypes.string,
}

export default About
