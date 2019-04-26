import React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import { Button } from "grommet"
import { useQuery } from "react-apollo-hooks"

import Error from "../components/error"
import { CURRENT_USER_QUERY } from "./user"

const TOGGLE_EVENT_MUTATION = gql`
  mutation TOGGLE_EVENT_MUTATION(
    $gcmsId: String!
    $name: String
    $image: String
  ) {
    toggleEvent(gcmsId: $gcmsId, name: $name, image: $image) {
      id
      gcmsId
      name
      image
    }
  }
`

// Rename this
function isGoing(gcmsId, events) {
  const isGoing = events.filter(event => event.gcmsId === gcmsId)
  return isGoing.length ? "Going" : "Add to Events"
}

export default function toggleEvent({ gcmsId, name, image }) {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY)
  if (loading)
    return (
      <Button
        label="Add to Events"
        disabled
        color="light-3"
        alignSelf="start"
      />
    )
  if (error) return <Error error={error} />

  const imageString = JSON.stringify(image)

  return (
    <Mutation
      mutation={TOGGLE_EVENT_MUTATION}
      variables={{ gcmsId, name, image: imageString }}
      update={(cache, payload) => {
        const data = cache.readQuery({ query: CURRENT_USER_QUERY })
        const [existingEvent] = data.me.events.filter(
          event => event.gcmsId === gcmsId
        )
        if (existingEvent) {
          data.me.events = data.me.events.filter(
            event => event.gcmsId !== gcmsId
          )
        } else {
          data.me.events.push(payload.data.toggleEvent)
        }
        cache.writeQuery({ query: CURRENT_USER_QUERY, data })
      }}
      optimisticResponse={{
        __typename: "Mutation",
        toggleEvent: {
          __typename: "Event",
          id: new Date(),
          gcmsId: gcmsId,
          name: name,
          image: imageString,
        },
      }}
    >
      {toggleEvent => (
        <Button
          label="tets"
          label={isGoing(gcmsId, data.me.events)}
          onClick={toggleEvent}
          alignSelf="start"
          color="light-3"
        />
      )}
    </Mutation>
  )
}
