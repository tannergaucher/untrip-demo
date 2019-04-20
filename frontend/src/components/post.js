import React from "react"
import { Box, Heading } from "grommet"
import Link from "gatsby-link"
// import GraphImg from "graphcms-image"
import { kebabCase } from "lodash"

const post = ({ title, id, image }) => (
  <Link
    to={`/posts/${kebabCase(title)}`}
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <Box pad="medium" margin="medium" elevation="medium" round="xsmall">
      <Heading level={2}>{title}</Heading>
      {/* <GraphImg image={image} maxWidth={300} /> */}
    </Box>
  </Link>
)

export default post
