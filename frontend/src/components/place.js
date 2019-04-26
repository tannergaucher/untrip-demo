import React from "react"
import { Box, Heading } from "grommet"
import { graphql } from "gatsby"
import { kebabCase } from "lodash"

import ListModal from "./listModal"
import Link from "./styles/link"

export default function place({ place }) {
  return (
    <Box pad="large" background="light-4">
      <Link to={`/place/${kebabCase(place.name)}`}>
        <Heading level={3}>{place.name}</Heading>
      </Link>
      <ListModal place={place} />
    </Box>
  )
}

export const query = graphql`
  fragment PlaceFragment on GCMS_Place {
    id
    name
    featuredImage {
      handle
      height
      width
    }
  }
`
