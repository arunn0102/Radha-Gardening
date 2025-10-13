"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-green-700 to-green-600 shadow-md py-4 px-6 md:px-12 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Website Name */}
        <Link
  href="/"
  className="text-2xl md:text-3xl font-extrabold text-white relative group transition-all duration-300 hover:text-green-300"
>
  Radha Gardening
  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-green-300 transition-all duration-300 group-hover:w-full rounded"></span>
</Link>
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1 rounded-md transition-colors duration-300 ${
                pathname === link.href
                  ? "bg-white text-green-700"
                  : "text-white hover:bg-white hover:text-green-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 bg-white rounded-lg shadow-lg animate-slide-down p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block font-medium px-3 py-2 rounded-md transition-colors duration-300 ${
                pathname === link.href
                  ? "bg-green-600 text-white"
                  : "text-gray-700 hover:bg-green-600 hover:text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}