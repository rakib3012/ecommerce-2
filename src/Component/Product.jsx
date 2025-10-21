import React from "react";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
  const {name, price, brand, category, image } = product;
  const dispatch = useDispatch()
  return (
    <div className="border p-4 rounded shadow text-center">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded mb-2"
      />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-500">{brand}</p>
      <p className="font-bold">${price}</p>
      <p className="text-sm text-gray-600">{category}</p>
      <button 
      onClick={()=>dispatch({type:"cart/addToCart", payload: product})}
      className="bg-emerald-400 text-white px-4 py-2 rounded-lg hover:bg-emerald-500 transition duration-300">
        Add to Cart 
      </button>
    </div>
  );
};
export default Product;
