import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Heading } from "grommet"

import Menu from "../components/menu"

const Header = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin: 0;
    text-align: center;
  }
`

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
    <Header>
      <Heading level={3}>{site.siteMetadata.title}</Heading>
      {/* <Menu /> */}
    </Header>
  )
}
