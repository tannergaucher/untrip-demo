import React from "react"
import { useQuery } from "react-apollo-hooks"
import gql from "graphql-tag"

import Post from "../components/post"

const POSTS_QUERY = gql`
  query {
    posts {
      id
      title
      image {
        handle
        height
        width
      }
    }
  }
`

export default function() {
  const { data, loading, error } = useQuery(POSTS_QUERY, {
    context: {
      uri: `https://api-apeast.graphcms.com/v1/cju7s4frq3f1a01fcdq560ewi/master`, // query the CMS instead of the backend
    },
  })

  if (loading) return <p>Loading</p>
  if (error) return <p>{error.message}</p>

  return (
    data.posts &&
    data.posts.map(post => (
      <Post
        title={post.title}
        description={`I'm from an apollo query`}
        id={post.id}
        image={post.image}
        key={post.id}
      />
    ))
  )
}
