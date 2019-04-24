import React from "react"
import { Heading, Text } from "grommet"
import GraphImg from "graphcms-image"

import Layout from "../components/layout"
import Place from "../components/place"
import Event from "../components/event"

export default function post({ data }) {
  return (
    <Layout>
      <Heading margin="medium" level={1}>
        {data.gcms.post.title}
      </Heading>
      <GraphImg image={data.gcms.post.image} maxWidth={900} />

      {data.gcms.post.places &&
        data.gcms.post.places.map(place => {
          return <Place name={place.name} gcmsId={place.id} key={place.id} />
        })}

      {data.gcms.post.events &&
        data.gcms.post.events.map(event => {
          return <Event name={event.name} key={event.id} />
        })}

      <Text
        size="large"
        margin="medium"
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
