import React from "react"
import { graphql } from "gatsby"
import { Heading } from "grommet"

import Layout from "../components/layout"
import Post from "../components/post"

export default function tag({ data }) {
  const { tag, posts } = data.gcms

  return (
    <Layout>
      <Heading margin="medium" level={3}>
        #{tag.tag}
      </Heading>
      {posts.map(post => {
        return (
          <Post
            title={post.title}
            image={post.image}
            category={post.category.category}
            key={post.id}
          />
        )
      })}
    </Layout>
  )
}

export const tagPageQuery = graphql`
  query($id: ID!) {
    gcms {
      tag: tag(where: { id: $id }) {
        id
        tag
      }
      posts: posts(where: { category: { tags_some: { id: $id } } }) {
        ...PostFragment
      }
    }
  }
`
