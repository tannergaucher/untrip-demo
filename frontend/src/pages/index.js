import React from "react"
import { Heading } from "grommet"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function indexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Heading level={3}>All Posts here</Heading>
    </Layout>
  )
}
