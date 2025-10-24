import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Trash2 } from "lucide-react"; // modern delete icon

const CartDetails = ({ product }) => {
  const { id, name, price, brand, category, image, quantity } = product;
  const [inputValue, setInputValue] = useState(quantity);
  const dispatch = useDispatch();

  // subtotal calculation
  const subTotal = (price * inputValue).toFixed(2);

  // handle quantity update
  const updateQuantity = (newQuantity) => {
    if (newQuantity < 1) return;
    setInputValue(newQuantity);
    dispatch({
      type: "cart/modifyQuantityAnItem",
      payload: { id, quantity: newQuantity },
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 justify-center items-center gap-4 px-8 py-4 hover:bg-gray-50 transition">
      {/* Image */}
      <div className="flex justify-center">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 object-cover rounded-lg shadow-sm"
        />
      </div>

      {/* Product Info */}
      <div className=" flex flex-col justify-center items-center ">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {name}
        </h2>
        <p className="text-sm text-gray-500">{brand}</p>
        <p className="text-xs text-gray-400">{category}</p>
      </div>

      {/* Price */}
      <div className="text-center font-semibold text-gray-700">
        ${price.toFixed(2)}
      </div>

      {/* Quantity Controls */}
      <div className="flex justify-center items-center">
        <button
          onClick={() => updateQuantity(inputValue - 1)}
          className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l-md hover:bg-gray-300 transition"
        >
          -
        </button>
        <input
          type="number"
          min={1}
          value={inputValue}
          onChange={(e) =>
            updateQuantity(Math.max(1, Number(e.target.value)))
          }
          className="w-14 text-center border-t border-b border-gray-300 outline-none text-gray-700"
        />
        <button
          onClick={() => updateQuantity(inputValue + 1)}
          className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r-md hover:bg-gray-300 transition"
        >
          +
        </button>
      </div>

      {/* Subtotal */}
      <div className="text-center font-semibold text-emerald-600">
        ${subTotal}
      </div>

      {/* Remove Button */}
      <div className="flex justify-center">
        <button
          onClick={() =>
            dispatch({ type: "cart/removeProduct", payload: id })
          }
          className="text-red-500 hover:text-red-600 flex items-center gap-1 transition"
        >
          <Trash2 size={18} /> <span className="hidden sm:inline">Remove</span>
        </button>
      </div>
    </div>
  );
};

export default CartDetails;
