import React, { useState } from "react"
import { Form, FormField, Button } from "grommet"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"

const LOG_IN_MUTATION = gql`
  mutation LOG_IN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`

export default function() {
  const [values, setValues] = useState({ email: "", password: "" })

  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <Mutation mutation={LOG_IN_MUTATION} variables={values}>
      {(login, { loading, error }) => (
        <Form onSubmit={login}>
          <FormField
            name="email"
            label="Email"
            type="email"
            value={values.email}
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
            label="Log In"
            disabled={loading}
            margin={{ vertical: "medium" }}
            primary
          />
        </Form>
      )}
    </Mutation>
  )
}
