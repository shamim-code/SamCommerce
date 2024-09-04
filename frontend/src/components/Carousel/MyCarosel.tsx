"use client"

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";


export default function MyCarosel() {

  return (
    <div className="flex justify-center mt-5">
      <div className=" max-w-[290px] md:max-w-[500px] ">
        <Carousel plugins={[Autoplay({delay:3000})]} className="w-full max-w-[290px] md:md:max-w-[500px]">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-6">
                  <div className="relative w-full h-full"> {/* Ensure the div is relative and has height and width */}
                      <Image
                        src="https://i.ibb.co/MGpGZsT/tshir.jpg"
                        alt="Images"
                        layout="fill"  // Make the image fill the container
                        objectFit="contain"  // Control how the image fits within the div
                      />
                    </div>
                    </CardContent>
                </Card>
               </CarouselItem>
              ))}
            </CarouselContent>
           <CarouselPrevious className=" text-orange-500" />
          <CarouselNext className=" text-orange-500" />
        </Carousel>
      </div>
    </div>
  );
}
