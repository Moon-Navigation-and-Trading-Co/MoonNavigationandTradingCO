"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { ArrowRight, Clock, Truck } from "lucide-react";
import { useRouter } from "next/navigation";

interface FreightType {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  price: string;
  duration: string;
  route: string;
  color: string;
}

const freightTypes: FreightType[] = [
  {
    id: 1,
    title: "Ocean Freight",
    description: "Reliable sea transportation for large cargo volumes",
    icon: <Truck className="w-8 h-8" />,
    features: ["Global coverage", "Cost-effective", "Large capacity"],
    price: "From $500",
    duration: "15-30 days",
    route: "/ocean-freight-forms",
    color: "bg-blue-50 border-blue-200",
  },
  {
    id: 2,
    title: "Air Freight",
    description: "Fast and secure air transportation solutions",
    icon: <Truck className="w-8 h-8" />,
    features: ["Express delivery", "Global network", "Secure handling"],
    price: "From $1,200",
    duration: "2-5 days",
    route: "/air-freight-forms",
    color: "bg-green-50 border-green-200",
  },
  {
    id: 3,
    title: "Land Freight",
    description: "Efficient ground transportation across continents",
    icon: <Truck className="w-8 h-8" />,
    features: ["Door-to-door", "Flexible routes", "Real-time tracking"],
    price: "From $300",
    duration: "3-7 days",
    route: "/inland-services-forms",
    color: "bg-orange-50 border-orange-200",
  },
];

export default function TSwiping() {
  const tt = useTranslations("Buttons");
  const router = useRouter();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Choose Your Freight Solution
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Select the transportation method that best fits your cargo requirements and timeline
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {freightTypes.map((freight) => (
          <Card key={freight.id} className={`h-full ${freight.color} hover:shadow-lg transition-shadow`}>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-white mr-3">
                  {freight.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {freight.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4">
                {freight.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {freight.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  {freight.duration}
                </div>
                <Badge variant="secondary" className="text-sm">
                  {freight.price}
                </Badge>
              </div>
              
              <Button
                onClick={() => router.push(freight.route)}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Get Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
