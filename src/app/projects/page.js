"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const projects = [
  {
    title: "Bhopal – Budni 3rd Railway Line",
    location: "Madhya Pradesh",
    value: "₹810 Cr",
    img: "/images/projects/project1.jpg"
  },
  {
    title: "Nagpur – Katol NH 353J Highway",
    location: "Maharashtra",
    value: "₹590 Cr",
    img: "/images/projects/project2.jpg"
  },
  {
    title: "Nagpur – Itarsi 3rd Railway Line",
    location: "Central India",
    value: "₹450 Cr",
    img: "/images/projects/project3.jpg"
  },
  {
    title: "Dharakoh – Maramjhiri Railway Section",
    location: "Madhya Pradesh",
    value: "₹320 Cr",
    img: "/images/projects/project4.jpg"
  },
  {
    title: "Sehore Four Lane Road Upgrade",
    location: "Madhya Pradesh",
    value: "₹150 Cr",
    img: "/images/projects/project5.jpg"
  },
  {
    title: "Wardhaman Textile Concrete Road",
    location: "Maharashtra",
    value: "₹45 Cr",
    img: "/images/projects/project6.jpg"
  },
  {
    title: "Railway Tunnel Lining Project",
    location: "Central Railway",
    value: "₹210 Cr",
    img: "/images/projects/project7.jpg"
  },
  {
    title: "Industrial Road Construction",
    location: "Aurangabad",
    value: "₹95 Cr",
    img: "/images/projects/project8.jpg"
  },
  {
    title: "Major Bridge Construction",
    location: "Western Central Railway",
    value: "₹175 Cr",
    img: "/images/projects/project9.jpg"
  },
  {
    title: "Cut & Cover Railway Tunnel",
    location: "Bhopal Division",
    value: "₹120 Cr",
    img: "/images/projects/project10.jpg"
  }
];

export default function Projects() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <Image
          src="/images/projects/hero.jpg"
          alt="projects"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-orange-500">Projects</span>
          </h1>
          <p className="mt-4 text-lg">
            Delivering large scale infrastructure across India
          </p>
        </div>
      </section>


      {/* PROJECT GRID */}
      <section className="py-20 px-6 md:px-16 bg-gray-100">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >

              <Image
                src={project.img}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-[220px] object-cover"
              />

              <div className="p-6">

                <h3 className="text-lg font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  📍 {project.location}
                </p>

                <p className="text-orange-500 font-semibold mt-2">
                  Project Value: {project.value}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </section>


      {/* CTA SECTION */}
      <section className="py-20 bg-gray-900 text-white text-center">

        <h2 className="text-3xl font-bold mb-4">
          Want to work with us?
        </h2>

        <p className="mb-8 text-gray-300">
          Let's build world-class infrastructure together.
        </p>

        <a
          href="/contact"
          className="bg-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 transition"
        >
          Contact Us
        </a>

      </section>

    </div>
  );
}