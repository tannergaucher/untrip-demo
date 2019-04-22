import React from "react"
import { Box, Heading, CheckBox } from "grommet"
import { useQuery } from "react-apollo-hooks"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"

import CreateList from "../containers/createList"
import Loading from "../components/loading"
import Error from "../components/error"
import { CURRENT_USER_QUERY } from "../containers/user"

const TOGGLE_PLACE_MUTATION = gql`
  mutation TOGGLE_PLACE_MUTATION($listId: ID!, $gcmsId: String!) {
    togglePlace(listId: $listId, gcmsId: $gcmsId) {
      id
    }
  }
`

function isPlaceInList(gcmsId, places) {
  const isPlace = places.filter(place => place.gcmsId === gcmsId)
  return isPlace.length ? true : false
}

export default function myLists({ gcmsId }) {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY)

  if (loading) return <Loading />
  if (error) return <Error error={error} />

  return (
    <Box pad="large">
      {data.me.lists.map(list => (
        <Mutation
          mutation={TOGGLE_PLACE_MUTATION}
          variables={{ listId: list.id, gcmsId }}
          key={list.id}
          update={(cache, payload) => {
            // manually update cache to match server
            const data = cache.readQuery({ query: CURRENT_USER_QUERY })

            // pull the list out of currentUserQuery
            const [myList] = data.me.lists.filter(
              cacheList => cacheList.id === list.id
            )

            //  pull the place from the list
            const [existingPlace] = myList.places.filter(
              place => place.gcmsId === gcmsId
            )

            if (existingPlace) {
              // remove place
              myList.places = myList.places.filter(
                place => !place.gcmsId === gcmsId
              )
            } else {
              // add place
              // assign gcmsId property to place payload
              payload.data.togglePlace.gcmsId = gcmsId
              myList.places.push(payload.data.togglePlace)
            }

            cache.writeQuery({ query: CURRENT_USER_QUERY, data })
          }}
          optimisticResponse={{
            __typename: "Mutation",
            togglePlace: {
              __typename: "Place",
              listId: list.id,
              gcmsId: gcmsId,
              id: new Date(),
            },
          }}
        >
          {toggleList => (
            <CheckBox
              label={<Heading level={3}>{list.title}</Heading>}
              checked={isPlaceInList(gcmsId, list.places)}
              onChange={e => {
                e.preventDefault()
                toggleList()
              }}
            />
          )}
        </Mutation>
      ))}
      <CreateList gcmsId={gcmsId} />
    </Box>
  )
}
