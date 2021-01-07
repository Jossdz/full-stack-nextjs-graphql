import "../styles/globals.css"

import { ApolloProvider } from "@apollo/client"
import { useApollo } from "../client.config"

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <div style={{ margin: "20px" }}>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  )
}
