"use client"

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import OverviewServicesTabs from "@/components/overview-services";

export default function DangerousCargoInfo() {
  const t = useTranslations("learn-standard");

  return (
    <>
      {renderOverview()}
      {renderServices()}
    </>
  );
}
