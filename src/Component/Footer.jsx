import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300  ">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">RakibShop</h2>
          <p className="text-sm leading-6">
            Your trusted online store for authentic products. 
            Shop smarter, live better with RakibShop.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/home" className="hover:text-emerald-400">Home</Link></li>
            <li><Link to="/shop" className="hover:text-emerald-400">Shop</Link></li>
            <li><Link to="/cart" className="hover:text-emerald-400">Cart</Link></li>
           
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="#" className="hover:text-emerald-400">About Us</Link></li>
            <li><Link to="#" className="hover:text-emerald-400">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-emerald-400">Terms & Conditions</Link></li>
            <li><Link to="#" className="hover:text-emerald-400">Contact</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} RakibShop. All rights reserved.
      </div>
    </footer>
  );
}
