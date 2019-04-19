import React from "react"
import { useQuery } from "react-apollo-hooks"
import { Heading } from "grommet"

import Layout from "../components/layout"
import PleaseLogin from "../containers/pleaseLogin"
import Logout from "../containers/logout"
import Auth from "../components/auth"
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

  if (loading) return <p>loading..</p>
  if (error) return <p>{error.message}</p>
  if (!data.me) return <Auth />

  return (
    <>
      <Heading level={3}>Hey, {data.me.name} 👋</Heading>
      <Logout />
    </>
  )
}
