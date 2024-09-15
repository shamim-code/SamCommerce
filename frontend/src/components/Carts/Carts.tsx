
import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";

export default function Carts() {
  return (
    <div className="flex justify-evenly items-center border-b-2 border-t-2 py-1 border-gray-300">
      <Checkbox />
      <div className="relative w-16 h-16">
        <Image
          src="https://i.ibb.co/MGpGZsT/tshir.jpg"
          alt="T-shirt"
          fill
          className="object-cover rounded-sm"
        />
      </div>

      <p>Name</p>
      <p id="price">$123</p>
      <Input className="inline-block w-12 h-6" />
      <p id="subtotal">$231</p>
    </div>
  );
}
