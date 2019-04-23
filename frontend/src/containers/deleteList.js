import React from "react"
import { Button } from "grommet"
import { Trash } from "grommet-icons"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"

const DELETE_LIST_MUTATION = gql`
  mutation DELETE_LIST_MUTATION($listId: ID!) {
    deleteList(listId: $listId) {
      id
    }
  }
`

function update(payload, cache) {
  console.log("update")
  console.log(payload, cache)
}

export default function deleteList({ setConfirm, listId }) {
  return (
    <Mutation
      mutation={DELETE_LIST_MUTATION}
      variables={{ listId }}
      update={update}
    >
      {deleteList => (
        <Button
          label="Delete"
          icon={<Trash size="small" />}
          alignSelf="center"
          color="status-critical"
          primary
          margin="medium"
          onClick={() => {
            console.log("delete list mutation")
            setConfirm(false)
            deleteList()
          }}
        />
      )}
    </Mutation>
  )
}
