import * as React from "react"

import Layout from "@components/layout"
import Seo from "@components/behaviour/seo"
import Landing from "@components/sections/Landing"
import Content from "@components/layout/Content"
import About from "@components/sections/About"
import Experience from "@components/sections/Experience"
import Formation from "@components/sections/Formation"
import Contact from "@components/sections/Contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Desarrollador web" />

    <Content color="white" component={Landing} />
    <Content color="grey" component={About} />
    <Content color="white" component={Experience} />
    <Content color="grey" component={Formation} />
    <Content color="white" component={Contact} />
  </Layout>
)

export default IndexPage
