// import { Query } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Layout from '../components/layout';
import ProductCard from '../components/ProductCard';

const GET_ALL_PRODUCTS = gql`{
  allProducts {
    id
    name
    price
    image {
      publicUrl
    }
  }
}`;

// ======== QUERY VERSION ========
// const ProductList = ({ addToCart }) => (
//   <Query query={GET_ALL_PRODUCTS}>
//     {({ loading, error, data }) => {
//       if (loading) return <div>Loading</div>;
//       if (error) return <div>{error.message}</div>;
    
//       const { allProducts: products = [] } = data;

//       return products.map((product) => (
//         <ProductCard className="my-p5" key={product.id} {...product} onClick={() => addToCart(product)} />
//       ));
//     }}
//   </Query>
// );

const Index = ({ addToCart, cartState }) => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
  
  const ProductList = () => {
    if (loading) return <div>Loading</div>;
    if (error) return <div>{error.message}</div>;

    const { allProducts: products = [] } = data;

    return products.map((product) => (
      <ProductCard className="my-p5" key={product.id} {...product} onClick={() => addToCart(product)} />
    ));
  }

  return (
    <Layout cartState={cartState}>
      <div className="flex flex-wrap justify-between">
        <ProductList/>
      </div>
    </Layout>
  );
};

export default Index;
