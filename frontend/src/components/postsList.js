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
    <Box margin={{ vertical: "large" }}>
      {gcms.posts.map(post => {
        return (
          <Post
            title={post.title}
            key={post.id}
            image={post.image}
            category={post.category.category}
            tags={post.tags}
          />
        )
      })}
    </Box>
  )
}
