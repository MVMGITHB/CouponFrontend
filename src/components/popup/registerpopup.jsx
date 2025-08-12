"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function CouponsCulturePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 7000); // Show after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered: ${email}`);
    setEmail("");
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6 relative text-center border border-gray-200">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>

            {/* Logo */}
            <div className="flex justify-center mb-2">
              <Image
                src="/images/logo3.png" // Replace with actual path
                alt="Coupons Culture Logo"
                width={150}
                height={60}
              />
            </div>

            {/* Heading */}
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              REGISTER WITH US
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-2">
              Stay Updated with Latest News, Articles, Blogs, Promotional
              Offers, Product Offerings & More.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-4">
              <input
                type="email"
                placeholder="Your E-mail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="w-full mt-3 bg-black text-white py-2 rounded-md hover:bg-gray-800"
              >
                REGISTER NOW
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
