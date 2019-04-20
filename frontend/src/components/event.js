import React from "react"
import { Box, Heading } from "grommet"
import { graphql } from "gatsby"

export default function event({ name }) {
  return (
    <Box margin="medium" pad="medium" background="light-4">
      <Heading>{name}</Heading>
    </Box>
  )
}

export const query = graphql`
  fragment EventFragment on GCMS_Event {
    id
    name
  }
`
