'use client';

import Image from 'next/image';

export default function ContactSection() {
  return (
    <section
    id='contact'
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: "url('/images/contact.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Contact Info */}
        <div className="text-white space-y-6">
          <h2 className="text-lg font-semibold border-b border-gray-400 pb-2">Get In Touch</h2>
          <p>📍 123/B, Route 66, Downtown,<br />Washington, DC 20004, US</p>
          <p>📞 +1 234 567 890</p>
          <p>📧 info@writingfortress.com</p>

          <div>
            <h3 className="text-lg font-semibold mt-6 mb-2 border-b border-gray-400 pb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#">
                <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} className="invert" />
              </a>
              <a href="#">
                <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} className="invert" />
              </a>
              <a href="#">
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} className="invert" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form className="bg-[#1a1a1a] p-8 rounded-md space-y-4 shadow-lg">
          <h2 className="text-white text-xl font-bold">Contact us for information</h2>
          <p className="text-gray-300">Connect with your expert team for your inquiries.</p>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded bg-white text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-white text-black"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded bg-white text-black"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 rounded bg-white text-black"
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
}