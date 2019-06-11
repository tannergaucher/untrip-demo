import React from "react"
import { Heading, Text, Box } from "grommet"
import { graphql } from "gatsby"
import GraphImg from "graphcms-image"

import Layout from "../components/layout"
import Place from "../components/place"
import Event from "../components/event"

export default function post({ data }) {
  return (
    <Layout>
      <GraphImg image={data.gcms.post.image} maxWidth={900} />
      <Heading margin="medium" level={1}>
        {data.gcms.post.title}
      </Heading>

      {data.gcms.post.places &&
        data.gcms.post.places.map(place => {
          return <Place place={place} key={place.id} />
        })}

      {data.gcms.post.events &&
        data.gcms.post.events.map(event => {
          return <Event event={event} key={event.id} />
        })}

      <Text
        size="large"
        margin="small"
        dangerouslySetInnerHTML={{ __html: data.gcms.post.article.html }}
      />
    </Layout>
  )
}

export const postPageQuery = graphql`
  query($id: ID!) {
    gcms {
      post(where: { id: $id }) {
        id
        title
        image {
          handle
          height
          width
        }
        article {
          html
        }
        places {
          ...PlaceFragment
        }
        events {
          ...EventFragment
        }
      }
    }
  }
`
