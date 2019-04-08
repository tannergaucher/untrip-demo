import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FromGatsbyStaticQuery from "../containers/fromGatsbyStaticQuery"
import FromApolloQuery from "../containers/fromApolloQuery"

export default function indexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <FromGatsbyStaticQuery />
      <FromApolloQuery />
    </Layout>
  )
}
