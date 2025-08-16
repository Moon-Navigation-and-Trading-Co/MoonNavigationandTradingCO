"use client";

import React from "react";
import Image from "next/image";
import SimpleCarousel from "./simple-carousel";

const projectCargoIndustries = [
  {
    img: "/icons/container/10.png",
    title: "Power Plants",
  },
  {
    img: "/icons/container/106.png",
    title: "Mining Equipment",
  },
  {
    img: "/icons/container/107.png",
    title: "Construction Machinery",
  },
  {
    img: "/icons/container/108.png",
    title: "Oil & Gas Equipment",
  },
  {
    img: "/icons/container/109.png",
    title: "Industrial Machinery",
  },
  {
    img: "/icons/container/110.png",
    title: "Infrastructure Projects",
  },
];

export default function ProjectCargoCarousel() {
  return (
    <div className="w-full">
      <SimpleCarousel items={projectCargoIndustries} />
    </div>
  );
} 