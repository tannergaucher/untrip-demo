import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
      events {
        id
        gcmsId
        name
        image
      }
      lists {
        id
        title
        isPrivate
        places {
          id
          gcmsId
          name
          image
        }
      }
    }
  }
`

const User = props => (
  <Query query={CURRENT_USER_QUERY}>{payload => props.children(payload)}</Query>
)

export default User
export { CURRENT_USER_QUERY }
