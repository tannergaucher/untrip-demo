import React, { useState } from "react"
import { Box, Heading, CheckBox, Menu, Layer, Button } from "grommet"
import { Edit, FormPreviousLink } from "grommet-icons"
import { useQuery } from "react-apollo-hooks"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"

import CreateList from "./createList"
import Loading from "../components/loading"
import Error from "../components/error"
import DeleteList from "./deleteList"
import { CURRENT_USER_QUERY } from "./user"

const TOGGLE_PLACE_MUTATION = gql`
  mutation TOGGLE_PLACE_MUTATION(
    $listId: ID!
    $gcmsId: String!
    $name: String!
  ) {
    togglePlace(listId: $listId, gcmsId: $gcmsId, name: $name) {
      id
      gcmsId
      name
    }
  }
`

function isPlaceInList(gcmsId, places) {
  const isPlace = places.filter(place => place.gcmsId === gcmsId)
  return isPlace.length ? true : false
}

export default function TogglePlace({ gcmsId, name }) {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY)

  if (loading) return <Loading />
  if (error) return <Error error={error} />

  return (
    <Box margin={{ horizontal: "large" }}>
      {data.me.lists.map(list => (
        <Mutation
          mutation={TOGGLE_PLACE_MUTATION}
          variables={{ listId: list.id, gcmsId, name }}
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
              payload.data.togglePlace.gcmsId = gcmsId
              payload.data.togglePlace.name = name
              myList.places.push(payload.data.togglePlace)
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
            },
          }}
        >
          {toggleList => (
            <>
              <CheckBox
                label={
                  <>
                    <Heading level={3}>{list.title}</Heading>
                    <ListMenu listId={list.id} />
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
      <CreateList gcmsId={gcmsId} name={name} />
    </Box>
  )
}

function ListMenu({ listId }) {
  const [confirm, setConfirm] = useState(false)
  return (
    <>
      <Menu
        icon={<Edit size="small" />}
        items={[
          {
            label: "Delete list",
            onClick: () => {
              setConfirm(true)
            },
          },
        ]}
      />
      {confirm && (
        <Layer
          onEsc={() => setConfirm(false)}
          onClickOutside={() => setConfirm(false)}
          responsive={false}
        >
          <Heading level={4} margin="medium">
            Are you sure you want to delete LIST NAME?
          </Heading>
          <Box direction="row" margin="medium">
            <Button
              label="Back"
              margin="medium"
              icon={<FormPreviousLink size="small" />}
              onClick={() => setConfirm(false)}
            />
            <DeleteList setConfirm={setConfirm} listId={listId} />
          </Box>
        </Layer>
      )}
    </>
  )
}
