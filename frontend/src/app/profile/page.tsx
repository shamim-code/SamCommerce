import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar />

      <div id="profile">
        <div id="section1" className='flex flex-col gap-2 justify-center items-center m-2 '>
            <Avatar className='ring-2 ring-orange-400 drop-shadow-md'>
                <AvatarImage src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.851188757.1724669754&semt=ais_hybrid" />
                <AvatarFallback>Profile</AvatarFallback>
            </Avatar>

            <h1 className='uppercase font-medium'>Shamim Al Mamun</h1>
            <p className=' text-xs'>Road no: 12, House no:56,Ashulia, Savar, Dhaka</p>
        </div>

        <h1 className='text-center my-4 underline'>Personal Informations</h1>

        <div id="second" className='mx-2 my-5'>
          <table className='w-full'>
            <tbody className='flex flex-col gap-4'>
            <tr className='flex justify-between odd:bg-gray-100 even:bg-orange-200 p-2 rounded-sm'>
                <td><Avatar className='ring-2 ring-orange-400 drop-shadow-md h-6 w-6'>
                <AvatarImage src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.851188757.1724669754&semt=ais_hybrid" />
                <AvatarFallback>Profile</AvatarFallback>
            </Avatar></td>
                <td><button className='bg-orange-500 px-2 text-white rounded-sm'>Edit</button></td>
              </tr>
              <tr className='flex justify-between odd:bg-gray-100 even:bg-slate-200 p-2 rounded-sm'>
                <td>Shamim Al Mamun</td>
                <td><button className='bg-orange-500 px-2 text-white rounded-sm'>Edit</button></td>
              </tr>
              <tr className='flex justify-between odd:bg-gray-100 even:bg-slate-200 p-2 rounded-sm'>
                <td>Phone: 01789827855</td>
                <td><button className='bg-orange-500 px-2 text-white rounded-sm'>Edit</button></td>
              </tr>
              <tr className='flex justify-between odd:bg-gray-100 even:bg-slate-200 p-2 rounded-sm'>
                <td>Email: shamim@gmail.com</td>
                <td><button className='bg-orange-500 px-2 text-white rounded-sm'>Edit</button></td>
              </tr>
              <tr className='flex justify-between odd:bg-gray-100 even:bg-slate-200 p-2 rounded-sm'>
                <td>Address: Road no: 12, House no:56, Ashulia, Savar, Dhaka</td>
                <td><button className='bg-orange-500 px-2 text-white rounded-sm'>Edit</button></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

      <Footer />
    </div>
  )
}
