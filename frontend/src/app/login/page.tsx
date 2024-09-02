import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar />
       <div className='flex p-4 gap-10 justify-center items-center'>
        <img className='rounded hidden md:inline-block' src="/login.jpg" alt="" />
        <form className='flex flex-col space-y-8'>
            <div className='flex flex-col space-y-1 mb-2 '>
                <h1 className='text-xl font-bold'>Login to Exclusive</h1>
                <p className='text-sm font-light'>Enter your details below</p>
            </div>
            <input className=' outline-none border-b-2 border-gray-300' type="text" placeholder="email" />
            <input className=' outline-none border-b-2 border-gray-300' type="password" placeholder='*******' />
            <div className='flex justify-between items-center'>
                <button className='bg-red-500 px-2 py-1 text-white rounded-sm' type="submit">Login</button>
                <Link className='text-red-500 text-sm font-light' href='/forgetPassword'>Forget Password?</Link>
            </div>
        </form>
       </div>
      <Footer />
    </div>
  )
}
