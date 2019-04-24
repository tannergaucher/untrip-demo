import React from "react"
import { Router } from "@reach/router"

import Layout from "../components/layout"
import List from "../components/list"

const DynamicList = () => (
  <Layout>
    <Router>
      <List path="/app/list/:listId" />
    </Router>
  </Layout>
)

export default DynamicList
