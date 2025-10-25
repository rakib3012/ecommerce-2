import React from "react";
import { useDispatch } from "react-redux";
import { ShoppingCart } from "lucide-react"; // optional icon package (lucide-react)

const Product = ({ product }) => {
  const { name, price, brand, category, image } = product;
  const dispatch = useDispatch();

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden w-full max-w-xs">
      {/* Product Image */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Optional Category Tag */}
        <span className="absolute top-3 left-3 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full shadow">
          {category}
        </span>
      </div>

      {/* Product Details */}
      <div className="p-4 text-center space-y-2">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {name}
        </h2>
        <p className="text-gray-500 text-sm">{brand}</p>

        <div className="flex justify-center items-center gap-2">
          <span className="text-emerald-600 font-bold text-lg">
            ${price.toFixed(2)}
          </span>
        </div>

        <button
          onClick={() =>
            dispatch({ type: "cart/addToCart", payload: product })
            
          }
          className="mt-3 flex items-center justify-center gap-2 w-full bg-emerald-500 text-white font-medium py-2 rounded-xl hover:bg-emerald-600 active:scale-95 transition duration-300"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
