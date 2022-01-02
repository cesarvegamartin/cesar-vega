import Seo from "@components/behaviour/seo"
import Layout from "@components/layout"
import Content from "@components/layout/Content"
import Formation from "@components/sections/Formation"
import * as React from "react"

export default () => (
  <Layout>
    <Seo title="Formation" />

    <Content color="grey" component={Formation} />
  </Layout>
)
