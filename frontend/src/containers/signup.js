import React, { useState } from "react"
import { Form, FormField, Button } from "grommet"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"

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

export default function() {
  const [values, setValues] = useState({ name: "", email: "", password: "" })
  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <Mutation mutation={SIGN_UP_MUTATION} variables={values}>
      {(signup, { loading, error }) => (
        <Form onSubmit={signup}>
          <FormField
            name="name"
            label="Name"
            type="text"
            value={values.name}
            onChange={handleChange}
          />
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
            label="Sign up"
            disabled={loading}
            margin={{ vertical: "medium" }}
            primary
          />
        </Form>
      )}
    </Mutation>
  )
}
