import React, { useState } from "react"
import { Mutation } from "react-apollo"
import { Button, Form, FormField } from "grommet"
import { Add } from "grommet-icons"
import gql from "graphql-tag"
import { CURRENT_USER_QUERY } from "./user"

const CREATE_LIST_MUTATION = gql`
  mutation CREATE_LIST_MUTATION(
    $title: String!
    $gcmsId: String!
    $name: String!
  ) {
    createList(title: $title, gcmsId: $gcmsId, name: $name) {
      id
      title
      places {
        id
        gcmsId
        name
      }
    }
  }
`

export default function createList({ gcmsId, name }) {
  const [show, setShow] = useState(false)
  const [title, setTitle] = useState("")

  return (
    <>
      {!show && (
        <Button
          label="New"
          icon={<Add size="small" />}
          onClick={() => setShow(true)}
          alignSelf="start"
          margin={{ vertical: "medium" }}
        />
      )}

      {show && (
        <Mutation
          mutation={CREATE_LIST_MUTATION}
          variables={{ title, gcmsId, name }}
          update={(cache, payload) => {
            const data = cache.readQuery({ query: CURRENT_USER_QUERY })
            data.me.lists = [...data.me.lists, ...payload.data.createList]
            cache.writeQuery({ query: CURRENT_USER_QUERY, data })
          }}
          optimisticResponse={{
            __typename: "Mutation",
            createList: {
              __typename: "List",
              id: new Date(),
              title: title,
              places: [
                {
                  __typename: "Place",
                  id: new Date(),
                  gcmsId: gcmsId,
                  name: name,
                },
              ],
            },
          }}
        >
          {createList => (
            <Form
              onSubmit={e => {
                e.preventDefault()
                createList()
                setShow(false)
                setTitle("")
              }}
            >
              <FormField
                name="name"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              <Button
                type="submit"
                label="Save"
                margin={{ vertical: "small" }}
              />
            </Form>
          )}
        </Mutation>
      )}
    </>
  )
}
