import Seo from "@components/behaviour/seo"
import Layout from "@components/layout"
import Content from "@components/layout/Content"
import Contact from "@components/sections/Contact"
import * as React from "react"

export default () => (
  <Layout>
    <Seo title="Contact" />

    <Content color="grey" component={Contact} />
  </Layout>
)
