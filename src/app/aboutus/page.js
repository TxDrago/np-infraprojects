"use client";

import { motion } from "framer-motion";

export default function aboutus () {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative h-[400px] flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            About <span className="text-orange-500">Us</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-xl">
            Building infrastructure that shapes the future and empowers
            communities.
          </p>
        </div>
      </section>

      {/* ABOUT COMPANY */}
      <section className="py-20 px-6 md:px-16 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <motion.img
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            src="/about-company.jpg"
            className="rounded-xl shadow-lg"
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              About Our <span className="text-orange-500">Company</span>
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our company specializes in infrastructure development,
              construction management, and engineering excellence.
              With years of experience in delivering high-quality
              projects, we focus on innovation, sustainability,
              and client satisfaction.
            </p>

            <p className="text-gray-600 mt-4">
              Our team of experienced professionals ensures every
              project is executed with precision, efficiency,
              and the highest industry standards.
            </p>
          </motion.div>

        </div>
      </section>

      {/* FOUNDER / DIRECTORS */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-14">
            Our <span className="text-orange-500">Leadership</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white shadow-xl rounded-xl p-6"
            >
              <img
                src="/founder.jpg"
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold">
                Founder Name
              </h3>
              <p className="text-orange-500">Founder & CEO</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white shadow-xl rounded-xl p-6"
            >
              <img
                src="/director1.jpg"
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold">
                Director Name
              </h3>
              <p className="text-orange-500">Managing Director</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white shadow-xl rounded-xl p-6"
            >
              <img
                src="/director2.jpg"
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold">
                Director Name
              </h3>
              <p className="text-orange-500">Operations Director</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-20 px-6 md:px-16 bg-gray-900 text-white text-center">

        <h2 className="text-3xl font-bold mb-6">
          Our <span className="text-orange-500">Vision</span>
        </h2>

        <p className="max-w-3xl mx-auto text-gray-300">
          To become a globally recognized infrastructure company
          delivering innovative, sustainable, and high-quality
          projects that positively impact communities and industries.
        </p>

      </section>

      {/* MISSION */}
      <section className="py-20 px-6 md:px-16 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-14">
            Our <span className="text-orange-500">Mission</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

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
      <section className="py-20 text-center bg-white">

        <h2 className="text-3xl font-bold mb-6">
          Let's Build The <span className="text-orange-500">Future</span> Together
        </h2>

        <button className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition">
          Contact Us
        </button>

      </section>

    </div>
  );
}