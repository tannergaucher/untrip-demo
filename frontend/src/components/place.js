import React from "react"
import { Box, Heading } from "grommet"
import { graphql } from "gatsby"
import ListModal from "./listModal"

export default function place({ name, gcmsId, image }) {
  return (
    <Box pad="large" background="light-4">
      <Heading level={4} margin="none" color="dark-3">
        Place
      </Heading>
      <Heading level={3}>{name}</Heading>
      <ListModal gcmsId={gcmsId} name={name} image={image} />
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
