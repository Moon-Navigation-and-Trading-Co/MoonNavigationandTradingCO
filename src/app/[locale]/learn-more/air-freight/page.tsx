"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AirFreightRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/en/learn/air-freight");
  }, [router]);
  return null;
}