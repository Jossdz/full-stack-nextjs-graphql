import React from "react"
import { useRouter } from "next/router"
import { useQuery, gql } from "@apollo/client"

const GET_SINGLE_USER = gql`
  query GET_SINGLE_USER($name: String!) {
    getUser(name: $name) {
      id
      login
      avatar_url
    }
  }
`

function UsernameComp() {
  const {
    query: { username }
  } = useRouter()

  const { loading, error, data } = useQuery(GET_SINGLE_USER, {
    variables: { name: username }
  })

  console.log("User", data)

  if (error && !loading) return <h1>Not found</h1>

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <h1>{data.getUser.login}</h1>
      <img src={data.getUser.avatar_url} alt={data.getUser.login} />
    </div>
  )
}

export default UsernameComp
