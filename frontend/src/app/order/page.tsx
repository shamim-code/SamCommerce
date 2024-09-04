"use client"
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Rating from '@/components/Rating/Rating'
import React, { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from '@/components/ui/button';

export default function page() {
  const [rating, setRating] = useState(0)
  return (
    <div>
      <Navbar />

      <div id="product-details" className="flex gap-4 justify-center items-center py-5 px-2 md:mx-56">
        <img className=" h-[250px] w-[300px] md:h-[300px] md:w-[400px] rounded-sm" src="https://i.ibb.co/MGpGZsT/tshir.jpg" alt="T-shirt" />
        <div id='info' className='flex flex-col gap-2 py-10'>
          <h1>Classic T-Shirt</h1>
          <div id='info2' className='flex gap-4'>
            <Rating rate="4" setRating={setRating} />
            <p>&#40;150 Reviews&#41;</p>
            <p className="text-green-600">Instock</p>
          </div>
          <p>$192.00</p>
          <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p> 

          <span className='h-2 w-[350px]' />

          <div id='Colours' className='flex gap-2'>
            <p>Colours:</p>
            <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Red
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Black
            </label>
          </div>
          </div>

          <div id="size" className='flex gap-4'>
            <p>Size</p>
            <div className="flex gap-4">
              <p className="px-1 rounded-sm ring-1 ring-gray-300">S</p>
              <p className="px-1 rounded-sm ring-1 ring-gray-300">M</p>
              <p className="px-1 rounded-sm ring-1 ring-gray-300">L</p>
              <p className="px-1 rounded-sm ring-1 ring-gray-300">XL</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="flex gap-2 justify-center items-center">
              <Button className='bg-red-500'>-</Button>
              <p className="ring-1 text-2xl px-2 py-1 rounded-sm">2</p>
              <Button className='bg-red-500'>+</Button>
            </div>
            <Button className="bg-red-500">Buy Now</Button>
            <Button className="bg-red-500">Add to Card</Button>
            <i className="ri-heart-line text-2xl ring-1 ring-gray-300 p-1 rounded-sm"></i>
          </div>

          <div></div>

        </div>
      </div>
      <Footer />
    </div>
  )
}
