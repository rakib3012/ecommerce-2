import React, { useEffect, useState } from "react";
import Product from "../Component/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen  px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mt-12 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Buy Your Best Products 🛍️
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Find quality products at the best prices
        </p>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="pb-16">
          {products.length === 0 ? (
            <div className="text-center text-gray-500 text-lg">
              No products available at the moment.
            </div>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              {products.map((item) => (
                <li key={item.id} className="w-full sm:w-64">
                  <Product product={item} />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Shop;
