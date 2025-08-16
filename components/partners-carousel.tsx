"use client";

import React from "react";
import Image from "next/image";
import SimpleCarousel from "./simple-carousel";

// In a real-world scenario, replace these with actual partner logo URLs
const partnerLogos = [
  {
    img: "/logos/1.png",
    title: "Partner 1",
  },
  {
    img: "/logos/2.png",
    title: "Partner 2",
  },
  {
    img: "/logos/3.png",
    title: "Partner 3",
  },
  {
    img: "/logos/4.png",
    title: "Partner 4",
  },
  {
    img: "/logos/5.png",
    title: "Partner 5",
  },
  {
    img: "/logos/6.png",
    title: "Partner 6",
  },
];

export default function PartnerLogoCarousel() {
  return (
    <div className="w-full">
      <SimpleCarousel items={partnerLogos} />
    </div>
  );
}
