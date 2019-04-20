import React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import { CURRENT_USER_QUERY } from "../containers/user"
import { Button } from "grommet"

// query users places
// if user doesn't have place, display add place
// if has, display remove place
// using react-apollo bc no hooks access to update?

const ADD_PLACE_MUTATION = gql`
  mutation addPlace($gcmsId: String!) {
    addPlace(gcmsId: $gcmsId) {
      gcmsId
    }
  }
`

export default function togglePlace({ gcmsId }) {
  return <Add gcmsId={gcmsId} />
}

const Add = ({ name, gcmsId }) => (
  <Mutation mutation={ADD_PLACE_MUTATION} variables={{ gcmsId }}>
    {addPlace => <Button label="Add" onClick={addPlace} />}
  </Mutation>
)
