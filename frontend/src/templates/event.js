import React from "react"
import { graphql } from "gatsby"
import { Heading } from "grommet"
import GraphImg from "graphcms-image"

import Layout from "../components/layout"

export default function event({ data }) {
  const { event } = data.gcms

  return (
    <Layout>
      <GraphImg image={event.featuredImage} />
      <Heading margin="medium">{event.name}</Heading>
    </Layout>
  )
}

export const eventPageQuery = graphql`
  query($id: ID!) {
    gcms {
      event(where: { id: $id }) {
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
