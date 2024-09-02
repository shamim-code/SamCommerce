import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export default function page() {
  return (
    <div>
      <Navbar />

        <div className='m-8 flex flex-col lg:flex-row justify-around items-center'>
        <div id="info" className='flex flex-col gap-4'>

            <div className="flex flex-col gap-2">
                <div className='flex gap-2 items-center '>
                  <IoCallOutline className='bg-red-500 text-white ring-2 ring-red-500 rounded-full' />
                  <p className="text-sm font-bold">Call To Us</p>
                </div>
                <p className="text-xs">We are available 24/7, 7 days a week.</p>
                <p className="text-xs">Phone: +8801611112222</p>
            </div>

            <span className='h-1 w-52 bg-gray-300 '></span>

            <div className="flex flex-col gap-2">

                <div className='flex gap-2 items-center'>
                    <MdOutlineEmail className='bg-red-500 text-white ring-2 ring-red-500 rounded-full' />
                    <p className="text-sm font-bold">Write To Us</p>
                </div>
                <p className="text-xs">Fill out our form and we will contact you within 24 hours.</p>
                <p className="text-xs">Emails: customer@exclusive.com</p>

            </div>

        </div>

        <form className='flex flex-col gap-2 mt-10'>
            <div className="flex flex-col md:flex-row justify-center gap-2">
                <input className=' outline-none bg-gray-200 p-2 rounded-sm' type="text" placeholder="name" />
                <input className=' outline-none bg-gray-200 p-2 rounded-sm' type="email" name="" id="" placeholder="email" />
                <input className=' outline-none bg-gray-200 p-2 rounded-sm' type="number" name="" id="" placeholder='phone' />
            </div>
            <textarea className="bg-gray-200 rounded-sm h-24 outline-none p-2" name="" id=""></textarea>
            <button className="bg-red-500 uppercase py-2 rounded-sm text-white hover:bg-transparent ring-1 ring-red-500 hover:text-black duration-200">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}
