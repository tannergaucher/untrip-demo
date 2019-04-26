import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Heading } from "grommet"
import { kebabCase } from "lodash"

import Link from "./styles/link"

export default function allEvents() {
  const { gcms } = useStaticQuery(graphql`
    query allEventsQuery {
      gcms {
        events {
          id
          name
        }
      }
    }
  `)

  return (
    <>
      {gcms.events.map(event => (
        <Box key={event.id} background="light-2">
          <Link to={`/event/${kebabCase(event.name)}`}>
            <Heading level={3}>{event.name}</Heading>
          </Link>
        </Box>
      ))}
    </>
  )
}
