"use client"
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image';
import Rating from '../Rating/Rating';
import { useRouter } from 'next/navigation';

  

export default function ProductCard(props:any) {
  
  const [rating, setRating] = useState(0)
  const router = useRouter();

  return (
    <Card onClick={()=> router.push('/order')} className=' max-w-[150px] m-2 inline-block md:max-w-[250px] cursor-pointer'>
      <CardHeader>
        <div className='relative'>
            <Image height={200} width={200} src={props.img} alt={props.title} />
            <span className=' absolute top-0 text-sm bg-red-500 px-1 m-1 text-gray-200 rounded-sm'>- 10%</span>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className='text-sm'>{props.title}</CardTitle>
        <h1>${props.price}</h1>
      </CardContent>
      <CardFooter>
       <Rating rate={props.rating} setRating={setRating} />
      </CardFooter>
    </Card>
  )
}
