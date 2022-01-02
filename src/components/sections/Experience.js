import * as React from "react"
import PropTypes from "prop-types"

import Title from "@components/typography/Title"
import Subtitle from "@components/typography/Subtitle"
import Flex from "@components/layout/Flex"
import Blockquote from "@components/display/Blockquote"
import Card from "@components/display/Card"

const Experience = ({ className, ...customProps }) => (
  <Flex
    {...customProps}
    className={className}
    flexDirection="column"
    justifyContent="center"
  >
    <Title style={{ marginBottom: 80 }}>Experiencia</Title>

    <Blockquote style={{ marginBottom: 80 }}>
      Siempre me ha gustado probar un poco de todo aunque
      <br />
      mi mayor experiencia ha sido como desarrollador full-stack y front-end.
    </Blockquote>

    <Subtitle style={{ marginBottom: 20 }}>2022</Subtitle>

    <Card
      title="Desarrollador full-stack"
      subtitle="SWEEP TECHNOLOGY"
      startDate="2020-04"
      endDate={new Date()}
      style={{ marginBottom: 40 }}
    >
      <ul>
        <li>
          Backend con soporte para los 3 productos propios: Javascript, NodeJS y
          MongoDB
        </li>
        <li>
          Plataforma web para integrar facturas con los principales sistemas
          contables: Javascript, React y Redux
        </li>
        <li>
          Plataforma web para que las empresas gestionen y paguen gastos:
          Javascript, React y Redux
        </li>
        <li>
          Aplicación móvil para que las empresas gestionen y paguen gastos:
          Javascript y React Native
        </li>
      </ul>
    </Card>

    <Subtitle style={{ marginBottom: 20 }}>2020</Subtitle>

    <Card
      title="Desarrollador front-end"
      subtitle="SNGULAR"
      startDate="2018-05"
      endDate="2020-03"
      style={{ marginBottom: 40 }}
    >
      <ul>
        <li>
          Backend con soporte para los 3 productos propios: Javascript, NodeJS y
          MongoDB
        </li>
        <li>
          Plataforma web para integrar facturas con los principales sistemas
          contables: Javascript, React y Redux
        </li>
        <li>
          Plataforma web para que las empresas gestionen y paguen gastos:
          Javascript, React y Redux
        </li>
        <li>
          Aplicación móvil para que las empresas gestionen y paguen gastos:
          Javascript y React Native
        </li>
      </ul>
    </Card>

    <Subtitle style={{ marginBottom: 20 }}>2018</Subtitle>

    <Card
      title="Desarrollador front-end"
      subtitle="COGNIZANT"
      startDate="2017-12"
      endDate="2018-05"
      style={{ marginBottom: 20 }}
    >
      <ul>
        <li>
          Plataforma web area de inversiones para KBC Bank: Javascript,
          coffescript y AngularJS
        </li>
      </ul>
    </Card>

    <Card
      title="Desarrollador full-stack"
      subtitle="FREELANCE"
      startDate="2015-03"
      endDate="2018-12"
      style={{ marginBottom: 40 }}
    >
      <ul>
        <li>
          Colaboración y soporte para Euphorbia Comunicación: Javascript,
          Angular y PHP
        </li>
        <li>
          Varios proyectos independientes para pequeñas empresas y freelancers
        </li>
      </ul>
    </Card>

    <Subtitle style={{ marginBottom: 20 }}>2018</Subtitle>

    <Card
      title="Desarrollador full-stack"
      subtitle="EUPHORBIA COMUNICACIÓN"
      startDate="2016-01"
      endDate="2017-12"
      style={{ marginBottom: 40 }}
    >
      <ul>
        <li>MULTIPLES PROYECTOS (los más destacados):</li>
        <li>
          Web de envio de comida semanal a domicilio para Comer y Punto:
          Javascript, AngularJS, PHP, Slim Framework y PL/SQL
        </li>
        <li>
          Web corporativa para Farming Agrícola: Javascript, AngularJS, PHP y
          Slim Framework
        </li>
        <li>
          Ecommerce con blog para El Club del Zapato: Javascript, JQuery, PHP y
          conexiones a datos de ERP
        </li>
      </ul>
    </Card>

    <Subtitle style={{ marginBottom: 20 }}>2013</Subtitle>

    <Card
      title="Desarrollador móvil"
      subtitle="CIDAUT"
      startDate="2013-02"
      endDate="2013-12"
      style={{ marginBottom: 40 }}
    >
      <ul>
        <li>
          Aplicación Android para que personas discapacitadas puedan
          comunicarse: Android
        </li>
      </ul>
    </Card>
  </Flex>
)

Experience.propTypes = {
  className: PropTypes.string,
}

export default Experience
