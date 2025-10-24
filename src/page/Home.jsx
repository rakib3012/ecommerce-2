import React from "react";
import { ShoppingBag, Truck, ShieldCheck, Star, Link } from "lucide-react"; // optional icon package
import { NavLink } from "react-router";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 🛍️ Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-16 bg-gradient-to-r from-cyan-500 to-green-400 text-white">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Welcome to <span className="text-yellow-300">Our Shop!</span>
          </h1>
          <p className="text-lg text-emerald-50">
            Discover top-quality products at unbeatable prices. Shop smart, live better!
          </p>
           <NavLink to={"/shop"}><button  className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 hover:text-emerald-800 transition duration-300">
        Shop Now
          </button></NavLink>
        </div>

        {/* <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://cdn.dribbble.com/users/1787323/screenshots/11183547/media/9d63c3cb43a6ee2268e63c36fbb1c93b.png"
            alt="Shopping illustration"
            className="w-80 md:w-96 drop-shadow-lg animate-float"
          />
        </div> */}
      </section>

      {/* ⚡ Features Section */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Shop With Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition duration-300">
            <Truck size={40} className="mx-auto text-emerald-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">Get your products delivered in record time!</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition duration-300">
            <ShieldCheck size={40} className="mx-auto text-emerald-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Secure Payments</h3>
            <p className="text-gray-600 text-sm">Your transactions are safe and encrypted.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition duration-300">
            <Star size={40} className="mx-auto text-emerald-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Top Rated</h3>
            <p className="text-gray-600 text-sm">Thousands of happy customers love us!</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition duration-300">
            <ShoppingBag size={40} className="mx-auto text-emerald-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Wide Selection</h3>
            <p className="text-gray-600 text-sm">Explore a huge collection of top brands.</p>
          </div>
        </div>
      </section>

      {/* 🌿 Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Rakib's Shop. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
