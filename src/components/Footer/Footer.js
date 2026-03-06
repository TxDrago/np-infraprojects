"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white relative pt-16 pb-10 px-6 md:px-16">
      
      {/* Top Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* About Us */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 relative inline-block">
            About Us
            <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-orange-500"></span>
          </h3>
          <p className="text-gray-300 leading-relaxed"> 
            N.P. Infraprojects India Pvt. Ltd. is a trusted name in railway 
            line construction, highway development, and large-scale 
            infrastructure projects across India. We focus on quality, 
            safety, and long-term sustainability.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 relative inline-block">
            Company
            <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-orange-500"></span>
          </h3>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="hover:text-orange-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-orange-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-orange-500 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-orange-500 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 relative inline-block">
            Services
            <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-orange-500"></span>
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-orange-500 transition cursor-pointer">
              Railway Line Construction
            </li>
            <li className="hover:text-orange-500 transition cursor-pointer">
              Track Laying & Maintenance
            </li>
            <li className="hover:text-orange-500 transition cursor-pointer">
              Highway & Road Development
            </li>
            <li className="hover:text-orange-500 transition cursor-pointer">
              Infrastructure Projects
            </li>
          </ul>
        </div>

        {/* Popular Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 relative inline-block">
            Popular Projects
            <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-orange-500"></span>
          </h3>

          <div className="space-y-6">

            <div className="flex gap-4 items-center">
              {/* <Image
                src="/images/projects/project1.jpg"
                alt="Railway Project"
                width={120}
                height={70}
                className="rounded-md object-cover"
              /> */}
              <p className="text-sm text-gray-300">
                Major Railway Track Expansion Project
              </p>
            </div>

            <div className="flex gap-4 items-center">
              {/* <Image
                src="/images/projects/project2.jpg"
                alt="Highway Project"
                width={120}
                height={70}
                className="rounded-md object-cover"
              /> */}
              <p className="text-sm text-gray-300">
                National Highway Construction Phase II
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} N.P. Infraprojects India Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}