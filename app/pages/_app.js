import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import fetch from 'node-fetch';

import '../styles/bootstrap.css';
import '../styles/custom.css';

const client = new ApolloClient({
    uri: 'http://localhost:3000/admin/api',
    onError: ({ networkError, graphQLError }) => {
      console.log('graphQLError', graphQLError);
      console.log('networkError', networkError);
    },
    fetch: fetch
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>      
      <Component 
        {...pageProps} 
      />
    </ApolloProvider>
  )
}

export default MyApp