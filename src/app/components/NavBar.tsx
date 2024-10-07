"use client"
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full fixed top-0 z-50 ">
      <nav className="container mx-auto py-4 b px-2 w">
        <div className="flex  justify-between">
              <p className="text-second_Bc italic font-extrabold text-xl sm:text-2xl">Roladev</p>
          <div className="hidden lg:flex items-center space-x-4">
            <ul className="hidden lg:flex space-x-6 text-white lg:space-x-20  text-base lg:text-lg">
              <li><Link href="/" className="text-white hover:text-[#222222] hover:font-medium">About Me</Link></li>
              <li><Link href="/skills" className="text-white hover:text-[#222222] hover:font-medium">Skills</Link></li>
              <li><Link href="/project" className="text-white hover:text-[#222222] hover:font-medium active:text-black">Project</Link></li>
              <li><Link href="/contact" className="text-white text hover:text-[#222222] hover:font-medium">Contact</Link></li>
            </ul>
          </div>
          <button className="lg:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <Image src="/close-menu.svg" width={32} height={32} alt="Hamburger Menu" />
            ) : (
              <Image src="/menu.png" width={32} height={32} alt="Hamburger Menu" />
            )}
          </button>
        </div>
        {isOpen && (
          <div className="lg:hidden mt-4">
            <ul className="flex flex-col text-center text-xl mt-20 space-y-2 h-screen gap-y-5">
              <li><Link href="/" className="text-[#767676] hover:text-[#A1785A]">About Me</Link></li>
              <li><Link href="/skills" className="text-[#767676] hover:text-[#A1785A]">Skills</Link></li>
              <li><Link href="/project" className="text-[#767676] hover:text-[#A1785A]">Projects</Link></li>
              <li><Link href="/contact" className="text-[#767676] hover:text-[#A1785A]">Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;