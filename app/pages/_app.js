import React from 'react';
import App from 'next/app';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import '../styles/bootstrap.css';
import '../styles/custom.css';

const client = new ApolloClient({
    uri: 'http://localhost:3000/admin/api',
    onError: ({ networkError, graphQLError }) => {
      console.log('graphQLError', graphQLError);
      console.log('networkError', networkError);
    },
});

export default class Application extends App {
    static async getInitialProps({ Component, ctx }) {
      let pageProps = {};
  
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }
  
      return { pageProps };
    }
  
    render() {
      const { Component, pageProps } = this.props;
  
      return (
        <ApolloProvider client={client}>      
          <Component 
            {...pageProps} 
          />
        </ApolloProvider>
      );
    }
}