import Carts from "@/components/Carts/Carts";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />

      <div className="p-2">
        <h1 className="uppercase text-center underline">Shopping Cart</h1>

        <div className="flex items-center gap-2 my-2">
            <span className=" h-4 w-2 bg-red-500" />
            <h1>Carts</h1>
        </div>
        <div>
        <Carts />
        </div>

        <div className="flex items-center gap-2 my-2">
            <span className=" h-4 w-2 bg-red-500" />
            <h1>Orders</h1>
        </div>
      </div>

      <Footer />
    </div>
  );
}
