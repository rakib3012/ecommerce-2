import React from "react";
import {
  Star,
  ShoppingBag,
  Heart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";

const ProductDetails = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((idx) => (
              <div
                key={idx}
                className="aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:ring-2 hover:ring-emerald-500"
              >
                <img
                  src={`https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?${idx}`}
                  alt={`Thumbnail ${idx}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Product Info */}
        <div className="space-y-6">
          {/* Brand & Title */}
          <div>
            <span className="text-emerald-600 font-medium">Nike</span>
            <h1 className="text-3xl font-bold text-gray-900 mt-1">
              Air Jordan XXXVII Low PF
            </h1>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, idx) => (
                <Star
                  key={idx}
                  size={20}
                  className={
                    idx < 4
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">4.2 (128 Reviews)</span>
          </div>

          {/* Price */}
          <div className="border-t border-b py-4">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-gray-900">$199.99</span>
              <span className="text-lg text-gray-500 line-through">
                $249.99
              </span>
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                20% OFF
              </span>
            </div>
            <p className="text-sm text-emerald-600 mt-2">
              Inclusive of all taxes
            </p>
          </div>

          {/* Size Selection */}
          <div>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-900">Select Size</h3>
              <button className="text-sm text-emerald-600 hover:underline">
                Size Guide
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-3">
              {["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"].map(
                (size) => (
                  <button
                    key={size}
                    className="py-3 border-2 rounded-lg hover:border-emerald-500 focus:border-emerald-500 focus:outline-none transition-colors"
                  >
                    {size}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 bg-emerald-500 text-white py-3 px-6 rounded-xl hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2">
              <ShoppingBag size={20} />
              Add to Cart
            </button>
            <button className="p-3 border-2 border-gray-200 rounded-xl hover:border-emerald-500 transition-colors">
              <Heart size={20} />
            </button>
            <button className="p-3 border-2 border-gray-200 rounded-xl hover:border-emerald-500 transition-colors">
              <Share2 size={20} />
            </button>
          </div>

          {/* Product Benefits */}
          <div className="grid grid-cols-3 gap-4 border-t pt-6">
            <div className="text-center space-y-2">
              <Truck className="mx-auto text-emerald-500" size={24} />
              <p className="text-sm text-gray-600">Free Delivery</p>
            </div>
            <div className="text-center space-y-2">
              <Shield className="mx-auto text-emerald-500" size={24} />
              <p className="text-sm text-gray-600">Secure Payment</p>
            </div>
            <div className="text-center space-y-2">
              <RotateCcw className="mx-auto text-emerald-500" size={24} />
              <p className="text-sm text-gray-600">Easy Returns</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
        <div className="prose max-w-none">
          <p className="text-gray-600 leading-relaxed">
            The Air Jordan XXXVII Low PF provides the responsiveness and support
            that helped revolutionize the game combined with the comfort you
            need to play at full speed. Formula 23 foam paired with a
            full-length Zoom Air unit in the forefoot provides energy return and
            comfort, while the upper delivers containment without sacrificing
            breathability.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>• Lightweight, breathable design</li>
            <li>• Responsive Formula 23 foam</li>
            <li>• Full-length Zoom Air unit</li>
            <li>• Durable rubber outsole</li>
            <li>• Style: DC7770-100</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
