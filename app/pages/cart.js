import Layout from '../components/layout'

export default ({ cartState, removeFromCart }) => {
  const renderCartItems = () => {
    const { cartItems } = cartState;
    if (!cartItems) return <div>Items not found</div>;
    console.log(cartItems);
    return cartItems.map((item) => (
      <div key={item._id} onClick={() => removeFromCart(item)}>
        {item.name} - ${item.price / 100} ({item.qty})
      </div>
    ));
  };

  return (
    <Layout cartState={cartState}>
      <h1>Cart</h1>
      <ul>
        {renderCartItems()}
      </ul>

      <div>
          {/*<CheckoutForm 
            totalPrice={(cartState.cartItems.reduce(function(accumulator, currentValue) { return accumulator + currentValue.price; }, 0)).toFixed(2)} 
            namesOfPurchasedServices={cartState.cartItems.map(product => product.title)}
          />*/}
      </div>
    </Layout>
  );
};
