import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Link from 'next/link'
import React from 'react'


export default function page() {
  return (
    <div>
      <Navbar />
        <div className='flex gap-10 p-4 justify-center items-center'>
            <img className='hidden md:inline-block rounded-sm ' src="/login.jpg"  />
            <div className='flex flex-col gap-4'>
              <form className='flex flex-col gap-6'>
                  <h1 className=' font-medium'>Create an Account</h1>
                  <p className='text-sm text-gray-600'>Enter your details below</p>

                  <input className='outline-none border-b-2 border-gray-300' type='text' placeholder='Name' />
                  <input className='outline-none border-b-2 border-gray-300' type='email' placeholder='Email' />
                  <input className='outline-none border-b-2 border-gray-300' type='password' placeholder='Password' />
                  <button type='submit' className='bg-red-500 text-white rounded-sm text-sm py-1'>Create Account </button>
              </form>
              <div className='flex items-center justify-center gap-2 border-2 border-gray-300 rounded-sm'>
                <img className='h-4 w-5' src="/google.png" alt="" />
                <p>Sign up with Google</p>
              </div>
              <div >
                <p className='text-sm font-light'>Already have account? <Link className=' underline font-semibold' href='/login'>Login</Link></p>
              </div>
            </div>
        </div>
      <Footer />
    </div>
  )
}
