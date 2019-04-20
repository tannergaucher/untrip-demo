import React from "react"
import { Box, Heading } from "grommet"
import { graphql } from "gatsby"

import TogglePlace from "../containers/togglePlace"

export default function place({ name, gcmsId }) {
  return (
    <Box pad="large" background="light-4">
      <Heading level={5}>{name}</Heading>
      <TogglePlace gcmsId={gcmsId} />
    </Box>
  )
}

export const query = graphql`
  fragment PlaceFragment on GCMS_Place {
    id
    name
  }
`
