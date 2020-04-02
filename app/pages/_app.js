import React from 'react';
import App from 'next/app';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
// import { StripeProvider } from "react-stripe-elements-universal";

const client = new ApolloClient({
  uri: 'http://localhost:3000/admin/api',
  onError: ({ networkError, graphQLError }) => {
    console.log('graphQLError', graphQLError);
    console.log('networkError', networkError);
  },
});

class Application extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  state = {
    cartItems: []
  };

  componentDidMount() {
    const cart = this.loadFromLocalStorage("cart");
    if (cart) {
      const { services: cartItems } = cart;
      this.setState({ cartItems });
    }
  }

  addToCart = (product) => {
    this.setState(
      ({ cartItems }) => {
        if (!_.find(cartItems, (item) => item.id === product.id)) cartItems.push(product);
        cartItems = _.map(cartItems, (item) => {
          if (item.id === product.id) item.qty ? item.qty += 1 : item.qty = 1;
          return item;
        });
        return { cartItems };
      },
      () => this.saveCart()
    );
  };

  removeFromCart = (product) => {
    this.setState(
      ({ cartItems }) => {
        cartItems = _.map(cartItems, (item) => {
          if (item.id === product.id) item.qty -= 1;
          return item;
        });
        cartItems = _.filter(cartItems, (item) => item.qty >= 1);
        return { cartItems };
      },
      () => this.saveCart()
    );
  };

  saveCart = (details) => {
    this.saveToLocalStorage("cart", {
      services: [...this.state.cartItems]
    });
  };

  updateLocalStorage = () => {
    /**
     * @todo add method that refreshes cart prices every 24 hours in case a price has changed and is cached in localStorage
     */
  }

  loadFromLocalStorage = (key) => {
    try {
      return JSON.parse(window.localStorage.getItem(key));
    } catch ({ message }) {
      throw new Error(message);
    }
  };

  saveToLocalStorage = (key, data) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(data));
    } catch ({ message }) {
      throw new Error(message);
    }
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ApolloProvider client={client}>      
        <Component 
          cartState={this.state}
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
          {...pageProps} 
        />
      </ApolloProvider>
    );
  }
}
  
export default Application;