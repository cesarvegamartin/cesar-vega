import Seo from "@components/behaviour/seo"
import Layout from "@components/layout"
import Content from "@components/layout/Content"
import NotFound from "@components/sections/NotFound"
import * as React from "react"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />

    <Content color="white" component={NotFound} />
  </Layout>
)

export default NotFoundPage
