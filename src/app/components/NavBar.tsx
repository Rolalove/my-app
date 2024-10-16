"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "About Me" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const linkClasses = (href: string) =>
    `text-white-600 hover:underline hover:decoration-wavy transition-all duration-300
    ${
      pathname === href ? "underline decoration-wavy text-black font-bold" : ""
    }`;

  return (
    <header className="w-full fixed top-0 z-50 px-4 py-2">
      <nav className="container mx-auto py-4 px-4 bg-first_Bc bg-opacity-80 backdrop-blur-sm rounded-full shadow-md">
        <div className="flex justify-between items-center">
          <p className="text-second_Bc italic font-extrabold text-xl sm:text-2xl">
            Roladev
          </p>
          <div className="hidden lg:flex items-center space-x-4">
            <ul className="hidden lg:flex space-x-6 lg:space-x-20 text-base lg:text-lg">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClasses(item.href)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button className="lg:hidden" onClick={toggleMenu}>
            <Image
              src={isOpen ? "/close-menu.svg" : "/menu.png"}
              width={32}
              height={32}
              alt={isOpen ? "Close Menu" : "Open Menu"}
            />
          </button>
        </div>
        {isOpen && (
          <div className="lg:hidden bg-second_Bc px-4 py-4 rounded-tl-lg rounded-br-lg absolute right-3 mt-2">
            <ul className="flex flex-col text-center text-xl space-y-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={linkClasses(item.href)}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
