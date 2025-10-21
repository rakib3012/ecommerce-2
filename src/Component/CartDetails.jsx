import React, { useState } from "react";

const CartDetails = ({ product }) => {
  const { name, price, brand, category, image } = product;
  const [inputValue, setIputValue] = useState(product.quantity)
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between bg-white shadow-md rounded-xl p-4 mb-4 hover:shadow-lg transition duration-300">
       
          <img
            src={image}
            alt={name}
            className="w-40 h-40 object-cover rounded-lg mb-4 sm:mb-0"
          />
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-500">{brand}</p>
          <p className="font-bold text-gray-700">${price}</p>
          <p className="text-sm text-gray-600">{category}</p>
          <p className=" flex  gap-4">
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l-lg hover:bg-gray-300 transition">
              -
            </button>
            <input
              type="number"
              min={1}
              value={inputValue}
              onChange={()=>{}}
              className="w-16 text-center border-t border-b  outline-none"
            />
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r-lg hover:bg-gray-300 transition">
              +
            </button>
          </p>
          <p>total price : $20</p>
        <p>
            <button>Remove</button>
        </p>
    </div>
  );
};
export default CartDetails;
