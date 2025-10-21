
import { useSelector } from 'react-redux';
import CartDetails from '../Component/CartDetails';
import { useMemo } from 'react';
 const Cart = () => {
   const cart = useSelector((storeState)=> storeState.cart);
   let totalSum = 0;
    cart.forEach(item=>totalSum+=item.price * item.quantity) 
  return (
   <div className="flex flex-col  mx-24  max-w-9xl ">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 mt-4">
    🛒 Your Shopping Cart
  </h1>
  <div className="cart-item-heading w-full flex flex-col sm:flex-row items-center justify-between">

     
          <h3>Image</h3>
          <h3>Product Title</h3>
          <h3>Brand</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>subtotal</h3>
          <h3>Action</h3>
        
    
  </div>
  <div className="item">
     {cart.map(item => (
      <CartDetails key={item.id} product={item} />
    ))}
  </div>

  <div className="total">
    <h1>total cost: {totalSum}</h1>
  </div>
  
</div>

  )
}
export default Cart;