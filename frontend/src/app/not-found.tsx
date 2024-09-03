"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function NotFound() {
  const nevigate = useRouter();
  return (
    <div>
      <Navbar />

      <div className=" h-[500px] w-full flex flex-col gap-6 justify-center items-center ">
        <h1 className="text-5xl">404 Not Found</h1>
        <p className="text-sm">Your visited page not found. You may go home page.</p>
        <Button className="bg-red-500" onClick={() => nevigate.push("/")}>Go Home</Button>
      </div>
      <Footer />
    </div>
  );
}
