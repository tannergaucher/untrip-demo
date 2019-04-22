import React, { useState } from "react"
import { Mutation } from "react-apollo"
import { Button, Form, FormField } from "grommet"
import { Add } from "grommet-icons"
import gql from "graphql-tag"

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
          plain
        />
      )}

      {show && (
        <Mutation mutation={CREATE_LIST_MUTATION} variables={{ title, gcmsId }}>
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
