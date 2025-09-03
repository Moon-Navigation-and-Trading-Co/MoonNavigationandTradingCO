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
  {
    img: "/icons/container/11.png",
    title: "Oil & Gas",
  },
  {
    img: "/icons/container/119.png",
    title: "Automotive",
  },
  {
    img: "/icons/container/120.png",
    title: "Construction",
  },
  {
    img: "/icons/container/121.png",
    title: "Agriculture",
  },
  {
    img: "/icons/container/122.png",
    title: "Mining",
  },
  {
    img: "/icons/container/123.png",
    title: "Chemical",
  },
  {
    img: "/icons/container/129.png",
    title: "Pharmaceutical",
  },
  {
    img: "/icons/container/130.png",
    title: "Textiles",
  },
  {
    img: "/icons/container/131.png",
    title: "Electronics",
  },
  {
    img: "/icons/container/132.png",
    title: "Food & Beverage",
  },
  {
    img: "/icons/container/133.png",
    title: "Steel & Metals",
  },
  {
    img: "/icons/container/142.png",
    title: "Renewable Energy",
  },
  {
    img: "/icons/container/143.png",
    title: "Aerospace",
  },
  {
    img: "/icons/container/144.png",
    title: "Marine",
  },
  {
    img: "/icons/container/145.png",
    title: "Defense",
  },
  {
    img: "/icons/container/146.png",
    title: "Telecommunications",
  },
  {
    img: "/icons/container/147.png",
    title: "Healthcare",
  },
];

export default function IndustryCarousel() {
  return (
    <div className="w-full">
      <SimpleCarousel items={industryItems} />
    </div>
  );
}
