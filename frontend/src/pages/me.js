import React from "react"
import { useQuery } from "react-apollo-hooks"
import { Heading, Box } from "grommet"

import Layout from "../components/layout"
import PleaseLogin from "../containers/pleaseLogin"
import Logout from "../containers/logout"
import Auth from "../components/auth"
import Loading from "../components/loading"

import { CURRENT_USER_QUERY } from "../containers/user"

export default () => {
  return (
    <Layout>
      <PleaseLogin>
        <Profile />
      </PleaseLogin>
    </Layout>
  )
}

function Profile() {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY)

  if (loading) return <Loading />
  if (error) return <p>{error.message}</p>
  if (!data.me) return <Auth />

  return (
    <Box pad="medium">
      <Heading level={2}>Hey, {data.me.name} 👋</Heading>
      <Heading level={2}>Lists</Heading>
      <Heading level={2}>Events</Heading>
      <Logout />
    </Box>
  )
}
