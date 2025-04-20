'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#001f4d] text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/images/WF-hamza-logo.jpg" alt="WF Logo" className="h-8 w-auto" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 font-semibold tracking-wide">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <Link href="/services" className="hover:text-cyan-400">Services</Link>
          <Link href="/about" className="hover:text-cyan-400">About Us</Link>
          <Link href="/contact" className="hover:text-cyan-400">Contact Us</Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/consultation"
          className="ml-4 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md font-bold transition flex items-center"
        >
          Get Free Consultations →
        </Link>
      </div>
    </nav>
  );
}
