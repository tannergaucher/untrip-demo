import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostsList from "../components/postsList"

export default function indexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <PostsList />
    </Layout>
  )
}
