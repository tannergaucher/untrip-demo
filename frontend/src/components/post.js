import React from "react"
import { Box, Heading } from "grommet"
import Link from "gatsby-link"
import GraphImg from "graphcms-image"
import { kebabCase } from "lodash"
import { graphql } from "gatsby"

export default function Post({ post }) {
  return (
    <Link
      to={`/posts/${kebabCase(post.title)}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Box margin={{ vertical: "large", horizontal: "small" }}>
        <GraphImg image={post.image} maxWidth={300} />
        <Heading level={2} margin={{ vertical: "small" }}>
          {post.title}
        </Heading>
      </Box>
    </Link>
  )
}

export const query = graphql`
  fragment PostFragment on GCMS_Post {
    id
    title
    category {
      category
    }
    image {
      handle
      height
      width
    }
  }
`
