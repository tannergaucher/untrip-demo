import React from "react"
import { Heading, CheckBox } from "grommet"
import { useQuery } from "react-apollo-hooks"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"

import Loading from "../components/loading"
import Error from "../components/error"
import { CURRENT_USER_QUERY } from "./user"
import ListEditMenu from "../components/ListEditMenu"

const TOGGLE_PLACE_MUTATION = gql`
  mutation TOGGLE_PLACE_MUTATION(
    $listId: ID!
    $gcmsId: String!
    $name: String!
    $image: String
  ) {
    togglePlace(listId: $listId, gcmsId: $gcmsId, name: $name, image: $image) {
      id
      gcmsId
      name
      image
    }
  }
`

function isPlaceInList(gcmsId, places) {
  const isPlace = places.filter(place => place.gcmsId === gcmsId)
  return isPlace.length ? true : false
}

export default function TogglePlace({ gcmsId, name, image }) {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY)
  const imageString = JSON.stringify(image)

  if (loading) return <Loading />
  if (error) return <Error error={error} />

  return (
    <>
      {data.me.lists.length === 0 && (
        <Heading level={3}>You don't have any lists yet. Make one </Heading>
      )}
      {data.me.lists.map(list => (
        <Mutation
          mutation={TOGGLE_PLACE_MUTATION}
          variables={{ listId: list.id, gcmsId, name, image: imageString }}
          key={list.id}
          update={(cache, payload) => {
            const data = cache.readQuery({ query: CURRENT_USER_QUERY })
            const [myList] = data.me.lists.filter(
              cacheList => cacheList.id === list.id
            )
            const [existingPlace] = myList.places.filter(
              place => place.gcmsId === gcmsId
            )
            if (existingPlace) {
              myList.places = myList.places.filter(
                place => !place.gcmsId === gcmsId
              )
            } else {
              const { togglePlace } = payload.data
              togglePlace.gcmsId = gcmsId
              togglePlace.name = name
              togglePlace.image = imageString
              myList.places.push(togglePlace)
            }
            cache.writeQuery({ query: CURRENT_USER_QUERY, data })
          }}
          optimisticResponse={{
            __typename: "Mutation",
            togglePlace: {
              __typename: "Place",
              listId: list.id,
              id: new Date(),
              gcmsId,
              name,
              image: imageString,
            },
          }}
        >
          {toggleList => (
            <>
              <CheckBox
                label={
                  <>
                    <Heading level={3}>{list.title}</Heading>
                    <ListEditMenu listId={list.id} listTitle={list.title} />
                  </>
                }
                checked={isPlaceInList(gcmsId, list.places)}
                onChange={e => {
                  e.preventDefault()
                  toggleList()
                }}
              />
            </>
          )}
        </Mutation>
      ))}
    </>
  )
}
