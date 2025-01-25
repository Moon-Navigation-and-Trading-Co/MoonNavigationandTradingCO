"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  { name: "Transportation Services", value: "transportation" },
  { name: "Ship Agency and Operational Services", value: "ship-agency" },
  { name: "International Trading", value: "trading" },
  { name: "Ship Management", value: "ship-management" },
  { name: "Docking and Maintenance", value: "maintenance" },
  { name: "Handling, Stevedoring, and Storage Services", value: "handling" },
  { name: "Customs Clearance Services", value: "customs" },
  { name: "Vessel Rentals and Purchases", value: "vessel-rentals" },
  { name: "Container Rentals and Purchases", value: "container-rentals" },
];

export function QuoteDialog() {
  const [selectedService, setSelectedService] = useState<string>("");
  const router = useRouter();

  const handleProceed = () => {
    if (selectedService) {
      router.push(`/quotation/${selectedService}`);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-fit">Request a Quote</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1000px] bg-transparent  p-2 border-0 overflow-hidden">
        <div className="relative min-h-[500px] w-full">
          <div className="absolute inset-0 bg-black-overlay opacity-85 z-10 rounded-2xl" />
          <Image
            src="/container-1.jpg"
            alt="Shipping port with containers and cranes at sunset"
            fill
            className="object-cover rounded-2xl"
            priority
          />
          <div className="relative z-20 h-full p-8 md:p-16 text-white">
            <DialogHeader className="mb-8">
              <DialogTitle className="text-4xl font-normal text-white">
                Request a Quote
              </DialogTitle>
              <p className="text- text-gray-300 mt-2">
                Effortlessly select your service to begin your journey with Moon
                Navigation and Trading Co.
              </p>
            </DialogHeader>

            <div className="flex flex-col items-end mt-10 space-y-6">
              <Select
                onValueChange={setSelectedService}
                value={selectedService}
              >
                <SelectTrigger className="w-[350px] bg-white text-gray-600">
                  <SelectValue placeholder="Select the service for which you need a quotation" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.value} value={service.value}>
                      {service.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                onClick={handleProceed}
                disabled={!selectedService}
                className=" bg-primary hover:bg-sky-950 disabled:opacity-100 disabled:bg-gray-400 w-fit text-white"
              >
                Proceed to the quotation form
              </Button>
            </div>

            <div className="absolute flex flex-col items-end bottom-4 right-6 text-sm">
              <span className="text-gray-300">Need assistance? </span>
              <DialogTrigger asChild>
                <Link
                  href="#contact"
                  className="text-sky-600 hover:text-blue-300"
                >
                  Contact us
                </Link>
              </DialogTrigger>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
