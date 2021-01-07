import { gql } from "apollo-server-micro"

export const typeDefs = gql`
  type User {
    id: ID
    login: String
    avatar_url: String
  }

  type Book {
    title: String
    description: String
  }

  type Query {
    getUsers: [User]
    getBooks: [Book]
    getUser(name: String!): User!
  }
`
