import React from "react"
import { Box, Heading } from "grommet"
import Link from "gatsby-link"
import GraphImg from "graphcms-image"
import { kebabCase } from "lodash"
import { graphql } from "gatsby"

export default function Post({ title, image, category }) {
  return (
    <Link
      to={`/posts/${kebabCase(title)}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Box margin={{ vertical: "medium" }} elevation="">
        <Heading level={1} margin="medium">
          {title}
        </Heading>
        <GraphImg image={image} maxWidth={300} />

        <Box direction="row">
          <Heading level={6} margin="medium">
            {category}
          </Heading>
        </Box>
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
