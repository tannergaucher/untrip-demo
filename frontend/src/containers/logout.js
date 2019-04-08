import React from "react"
import { useMutation } from "react-apollo-hooks"
import gql from "graphql-tag"
import { Button } from "grommet"

const LOGOUT_MUTATION = gql`
  mutation LOGOUT_MUTATION {
    logout {
      successmessage
    }
  }
`

export default function() {
  const logout = useMutation(LOGOUT_MUTATION)

  return <Button onClick={logout} label="Log Out" />
}
