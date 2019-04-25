import React, { useState } from "react"
import { Box, Heading, Menu, Layer, Button, Form, FormField } from "grommet"
import { Edit, FormPreviousLink } from "grommet-icons"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"

import DeleteList from "../containers/deleteList"

const TOGGLE_IS_PRIVATE_LIST_MUTATION = gql`
  mutation TOGGLE_IS_PRIVATE_LIST_MUTATION($listId: ID!) {
    toggleIsPrivateList(listId: $listId) {
      id
      title
      isPrivate
    }
  }
`

const UPDATE_LIST_TITLE_MUTATION = gql`
  mutation UPDATE_LIST_TITLE_MUTATION($listId: ID!, $newTitle: String!) {
    updateListTitle(listId: $listId, newTitle: $newTitle) {
      id
      title
    }
  }
`

export default function listEditMenu({ listId, listTitle, isPrivate }) {
  const [confirm, setConfirm] = useState(false)
  const [show, setShow] = useState(false)
  const [value, setValue] = useState("")

  return (
    <>
      <Mutation
        mutation={TOGGLE_IS_PRIVATE_LIST_MUTATION}
        variables={{ listId }}
        optimisticResponse={{
          __typename: "Mutation",
          toggleIsPrivateList: {
            __typename: "List",
            id: listId,
            title: listTitle,
            isPrivate: !isPrivate,
          },
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
                    setShow(true)
                  },
                },
                {
                  label: `Make ${isPrivate ? "Public" : "Private"}`,
                  onClick: () => {
                    toggleIsPrivate()
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
            {show && (
              <Mutation
                mutation={UPDATE_LIST_TITLE_MUTATION}
                variables={{ listId, newTitle: value }}
                optimisticResponse={{
                  __typename: "Mutation",
                  updateListTitle: {
                    __typename: "List",
                    id: listId,
                    title: value,
                  },
                }}
              >
                {updateListTitle => (
                  <Layer
                    responsive={false}
                    onClickOutside={() => setShow(false)}
                    onEsc={() => setShow(false)}
                  >
                    <Box pad="medium">
                      <Heading level={4}>Rename {listTitle}</Heading>
                      <Form
                        onSubmit={e => {
                          e.preventDefault()
                          updateListTitle()
                          setShow(false)
                        }}
                      >
                        <FormField
                          value={value}
                          onChange={e => setValue(e.target.value)}
                        />
                        <Button
                          label="Update"
                          margin={{ vertical: "medium" }}
                          type="submit"
                        />
                      </Form>
                    </Box>
                  </Layer>
                )}
              </Mutation>
            )}
          </>
        )}
      </Mutation>
    </>
  )
}
