import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box } from "grommet"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"

export default function indexPage() {
  const { gcms } = useStaticQuery(graphql`
    query {
      gcms {
        posts {
          id
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Box margin={{ vertical: "large" }}>
        {gcms.posts.map(post => {
          return <Post title={post.title} id={post.id} key={post.id} />
        })}
      </Box>
    </Layout>
  )
}
