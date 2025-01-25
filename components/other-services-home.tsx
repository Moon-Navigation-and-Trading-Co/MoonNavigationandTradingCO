import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "International Trading",
    href: "/learn/international-trading",
  },
  { name: "Ship Management", href: "/learn/ship-management" },
  { name: "Docking and Maintenance", href: "/learn/docking" },
  { name: "Buy/Rent Containers", href: "/learn/buy-rent-container-forms" },
  { name: "Buy/Rent Vessels", href: "/buy-rent-vessels-forms" },
  {
    name: "Container Handling, Stevedoring and Storage",
    href: "/learn/container-hss",
  },
  {
    name: "Handling, Stevedoring and Storage",
    href: "/learn/hss",
  },
  { name: "Customs Clearance", href: "/lean/customs-clearance" },
  { name: "Special Services", href: "/learn/special" },
];

export default function OtherServices() {
  return (
    <div className="flex max-w-[1000px] justify-center">
      <div className="bg-transparent mt-10 py-8 flex items-center justify-center px-2">
        <div className="flex flex-col items-start gap-10 sm:p-8 w-full">
          <h1 className="text-3xl font-semibold text-start text-foreground">
            Other <br /> Services
          </h1>
          <div className="">
            <Button className="rounded-full overflow-hidden w-8 h-8 shadow-[0_0_8px] dark:shadow-primary p-0 hover:bg-white hover:text-primary">
              <Link
                className="items-center flex justify-center w-full h-full"
                href="/learn-more/other"
                aria-label="Learn more about other services"
              >
                <ChevronRight />
              </Link>
            </Button>
          </div>
          <div className="h-[500px] flex items-center justify-start w-full ">
            <div className="w-auto z-10">
              <Separator
                className="bg-primary h-[500px] w-[3px] rounded-full border-t border-opacity- border-primary-light shadow-[0_0_3px] dark:shadow-[0_0_8px] dark:shadow-primary shadow-primary"
                orientation="vertical"
              />
            </div>
            <div className="h-full w-full text-base flex flex-col justify-around font-semibold dark:font-normal dark:text-white text-foreground -ml-[2px]">
              {services.map((service, index) => (
                <div key={service.name} className="flex  gap-5 items-center">
                  <div
                    className={`w-auto h-full flex relative items-center p-0`}
                  >
                    <Separator className="bg-primary h-[3px] border-l border-opacity-20 border-primary shadow-[0_0_4px] dark:shadow-[0_0_8px] dark:shadow-primary shadow-primary" />
                    <div className="w-2 h-2 absolute -right-[3.5px] rounded-full shadow-[0_0_8px] shadow-primary bg-primary"></div>
                  </div>
                  <Link
                    href={service.href}
                    className="w-fit hover:text-primary transition-colors duration-200 ease-in-out"
                  >
                    {service.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden sm:flex w-full max-w-[350px] mt-20">
          <Image
            src="/boxes.png"
            alt="Container with open doors"
            className="object-cover"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}
