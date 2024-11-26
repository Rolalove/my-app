"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { id: "about", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "project", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  // Update active section and scroll state based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll background change
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 50);

      // Handle active section
      const sections = navItems.map(item => item.id);
      const currentPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            currentPosition >= offsetTop &&
            currentPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = (id: string) => {
    // Keep text white when in About or Skills sections
    if (activeSection === "about" || activeSection === "skills") {
      return `text-white hover:text-gray-200 transition-all duration-300 cursor-pointer hover:underline hover:decoration-wavy
      ${id === activeSection ? "underline decoration-wavy font-bold" : ""}`;
    }
    
    return `transition-all duration-300 cursor-pointer hover:underline hover:decoration-wavy
    ${hasScrolled 
      ? 'text-black hover:text-gray-700' 
      : 'text-white hover:text-gray-200'}
    ${id === activeSection 
      ? `underline decoration-wavy font-bold ${hasScrolled ? 'text-black' : 'text-white'}` 
      : ''}`;
  };

  // Separate classes for mobile menu items to maintain original styling
  const mobileLinkClasses = (id: string) =>
    `text-white-600 hover:underline hover:decoration-wavy transition-all duration-300 cursor-pointer
    ${activeSection === id ? "underline decoration-wavy text-white font-bold" : ""}`;

  return (
    <header className="w-full fixed top-0 z-50 px-4 py-2">
      <div className="container mx-auto py-4 px-4 bg-first_Bc bg-opacity-80 backdrop-blur-sm rounded-full shadow-md">
        <div className="flex justify-between items-center">
          <p className="text-second_Bc italic font-extrabold text-xl sm:text-2xl">
            Roladev
          </p>
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-4"
          >
            <ul className="hidden lg:flex space-x-6 lg:space-x-20 text-base lg:text-lg">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={linkClasses(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
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
          <div className="lg:hidden bg-second_Bc text-white px-4 py-4 rounded-tl-lg rounded-br-lg absolute right-3 mt-2">
            <ul className="flex flex-col text-center text-xl space-y-5">
              {navItems.map((item) => (
                <li role="menuitem" key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={mobileLinkClasses(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;