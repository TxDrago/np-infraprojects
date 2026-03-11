"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const leaders = [
  {
    name: "Shriniwas zavar",
    role: "Founder & Managing director",
    image: "/images/aboutus/Owner1.jpeg",
  },
  {
    name: "Smita Shriniwas zavar",
    role: "Director",
    image: "/images/aboutus/Owner2.jpeg",
  },
   {
    name: "Vinodkumar Somani",
    role: "Finance Director",
    image: "/images/aboutus/Owner5.jpeg",
  },
  {
    name: "Somashekaragowda.m",
    role: "Technical head",
    image: "/images/aboutus/Owner6.jpeg",
  },
  {
    name: "Manjunath Narayan Gaonkar",
    role: "Project Head MP",
    image: "/images/aboutus/Owner4.png",
  },
  {
    name: "Ramesh venkati rathod",
    role: "Project Head Maharashtra",
    image: "/images/aboutus/Owner7.jpeg",
  },
];

export default function aboutus() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `transition ${
      pathname === path
        ? "text-orange-500 font-semibold border-b-2 border-orange-500"
        : "hover:text-orange-500"
    }`;

  return (
    <div className="bg-white overflow-hidden">
      {/* HERO */}
      <section
        className="relative h-[350px] md:h-[450px] lg:h-[550px] flex items-center justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/images/aboutus/aboutUs.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative text-center px-6 max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            About <span className="text-orange-500">Us</span>
          </h1>

          <p className="mt-4 text-gray-200 text-sm md:text-lg">
            Building infrastructure that shapes the future and empowers
            communities.
          </p>
        </div>
      </section>

      {/* ABOUT COMPANY */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <motion.img
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            src="/images/aboutus/OurCompany.png"
            className="rounded-xl shadow-lg w-full"
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              About Our <span className="text-orange-500">Company</span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Our company specializes in infrastructure development,
              construction management, and engineering excellence. With years of
              experience in delivering high-quality projects, we focus on
              innovation, sustainability, and client satisfaction.
            </p>

            <p className="text-gray-600 mt-4 text-sm md:text-base">
              Our team of experienced professionals ensures every project is
              executed with precision, efficiency, and the highest industry
              standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LEADERSHIP */}

      <section className="py-24 px-6 md:px-10 lg:px-16 bg-white">
        <div className=" mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Our <span className="text-orange-500">Leadership</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group text-center"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-[280px] object-fit group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Text */}
                <h3 className="mt-4 text-lg font-semibold">{leader.name}</h3>

                <p className="text-orange-500 text-sm font-medium">
                  {leader.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-gray-900 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Our <span className="text-orange-500">Vision</span>
        </h2>

        <p className="max-w-3xl mx-auto text-gray-300 text-sm md:text-lg">
          To become a globally recognized infrastructure company delivering
          innovative, sustainable, and high-quality projects that positively
          impact communities and industries.
        </p>
      </section>

      {/* MISSION */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 md:mb-14">
            Our <span className="text-orange-500">Mission</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-semibold mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">
                Deliver projects with exceptional standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Use modern technologies and engineering practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-semibold mb-2">Safety</h3>
              <p className="text-gray-600 text-sm">
                Ensure the highest safety standards at every site.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600 text-sm">
                Build environmentally responsible infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 text-center bg-white px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Let's Build The <span className="text-orange-500">Future</span>{" "}
          Together
        </h2>
        <Link href="/contact" className={linkClass("/contact")}>
          <button className="bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-orange-700 transition">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
}
