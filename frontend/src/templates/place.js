import React from "react"
import { graphql } from "gatsby"
import { Heading } from "grommet"
import GraphImg from "graphcms-image"

import Layout from "../components/layout"

export default function place({ data }) {
  const { place } = data.gcms

  return (
    <Layout>
      <GraphImg image={place.featuredImage} />
      <Heading level={1} margin="medium">
        {place.name}
      </Heading>
    </Layout>
  )
}

export const placePageQuery = graphql`
  query($id: ID!) {
    gcms {
      place(where: { id: $id }) {
        id
        name
        featuredImage {
          handle
          height
          width
        }
      }
    }
  }
`
