"use client";

import React from "react";
import Image from "next/image";
import SimpleCarousel from "./simple-carousel";

const tankersIndustries = [
  {
    img: "/icons/container/10.png",
    title: "Oil Tankers",
  },
  {
    img: "/icons/container/106.png",
    title: "Chemical Tankers",
  },
  {
    img: "/icons/container/107.png",
    title: "LNG Carriers",
  },
  {
    img: "/icons/container/108.png",
    title: "LPG Carriers",
  },
  {
    img: "/icons/container/109.png",
    title: "Product Tankers",
  },
  {
    img: "/icons/container/110.png",
    title: "Specialized Tankers",
  },
];

export default function TankersIndustryCarousel() {
  return (
    <div className="w-full">
      <SimpleCarousel items={tankersIndustries} />
    </div>
  );
} 