import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const cart = useSelector((state) => state.cart); // cart reducer থেকে cart data আনছে
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phone: "",
    payment: "Cash on Delivery",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const totalCost = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // form input handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // order submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.address || !formData.phone) {
      alert("Please fill all the fields!");
      return;
    }

    // এখানে তুমি চাইলে API কল দিতে পারো backend এ order save করার জন্য
    console.log("Order Data:", { ...formData, cart, totalCost });

    // order confirm message
    alert("✅ Order placed successfully!");
    // dispatch(clearCart()) // চাইলে cart খালি করতে পারো

    // success page এ redirect
    navigate("/order-success");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left side - Billing Details */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Billing Details</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />

            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            >
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="Credit Card">Credit Card</option>
              <option value="bKash">bKash</option>
            </select>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Right side - Order Summary */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="border rounded-lg p-4 space-y-2 bg-gray-50">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border-b py-2 text-sm"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="flex justify-between font-bold text-lg mt-3">
              <span>Total:</span>
              <span>${totalCost.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
