'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

export default function ReviewCarousel() {
  const timerRef = useRef(null);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: { perView: 2, spacing: 16 },
      },
      '(max-width: 768px)': {
        slides: { perView: 1, spacing: 12 },
      },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 4000);
    timerRef.current = interval;
    return () => clearInterval(interval);
  }, [instanceRef]);

  const reviews = [
    {
      stars: 5,
      name: 'Mike Sendler',
      image: '/avatars/avatar.jpg',
      text: 'Working with Writing Fortress was a relief! Their team handled the book formatting for my employer with precision and professionalism.',
    },
    {
      stars: 5,
      name: 'Ava Patterson',
      image: '/avatars/avatar.jpg',
      text: 'Super smooth communication and beautiful formatting. Highly recommended!',
    },
    {
      stars: 5,
      name: 'Daniel Scott',
      image: '/avatars/avatar.jpg',
      text: 'Professional ghostwriting, fast delivery, and great support all the way.',
    },
    {
      stars: 5,
      name: 'Sofia Mendez',
      image: '/avatars/avatar.jpg',
      text: 'The team at Writing Fortress brought my book to life just how I imagined it. Clean design and powerful storytelling!',
    },
    {
      stars: 5,
      name: 'Liam Ross',
      image: '/avatars/avatar.jpg',
      text: 'Fantastic experience! They met my deadline, nailed the tone of voice, and were always available when needed.',
    },
    {
      stars: 5,
      name: 'Rachel Kim',
      image: '/avatars/avatar.jpg',
      text: 'Loved working with them! From outlining to editing, everything was handled with care and creativity.',
    },
  ];

  return (
    <section
      className="py-24 px-6 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/testimonial-bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        <Image
          src="/trustpilot.png"
          alt="Trustpilot"
          width={200}
          height={60}
          className="mx-auto mb-4"
        />
        <p className="text-xl md:text-2xl mb-10">
          Our clients trust us with their dreams and we turn them into a solid reality. Hear it from our clients!
        </p>

        {/* Navigation + Slider */}
        <div className="flex items-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="bg-white text-[#0a1440] p-3 rounded-md shadow-md"
            >
            <img
            src="/icons/arrow-forward-simple.svg"
            alt="Previous"
            className="h-5 w-5 rotate-180"
            />
            </button>


          {/* Slider */}
          <div ref={sliderRef} className="keen-slider flex-1">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="keen-slider__slide bg-white text-black p-6 rounded-xl shadow-lg"
              >
                <div className="flex justify-center mb-3">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">★</span>
                  ))}
                </div>
                <p className="italic text-base mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="font-medium text-[#0a1440]">
                    {review.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => instanceRef.current?.next()}
            className="bg-white text-[#0a1440] p-3 rounded-md shadow-md"
            >
        <img
        src="/icons/arrow-forward-simple.svg"
        alt="Next"
        className="h-5 w-5"
        />
        </button>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <button className="bg-white text-[#0a1440] font-bold px-6 py-3 rounded-md shadow-md text-lg">
            Write a Review and get 15% OFF on all Services
          </button>
        </div>
      </div>
    </section>
  );
}
