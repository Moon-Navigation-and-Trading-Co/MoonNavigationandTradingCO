"use client";

import React from "react";
import Image from "next/image";
import SimpleCarousel from "./simple-carousel";

export type Vessel = {
  id: number;
  name: string;
  type: string;
  capacity: string;
  image: string;
  description: string;
};

const vessels: Vessel[] = [
  {
    id: 1,
    name: "MV Moon Star",
    type: "Container Vessel",
    capacity: "8,000 TEU",
    image: "/vessel-1.jpg",
    description: "Modern container vessel with advanced navigation systems",
  },
  {
    id: 2,
    name: "MV Ocean Pioneer",
    type: "Bulk Carrier",
    capacity: "50,000 DWT",
    image: "/vessel-2.jpg",
    description: "Efficient bulk carrier for various cargo types",
  },
  {
    id: 3,
    name: "MV Trade Wind",
    type: "General Cargo",
    capacity: "15,000 DWT",
    image: "/vessel-3.jpg",
    description: "Versatile vessel for project cargo and heavy lifts",
  },
];

export default function VesselCarousel() {
  const carouselItems = vessels.map(vessel => ({
    img: vessel.image,
    title: vessel.name,
  }));

  return (
    <div className="w-full">
      <SimpleCarousel items={carouselItems} />
    </div>
  );
}
