import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import { FaShopify } from "react-icons/fa6";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { IoIosGift } from "react-icons/io";
import { TbMoneybag } from "react-icons/tb";

export default function page() {
  return (
    <div>

        <Navbar />

        <div className='flex flex-col items-center gap-4 p-4 md:mx-64 md:flex-row '>
          <div>
            <h1 className=' font-semibold text-xl'>Our Story</h1>
            <p className=' text-sm text-justify'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
          </div>
          <img className='h-[309px] w-[405px] rounded-sm' src="/about.jpg" alt="about section image" />

        </div>

        <div id="section2" className='flex flex-wrap justify-center items-center m-8'>

          <div className='p-2 m-2 ring-1 ring-gray-300 h-24 w-28 flex flex-col justify-center items-center gap-2 shadow-md text-center rounded-sm'>
           <FaShopify className=' ring-4 text-xl ring-gray-300 rounded-full' />
           <h1 className='text-sm font-bold'>10.5k</h1>
           <p className='text-[10px]'>Sales active out site</p>
          </div>

          <div className='p-2 m-2 ring-1 ring-gray-300 h-24 w-28 flex flex-col justify-center items-center gap-2 shadow-md text-center rounded-sm'>
           <HiOutlineCurrencyDollar className='ring-4 text-xl ring-gray-300 rounded-full' />
           <h1 className='text-sm font-bold'>33k</h1>
           <p className='text-[10px]'>Monthly Product sale</p>
          </div>

          <div className='p-2 m-2 ring-1 ring-gray-300 h-24 w-28 flex flex-col justify-center items-center gap-2 shadow-md text-center rounded-sm'>
           <IoIosGift className='ring-4 text-xl ring-gray-300 rounded-full' />
           <h1 className='text-sm font-bold'>45.5k</h1>
           <p className='text-[10px]'>Customer active in our site</p>
          </div>

          <div className='p-2 m-2 ring-1 ring-gray-300 h-24 w-28 flex flex-col justify-center items-center gap-2 shadow-md text-center rounded-sm'>
           <TbMoneybag className='ring-4 text-xl ring-gray-300 rounded-full' />
           <h1 className='text-sm font-bold'>10.5k</h1>
           <p className='text-[10px]'>Sales active out site</p>
          </div>
        </div>

        <div id="team" className='mx-4 my-10 flex flex-wrap justify-center gap-4'>

          <div id="member" className='p-2 flex flex-col gap-1'>
            <img className='h-40 w-36 rounded-sm bg-gray-200 ring-2 ring-gray-200' src="https://media.istockphoto.com/id/1644238002/photo/business-confidence-and-portrait-black-man-with-smile-in-office-startup-ceo-or-owner-at-hr.jpg?s=1024x1024&w=is&k=20&c=EfEgJlgbd_BvAB9GHZ2Bt9COL7LYLX4U9TtK3J1K8-Q=" alt="" />
            <h1 className='text-sm font-semibold'>Tom Cruise</h1>
            <p className='text-xs'>Founder & Chairman</p>
            <div id="social" className='flex gap-2'>
            <i className="ri-twitter-line cursor-pointer hover:text-blue-600"></i>
              <i className="ri-instagram-line cursor-pointer hover:text-orange-500"></i>
              <i className="ri-linkedin-line rounded-full cursor-pointer hover:text-blue-600"></i>
            </div>
          </div>

          <div id="member" className='p-2 flex flex-col gap-1'>
            <img className='h-40 w-36 rounded-sm bg-gray-200 ring-2 ring-gray-200' src="https://media.istockphoto.com/id/1124239071/photo/happy-businesswoman-stock-image.jpg?s=2048x2048&w=is&k=20&c=BRfO7lZBLYLYR-YPFw6Kn381zJAd8XmmEdrZj2QKzx8=" alt="" />
            <h1 className='text-sm font-semibold'>Tom Cruise</h1>
            <p className='text-xs'>Founder & Chairman</p>
            <div id="social" className='flex gap-2'>
            <i className="ri-twitter-line cursor-pointer hover:text-blue-600"></i>
              <i className="ri-instagram-line cursor-pointer hover:text-orange-500"></i>
              <i className="ri-linkedin-line rounded-full cursor-pointer hover:text-blue-600"></i>
            </div>
          </div>


          <div id="member" className='p-2 flex flex-col gap-1'>
            <img className='h-40 w-36 rounded-sm bg-gray-200 ring-2 ring-gray-200' src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className='text-sm font-semibold'>Tom Cruise</h1>
            <p className='text-xs'>Founder & Chairman</p>
            <div id="social" className='flex gap-2'>
              <i className="ri-twitter-line cursor-pointer hover:text-blue-600"></i>
              <i className="ri-instagram-line cursor-pointer hover:text-orange-500"></i>
              <i className="ri-linkedin-line rounded-full cursor-pointer hover:text-blue-600"></i>
            </div>
          </div>

        </div>

        <Footer />
      
    </div>
  )
}
