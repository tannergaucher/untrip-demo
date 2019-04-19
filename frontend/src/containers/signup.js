import React, { useState } from "react"
import { Form, FormField, Button, Box } from "grommet"
import { Mutation } from "react-apollo"
import { useApolloClient } from "react-apollo-hooks"
import gql from "graphql-tag"
import { navigate } from "@reach/router"

import Error from "../components/error"

const SIGN_UP_MUTATION = gql`
  mutation SIGN_UP_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    signup(name: $name, email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`

export default function Signup() {
  const client = useApolloClient()
  const [values, setValues] = useState({ name: "", email: "", password: "" })

  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <Box margin={{ vertical: "large" }}>
      <Mutation mutation={SIGN_UP_MUTATION} variables={values}>
        {(signup, { loading, error }) => (
          <Form
            onSubmit={async e => {
              const res = await signup()
              client.resetStore()
              navigate(`/`)
            }}
          >
            <Error error={error} />
            <FormField
              name="email"
              label="Email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
            <FormField
              name="name"
              label="Name"
              type="text"
              value={values.name}
              onChange={handleChange}
            />
            <FormField
              name="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              label="Sign up"
              disabled={loading}
              margin={{ vertical: "large" }}
              primary
              fill
            />
          </Form>
        )}
      </Mutation>
    </Box>
  )
}
