"use client";

import React from "react";
import Image from "next/image";
import SimpleCarousel from "./simple-carousel";

const industryItems = [
  {
    img: "/icons/container/10.png",
    title: "Container Shipping",
  },
  {
    img: "/icons/container/106.png",
    title: "Bulk Cargo",
  },
  {
    img: "/icons/container/107.png",
    title: "Project Cargo",
  },
  {
    img: "/icons/container/108.png",
    title: "Heavy Lift",
  },
  {
    img: "/icons/container/109.png",
    title: "Specialized Transport",
  },
  {
    img: "/icons/container/110.png",
    title: "Logistics Solutions",
  },
];

export default function IndustryCarousel() {
  return (
    <div className="w-full">
      <SimpleCarousel items={industryItems} />
    </div>
  );
}
