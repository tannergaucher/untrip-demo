import React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import { CURRENT_USER_QUERY } from "./user"
import { Button } from "grommet"

// query users places
// if user doesn't have place, display add place
// if has, display remove place
// using react-apollo bc no hooks access to update?

const ADD_EVENT_MUTATION = gql`
  mutation addEVENT($gcmsId: String!) {
    addEVENT(gcmsId: $gcmsId) {
      gcmsId
    }
  }
`

export default function toggleEvent({ gcmsId }) {
  return <Add gcmsId={gcmsId} />
}

const Add = ({ event, gcmsId }) => (
  <Mutation mutation={ADD_EVENT_MUTATION} variables={{ gcmsId }}>
    {addEvent => <Button label="Add" onClick={addEvent} />}
  </Mutation>
)
