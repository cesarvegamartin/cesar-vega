import Seo from "@components/behaviour/seo"
import Layout from "@components/layout"
import Content from "@components/layout/Content"
import Experience from "@components/sections/Experience"
import * as React from "react"

export default () => (
  <Layout>
    <Seo title="About" />

    <Content color="grey" component={Experience} />
  </Layout>
)
