import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Heading, Box } from "grommet"
import Link from "../components/styles/link"

export default () => {
  const { site } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Box as="header" style={{ gridArea: "header" }} background="">
      <Link to="/" style={{}}>
        <Heading level={4} margin="medium" color="neutral-2">
          {site.siteMetadata.title}
        </Heading>
      </Link>
      {/* <Menu /> */}
    </Box>
  )
}
