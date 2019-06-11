import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box } from "grommet"

import Post from "../components/post"

export default function PostsList() {
  const { gcms } = useStaticQuery(graphql`
    query {
      gcms {
        posts {
          ...PostFragment
        }
      }
    }
  `)

  return (
    <Box>
      {gcms.posts.map(post => {
        return <Post post={post} key={post.id} />
      })}
    </Box>
  )
}
