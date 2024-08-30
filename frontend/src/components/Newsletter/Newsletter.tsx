import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function Newsletter() {
  return (
    <div className='p-4 mx-2 my-10 bg-orange-300 rounded-sm'>
      <div className=' flex flex-col gap-2 items-center'>
        <h1 className='text-lg font-medium'>Subscribe</h1>
        <span className=' bg-red-500 h-2 w-24' />
      </div>

      <p className='text-center py-4 text-sm font-light'>Subscribe our newsletter to stay updated every moment</p>

      <div className='flex gap-4 justify-center'>
        <Input className=' max-w-sm md:max-w-2xl' placeholder='enter your email' />
        <Button className=' bg-red-500'>Submit</Button>
      </div>
    </div>
  )
}
