import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-wrap justify-evenly gap-2 bg-gray-100 '>

      <div id="info" className='p-2 flex flex-col gap-4 max-w-[300px] md:max-w-sm'>
        <div className='flex items-center gap-2'>
        <Image
          className="rounded-full inline-block"
          src="/logo.jpg"
          alt="logo"
          width={30}
          height={20}
        />

        <div className='flex flex-col'><h1>SamCommerce</h1> <span className='h-2 w-32 bg-red-500' /></div>
        </div>

        <p className=' text-justify font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio reiciendis numquam illo, officiis ratione a nesciunt, saepe voluptate beatae, voluptatum architecto nostrum iste? Accusamus eum totam cupiditate quos. Obcaecati.</p>

        <div id="social" className="flex items-center text-xl">
          <i className="ri-facebook-circle-fill bg-[#F5F7FA] px-1 rounded-full cursor-pointer hover:text-blue-600"></i>
          <i className="ri-instagram-line bg-[#F5F7FA] px-1 rounded-full cursor-pointer hover:text-orange-500"></i>
          <i className="ri-youtube-line bg-[#F5F7FA] px-1 rounded-full cursor-pointer hover:text-red-600"></i>
        </div>
      </div>

      <div id="services" className='flex flex-col gap-6 justify-start p-2 md:max-w-sm'>
            <div className='flex flex-col'><h1>Services</h1> <span className='w-[65px] h-2 bg-red-500' /></div>
        <div className='flex flex-col font-light gap-2 text-orange-500'>
            <p>Sell</p>
            <p>Retail</p>
            <p>Affiliate</p>
        </div>
      </div>

      <div id="map" className=' max-w-sm flex flex-col gap-6 p-2 md:max-w-sm'>

        <div className='flex flex-col'><h1>Sakhipur Bus Stand, Sakhipur Tangail.</h1> <span className='h-2 w-[290px] bg-red-500' /></div>
        <address className=' h-36 w-36 '>
        <iframe className='h-36 w-[300px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.823981494584!2d90.16721967513381!3d24.317774078287513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37560fc2476e7159%3A0x59b4d8e2233d2ff7!2sSakhipur%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1724993533706!5m2!1sen!2sbd" width="600" height="450"  allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
        </address>

      </div>

    </div>
  )
}
