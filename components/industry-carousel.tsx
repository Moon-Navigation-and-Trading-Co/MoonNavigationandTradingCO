"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const industrySlides = [
  [
    { img: "/i1.jpg", title: "Chemicals" },
    { img: "/i2.jpg", title: "Pharma and Healthcare" },
    { img: "/i3.jpg", title: "FMCG" },
    { img: "/i4.jpg", title: "Automotive and machinery" },
  ],
  [
    { img: "/i5.jpg", title: "Dangerous materials" },
    { img: "/i6.jpg", title: "Aerospace and Aviation" },
    { img: "/i7.jpg", title: "Construction and Building Materials" },
    { img: "/i8.jpg", title: "Energy and Utilities" },
  ],
  [
    { img: "/i9.jpg", title: "Retail" },
    { img: "/i10.jpg", title: "Fashion and Lifestyle" },
    { img: "/i11.jpg", title: "Perishables and Fresh products" },
    { img: "/i12.jpg", title: "Technology and Electronics" },
  ],
];

export default function IndustryCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  const total = industrySlides.length;

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  };
  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  };
  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 font-raleway">
      <h2 className="text-4xl font-normal text-primary text-center mb-2" style={{fontFamily: 'Raleway, sans-serif'}}>Industry sectors</h2>
      <p className="text-lg text-foreground text-center mb-12 max-w-2xl" style={{fontFamily: 'Raleway, sans-serif'}}>
        Across industries, cargo types, and destinations, Moon Navigation and Trading Co. provides tailored global and local shipping and logistics solutions that propel business growth.
      </p>
      <div className="w-full max-w-7xl flex flex-col items-center justify-center">
        <div className="relative w-full flex flex-row justify-center items-center min-h-[260px] mb-8 overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              className="absolute w-full flex flex-row justify-center gap-8"
            >
              {industrySlides[current].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center w-full max-w-xs">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[240px] h-[180px] object-cover rounded-[48px] mb-4"
                    style={{background: '#f3f3f3'}}
                  />
                  <span className="text-lg text-primary text-center tracking-widest font-raleway" style={{fontFamily: 'Raleway, sans-serif'}}>{item.title}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Dots and Arrows */}
        <div className="flex flex-row items-center justify-center gap-6 mt-2">
          <button
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-2xl text-gray-400 hover:bg-gray-100 transition mr-2"
            onClick={prev}
            aria-label="Previous"
          >
            &#8592;
          </button>
          <div className="flex flex-row gap-3">
            {industrySlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`w-6 h-2 rounded-full transition-all duration-200 ${current === idx ? 'bg-[#232B50]' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-2xl text-gray-400 hover:bg-gray-100 transition ml-2"
            onClick={next}
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
