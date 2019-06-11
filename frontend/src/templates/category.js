import React from "react"
import { graphql } from "gatsby"
import { Heading } from "grommet"

import Layout from "../components/layout"

export default function category({ data }) {
  const { category } = data.gcms

  return (
    <Layout>
      <Heading margin="medium">{category.category}</Heading>
      {/* category image */}
    </Layout>
  )
}

export const categoryPageQuery = graphql`
  query($id: ID!) {
    gcms {
      category(where: { id: $id }) {
        id
        category
      }
    }
  }
`
