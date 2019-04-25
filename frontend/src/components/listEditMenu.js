import React, { useState } from "react"
import { Box, Heading, Menu, Layer, Button } from "grommet"
import { Edit, FormPreviousLink } from "grommet-icons"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"

import DeleteList from "../containers/deleteList"
import { CURRENT_USER_QUERY } from "../containers/user"

const TOGGLE_IS_PRIVATE_LIST_MUTATION = gql`
  mutation TOGGLE_IS_PRIVATE_LIST_MUTATION($listId: ID!) {
    toggleIsPrivateList(listId: $listId) {
      id
      title
      isPrivate
    }
  }
`

export default function ListEditMenu({ listId, listTitle, isPrivate }) {
  const [confirm, setConfirm] = useState(false)

  return (
    <>
      <Mutation
        mutation={TOGGLE_IS_PRIVATE_LIST_MUTATION}
        variables={{ listId }}
        update={(cache, payload) => {
          console.log("update")
        }}
      >
        {toggleIsPrivate => (
          <>
            <Menu
              icon={<Edit size="small" />}
              items={[
                {
                  label: `Delete ${listTitle}`,
                  onClick: () => {
                    setConfirm(true)
                  },
                },
                {
                  label: "Rename",
                  onClick: () => {
                    console.log("updateList mutation")
                  },
                },
                {
                  label: `Set to ${isPrivate ? "Public" : "Private"}`,
                  onClick: () => {
                    toggleIsPrivate()
                    console.log("setPrivate mutation")
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
        )}
      </Mutation>
    </>
  )
}
