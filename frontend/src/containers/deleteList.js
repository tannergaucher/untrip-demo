import React from "react"
import { Button } from "grommet"
import { Trash } from "grommet-icons"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"

import { CURRENT_USER_QUERY } from "./user"

const DELETE_LIST_MUTATION = gql`
  mutation DELETE_LIST_MUTATION($listId: ID!) {
    deleteList(listId: $listId) {
      id
    }
  }
`

export default function deleteList({ setConfirm, listId }) {
  return (
    <Mutation
      mutation={DELETE_LIST_MUTATION}
      variables={{ listId }}
      update={(cache, payload) => {
        // pull users list out from the cache
        const data = cache.readQuery({ query: CURRENT_USER_QUERY })
        // get the liad id from the payload
        const payloadId = payload.data.deleteList.id
        // filter the list of listId  from data.me.lists
        data.me.lists = data.me.lists.filter(list => list.id !== payloadId)
        // write data back to the cache
        cache.writeQuery({ query: CURRENT_USER_QUERY, data })
      }}
      optimisticResponse={{
        __typename: "Mutation",
        deleteList: {
          __typename: "List",
          id: listId,
        },
      }}
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
            setConfirm(false)
            deleteList()
          }}
        />
      )}
    </Mutation>
  )
}
