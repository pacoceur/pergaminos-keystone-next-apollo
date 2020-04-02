import _ from 'lodash';
import Link from 'next/link';

const MenuItem = (item) => (
  <Link href={item.link}>
    <a className="mr-1 uppercase color-black-900 color-primary:hover fw-bold fs-sm">
      {item.icon && <span className={`mdi mdi-${item.icon} fs-icon-1p5`}/>}
      {item.name}
    </a>
  </Link>
);

export default ({ cartState }) => {
  const totalCartItems = () => {
    const { cartItems = [] } = cartState;
    return _.sumBy(cartItems, 'qty');
  }

  return (
    <nav className="w-full bgc-white bwb-1 bc-grey-300">
      <div className="w-full lg:w-container h-full py-1p5 mx-auto flex items-center justify-between">
        <div className="flex justify-start flex-1">
          <MenuItem link="/" name="Inicio" />
        </div>
        <h1 className="uppercase ta-center fw-black fs-xl">Omlsey</h1>
        <div className="flex justify-end flex-1">
          <MenuItem link="/cart" icon="cart-outline" name={`(${totalCartItems()})`} />
        </div>
      </div>
    </nav>
  );
};
