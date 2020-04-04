import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from 'next/app'

import '../styles/bootstrap.css';
import '../styles/custom.css';

const client = new ApolloClient({
    uri: 'http://localhost:3000/admin/api',
    onError: ({ networkError, graphQLError }) => {
      console.log('graphQLError', graphQLError);
      console.log('networkError', networkError);
    },
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

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);  
  return { ...appProps }
}

export default MyApp