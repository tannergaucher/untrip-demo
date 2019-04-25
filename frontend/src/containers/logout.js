import React from "react"
import { useMutation, useApolloClient } from "react-apollo-hooks"
import gql from "graphql-tag"
import { Button } from "grommet"

const LOGOUT_MUTATION = gql`
  mutation LOGOUT_MUTATION {
    logout {
      message
    }
  }
`

export default function() {
  const logout = useMutation(LOGOUT_MUTATION)
  const client = useApolloClient()

  return (
    <Button
      onClick={() => {
        logout().then(() => {
          client.resetStore()
        })
      }}
      label="Log Out"
      margin={{ vertical: "medium" }}
      plain
    />
  )
}
