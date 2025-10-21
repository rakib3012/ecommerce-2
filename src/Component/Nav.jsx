
import React from 'react'
import { Link } from 'react-router';

 const Nav = () => {
  return (
    <div className="bg-green-700 shadow-md">
        
  <ul className="flex justify-center gap-10 py-4 text-lg font-medium text-white">
    <li>
      <Link
        to="home"
        className="hover:text-orange-400 transition-colors duration-300"
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        to="shop"
        className="hover:text-orange-400 transition-colors duration-300"
      >
        Shop
      </Link>
    </li>
    <li>
      <Link
        to="cart"
        className="hover:text-orange-400 transition-colors duration-300"
      >
        Cart
      </Link>
    </li>
  </ul>
</div>

  )
}
export default Nav;