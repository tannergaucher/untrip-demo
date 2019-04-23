import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Heading, Box } from "grommet"
import Link from "../components/styles/link"

import Menu from "../components/menu"

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
    <Box
      as="header"
      direction="row"
      justify="between"
      style={{ gridArea: "header" }}
    >
      <Link to="/">
        <Heading level={3} margin="medium" color="dark-4">
          {site.siteMetadata.title}
        </Heading>
      </Link>
      <Menu />
    </Box>
  )
}
