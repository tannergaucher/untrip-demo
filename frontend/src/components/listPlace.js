import React from "react"
import { Heading, Box } from "grommet"
import Link from "./styles/Link"
import { kebabCase } from "lodash"
import GraphImg from "graphcms-image"

export default function listPlace({ place }) {
  return (
    <Box direction="row" margin={{ vertical: "medium" }} background="light-2">
      <GraphImg
        image={JSON.parse(place.image)}
        maxWidth={100}
        style={{ width: "100px" }}
      />
      <Link to={`/place/${kebabCase(place.name)}`}>
        <Heading level={2}>{place.name}</Heading>
      </Link>
    </Box>
  )
}
