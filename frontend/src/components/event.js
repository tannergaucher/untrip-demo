import React from "react"
import { Box, Heading } from "grommet"
import { graphql } from "gatsby"
import { kebabCase } from "lodash"

import Link from "./styles/link"
import ToggleEvent from "../containers/toggleEvent"

export default function event({ event }) {
  return (
    <Box pad="medium" background="light-4">
      <Heading level={4} margin="none" color="dark-3">
        Event
      </Heading>
      <Link to={`/event/${kebabCase(event.name)}`}>
        <Heading level={3}>{event.name}</Heading>
      </Link>
      <ToggleEvent
        gcmsId={event.id}
        name={event.name}
        image={event.featuredImage}
      />
    </Box>
  )
}

export const query = graphql`
  fragment EventFragment on GCMS_Event {
    id
    name
    featuredImage {
      handle
      height
      width
    }
  }
`
