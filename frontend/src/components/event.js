import React from "react"
import { Box, Heading } from "grommet"
import { graphql } from "gatsby"

export default function event({ name }) {
  return (
    <Box pad="medium" background="light-4">
      <Heading level={4} margin="none" color="dark-3">
        Event
      </Heading>
      <Heading level={3}>{name}</Heading>
    </Box>
  )
}

export const query = graphql`
  fragment EventFragment on GCMS_Event {
    id
    name
  }
`
