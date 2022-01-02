import Seo from "@components/behaviour/seo"
import Layout from "@components/layout"
import Content from "@components/layout/Content"
import Landing from "@components/sections/Landing"
import * as React from "react"

export default () => (
  <Layout>
    <Seo title="Landing" />

    <Content color="white" component={Landing} />
  </Layout>
)
