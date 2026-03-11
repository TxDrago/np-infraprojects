"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 

  const linkClass = (path) =>
    `transition ${
      pathname === path
        ? "text-orange-500 font-semibold border-b-2 border-orange-500"
        : "hover:text-orange-500"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-[1000] bg-black/20 backdrop-blur-lg shadow-lg text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/Navbar/Logo.jpeg"
            alt="Excavator Logo"
            width={45}
            height={45}
            className="object-contain"
          />
          <span className="text-xl font-bold">
            N.P. <span className="text-orange-500">Infra Projects India pvt. Ltd.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/aboutus" className={linkClass("/aboutus")}>
            About Us
          </Link>
          <Link href="/services" className={linkClass("/services")}>
            Services
          </Link>
          <Link href="/projects" className={linkClass("/projects")}>
            Projects
          </Link>
          <Link href="/contact" className={linkClass("/contact")}>
            Contact Us
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-orange-500"
          >
            Home
          </Link>
          <Link
            href="/aboutus"
            onClick={() => setIsOpen(false)}
            className="block hover:text-orange-500"
          >
            About
          </Link>
          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="block hover:text-orange-500"
          >
            Services
          </Link>
          <Link
            href="/projects"
            onClick={() => setIsOpen(false)}
            className="block hover:text-orange-500"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-orange-500"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
