"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const services = [
  {
    title: "Railway Construction",
    img: "/images/OurServices/Service3.png",
    desc: "Construction of railway lines, track laying, ballastless tracks, bridges and railway infrastructure projects."
  },
  {
    title: "Highway & Road Construction",
    img: "/images/OurServices/Service4.png",
    desc: "Execution of highway, national highway, and industrial road construction projects across India."
  },
  {
    title: "Earthwork & Excavation",
    img: "/images/OurServices/Service3.png",
    desc: "Heavy earthwork, soil cutting, grading, and excavation using modern machinery and equipment."
  },
  {
    title: "Bridge Construction",
    img: "/images/OurServices/Service3.png",
    desc: "Construction of major and minor bridges for railway and highway infrastructure."
  },
  {
    title: "Tunnel Construction",
    img: "/images/OurServices/Service3.png",
    desc: "Execution of tunnel excavation, lining, and structural works for railway and infrastructure projects."
  },
  {
    title: "Industrial Infrastructure",
    img: "/images/OurServices/Service3.png",
    desc: "Construction of industrial roads, civil structures, and infrastructure facilities."
  }
];

export default function Services() {
  return (
    <div>

      {/* HERO */}
      <section className="relative h-[550px] flex items-center justify-center text-white">
        <Image
          src="/images/OurServices/services2.png"
          alt="services"
          fill
          className="object-fit-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-orange-500">Services</span>
          </h1>
          <p className="mt-4 text-xl">
            Delivering high-quality infrastructure and engineering solutions
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-6 md:px-16 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >

              <Image
                src={service.img}
                alt={service.title}
                width={400}
                height={250}
                className="w-full h-[220px] object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 md:px-16 bg-gray-900 text-white">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-12">
            Why Choose <span className="text-orange-500">NP Infraprojects</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-10">

            <div>
              <h3 className="text-3xl font-bold text-orange-500">7+</h3>
              <p>Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-500">250+</h3>
              <p>Heavy Machinery</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-500">100+</h3>
              <p>Projects Completed</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-500">1000+</h3>
              <p>Workforce</p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}