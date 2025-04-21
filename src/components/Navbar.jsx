'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="bg-[#001f4d] text-white py-4 px-6 shadow-md relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/images/WF-hamza-logo.jpg" alt="WF Logo" className="h-8 w-auto" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 font-semibold tracking-wide items-center">
          <Link href="/" className="hover:text-cyan-400">Home</Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              className="hover:text-cyan-400 flex items-center space-x-1"
            >
              <span>Services</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-white group-hover:text-cyan-400 transition"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </button>

            {isServicesOpen && (
              <div
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="absolute top-full left-0 bg-white text-black w-[600px] p-4 rounded-md shadow-lg grid grid-cols-3 gap-4"
              >
                {["Article Writing", "Audio Book", "Author Website", "Blog Writing", "Book Cover",
                  "Children Book", "E-book Writing", "Editing", "Formating", "Ghostwriting",
                  "Proofreading", "Publishing", "Video Book Trailer", "Web Design SEO", "Website Content"
                ].map((service, idx) => (
                  <Link
                    key={idx}
                    href={`/services/${service.toLowerCase().replace(/ /g, '-')}`}
                    className="hover:text-cyan-500 flex items-center space-x-2"
                  >
                    <span>•</span>
                    <span>{service}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/#contact" className="hover:text-cyan-400">Contact Us</Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/#contact"
          className="ml-4 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md font-bold transition flex items-center"
        >
          Get Free Consultations →
        </Link>
      </div>
    </nav>
  );
}