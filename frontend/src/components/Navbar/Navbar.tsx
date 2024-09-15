"use client";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "../ui/input";
import 'remixicon/fonts/remixicon.css';
import { Button } from "../ui/button";
import { useRef, useState, useEffect } from "react";
import { gsap } from 'gsap';
import { useRouter } from "next/navigation";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebar = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const nevigate = useRouter();

  const array = ['Home','Brands', 'About', 'Contact',]

  useEffect(() => {
    if (isOpen) {
      OpenSidebar();
    } else {
      CloseSidebar();
    }
  }, [isOpen]);

  function CloseSidebar() {
    gsap.to(sidebar.current, {
      opacity: 0,
      y: 50,
      ease: 'back.out(1.7)',
      duration: 0.5,
    });
  }

  function OpenSidebar() {
    gsap.to(sidebar.current, {
      opacity: 1,
      y: 0,
      ease: 'back.out(1.7)',
      duration: 0.5,
    });
  }

  return (
    <div className="relative">
      <nav className="bg-gray-50 flex justify-between border-solid shadow-sm">
        <Image
          className="rounded-full inline-block"
          src="/logo.jpg"
          alt="logo"
          width={40}
          height={20}
        />
        <div id="header" className="hidden md:flex gap-4 items-center">
          <Link href="/">Home</Link>
          <DropdownMenu>
            <DropdownMenuTrigger>Brands</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Brands</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/easy">Easy</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/arong">Arong</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/dorjibari">Dorjibari</Link>
              </DropdownMenuItem>
              <DropdownMenuItem><Link href="/yellow">Yellow</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
        </div>

        <div id="account" className="flex items-center gap-2">
          <form>
            <Input
              className="inline-block w-[200px] md:w-[250px] h-[30px] shrink"
              type="text"
              placeholder="search"
            />
            <Button className="bg-transparent hover:bg-transparent">
              <i className="ri-search-line text-xl px-1 rounded-full text-black bg-[#F5F7FA]"></i>
            </Button>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger><i className="ri-account-circle-line text-xl bg-[#F5F7FA] px-1 rounded-full cursor-pointer"></i></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              {
                isLoggedIn ? <DropdownMenuItem className="text-black hover:bg-red-500 hover:text-white">
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem> : <DropdownMenuItem className="text-black hover:bg-red-500 hover:text-white">
                <Link href="/signup">SignUp</Link>
              </DropdownMenuItem>
              }
              {
                isLoggedIn ? <DropdownMenuItem className="text-black hover:bg-red-500 hover:text-white">
                <Link href="#">Logout</Link>
              </DropdownMenuItem>: <DropdownMenuItem className="text-black hover:bg-red-500 hover:text-white">
                <Link href="login">Login</Link>
              </DropdownMenuItem>
              }
            </DropdownMenuContent>
          </DropdownMenu>
          
          <span className=" relative">
            <i onClick={()=> nevigate.push('/order')} className="ri-shopping-cart-2-line text-xl bg-[#F5F7FA] px-1 rounded-full cursor-pointer"></i>
            <span className=" text-[8px] bg-red-500 px-1 text-white rounded-full absolute -top-1 right-0">10</span>
          </span>
        </div>

        <div id="social" className="hidden md:flex items-center text-xl">
          <i className="ri-facebook-circle-fill bg-[#F5F7FA] px-1 rounded-full cursor-pointer hover:text-blue-600"></i>
          <i className="ri-instagram-line bg-[#F5F7FA] px-1 rounded-full cursor-pointer hover:text-orange-500"></i>
          <i className="ri-youtube-line bg-[#F5F7FA] px-1 rounded-full cursor-pointer hover:text-red-600"></i>
        </div>

        <div className="flex items-center mr-1 md:hidden">
          {isOpen ? (
            <i
              onClick={() => {
                setIsOpen(false);
              }}
              className="ri-close-line cursor-pointer text-[15px] border px-1 border-orange-500 rounded-full"
            ></i>
          ) : (
            <i
              onClick={() => {
                setIsOpen(true);
              }}
              className="ri-menu-2-line cursor-pointer text-[15px] border px-1 border-orange-500 rounded-full"
            ></i>
          )}
        </div>
      </nav>

      <div
        id="sidebar"
        ref={sidebar}
        className="fixed right-0 z-10 h-4/5 w-48 bg-gradient-to-r from-orange-500 to-red-500 text-white opacity-0 translate-y-[50px] m-1 p-2 rounded-sm md:hidden" >

        <div className="flex gap-1 items-center">
          <span className=" h-2 w-2 ml-2 bg-white rounded-full"></span>
          <Link href='/'>Home</Link>
        </div>

        <div className="flex gap-1 items-center">
          <span className=" h-2 w-2 ml-2 bg-white rounded-full"></span>
          <DropdownMenu>
            <DropdownMenuTrigger>Brands</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Brands</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/easy">Easy</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/arong">Arong</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/dorjibari">Dorjibari</Link>
              </DropdownMenuItem>
              <DropdownMenuItem><Link href="/yellow">Yellow</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex gap-1 items-center">
          <span className=" h-2 w-2 ml-2 bg-white rounded-full"></span>
          <Link href='/about'>About</Link>
        </div>

        <div className="flex gap-1 items-center">
          <span className=" h-2 w-2 ml-2 bg-white rounded-full"></span>
          <Link href='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  );
}
