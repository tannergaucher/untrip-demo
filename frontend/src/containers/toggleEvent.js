import React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import { Button } from "grommet"

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
