"use client"
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full fixed top-0 z-50 px-4 py-2 mt-3">
      <nav className="container mx-auto bg-first_Bc bg-opacity-80 backdrop-blur-sm rounded-full shadow-md">
        <div className="flex justify-between items-center px-6 py-3">
          <p className="text-second_Bc italic font-extrabold text-xl sm:text-2xl">Roladev</p>
          <div className="hidden lg:flex items-center space-x-4">
            <ul className="hidden lg:flex space-x-6 lg:space-x-12 text-base lg:text-lg">
              <li><Link href="/" className="text-text_one hover:text-second_Bc hover:font-medium transition-colors">About Me</Link></li>
              <li><Link href="/skills" className="text-text_one hover:text-second_Bc hover:font-medium transition-colors">Skills</Link></li>
              <li><Link href="/project" className="text-text_one hover:text-second_Bc hover:font-medium transition-colors">Project</Link></li>
              <li><Link href="/contact" className="text-text_one hover:text-second_Bc hover:font-medium transition-colors">Contact</Link></li>
            </ul>
          </div>
          <button className="lg:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <Image src="/close-menu.svg" width={32} height={32} alt="Close Menu" />
            ) : (
              <Image src="/menu.png" width={32} height={32} alt="Open Menu" />
            )}
          </button>
        </div>
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 rounded-none w-[50%] h-screen">
            <ul className="flex flex-col text-center text-lg space-y-4">
              <li><Link href="/" className="text-text_one hover:text-second_Bc transition-colors">About Me</Link></li>
              <li><Link href="/skills" className="text-text_one hover:text-second_Bc transition-colors">Skills</Link></li>
              <li><Link href="/project" className="text-text_one hover:text-second_Bc transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="text-text_one hover:text-second_Bc transition-colors">Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;