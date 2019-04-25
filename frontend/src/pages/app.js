import React from "react"
import { Router } from "@reach/router"

import Layout from "../components/layout"
import PublicList from "../components/publicList"
import PublicLists from "../components/publicLists"

const DynamicList = () => (
  <Layout>
    <Router>
      <PublicList path="/app/list/:listId" />
      <PublicLists path="/app/lists" />
    </Router>
  </Layout>
)

export default DynamicList
