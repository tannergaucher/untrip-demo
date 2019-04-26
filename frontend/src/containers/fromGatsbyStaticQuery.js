/*
 * Example of a component that queries the CMS at build time using gatsby's static query.
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Post from "../components/post"

export default function() {
  const { gcms } = useStaticQuery(
    graphql`
      query {
        gcms {
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
      }
    `
  )

  return gcms.posts.map(post => (
    <Post
      title={post.title}
      description="I'm from Gatsby's useStaticQuery"
      id={post.id}
      key={post.id}
      image={post.image}
    />
  ))
}
