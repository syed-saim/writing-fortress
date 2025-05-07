'use client';

import { useEffect, useState } from 'react';

export default function ExitPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 4000); // Show after 4s
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-md max-w-4xl w-full relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-red-500"
          onClick={() => setShow(false)}
        >
          &times;
        </button>

        {/* Content */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Don’t Leave Yet, <span className="text-red-600 italic">Wait!</span>
        </h2>
        <h3 className="text-center text-red-700 text-2xl font-medium mb-6">
          Save Further <span className="bg-yellow-300 px-2 py-1 font-bold">70% off</span> Coupon, Use Anytime
        </h3>
        <p className="text-center text-gray-700 mb-6">
          Enter your details to have our offer saved and sent straight to your inbox
        </p>

        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input type="text" placeholder="Full Name *" className="border p-3 rounded" />
          <input type="email" placeholder="Email Address *" className="border p-3 rounded" />
          <input type="text" placeholder="Phone No. *" className="border p-3 rounded" />
        </form>
        <input
          type="text"
          placeholder="Enter a brief description about your book"
          className="border p-3 rounded w-full mb-4"
        />
        <button className="w-full bg-red-700 hover:bg-red-800 text-white py-3 px-6 font-bold rounded shadow-md border-b-4 border-yellow-400">
          Submit Your Request
        </button>
      </div>
    </div>
  );
}
