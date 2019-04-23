import React, { useState } from "react"
import { Mutation } from "react-apollo"
import { Button, Form, FormField } from "grommet"
import { Add } from "grommet-icons"
import gql from "graphql-tag"
import { CURRENT_USER_QUERY } from "./user"

const CREATE_LIST_MUTATION = gql`
  mutation CREATE_LIST_MUTATION($title: String!, $gcmsId: String!) {
    createList(title: $title, gcmsId: $gcmsId) {
      id
    }
  }
`

export default function createList({ gcmsId }) {
  const [show, setShow] = useState(false)
  const [title, setTitle] = useState("")

  return (
    <>
      {!show && (
        <Button
          label="New List"
          icon={<Add size="small" />}
          onClick={() => setShow(true)}
          alignSelf="start"
          margin={{ vertical: "medium" }}
        />
      )}

      {show && (
        <Mutation
          mutation={CREATE_LIST_MUTATION}
          variables={{ title, gcmsId }}
          update={(cache, payload) => {
            const data = cache.readQuery({ query: CURRENT_USER_QUERY })
            console.log(data)
          }}
        >
          {createList => (
            <Form
              onSubmit={e => {
                e.preventDefault()
                createList()
                setShow(false)
              }}
            >
              <FormField
                name="name"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              <Button type="submit" label="Save LIST" />
            </Form>
          )}
        </Mutation>
      )}
    </>
  )
}
