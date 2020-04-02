import Navbar from '../components/Navbar';

export default ({ children, cartState }) => (
  <div>
    <Navbar cartState={cartState}/>
    <div className="w-full lg:w-container lg:mx-auto py-1 lg:py-2">
      {children}
    </div>
  </div>
);
