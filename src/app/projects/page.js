"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const projects = [
  {
    title: "Barkhera – Budhni 3rd Railway Line",
    contractor:
      "Rail Vikas Nigam Limited through Gannon Dunkerly & Co Ltd subletted to NP Infraprojects India Pvt Ltd",
    participation: "100%",
    startDate: "25-Sep-2018",
    period: "36 Months",
    remarks: "Additional work for safety",
    summary:
      "Construction of formation, bridges, buildings and electrified 3rd BG railway line between Barkhera and Budhni.",
  },
  {
    title: "Nagpur – Katol NH 353J Highway",
    contractor:
      "NHAI through Joint Stock Company Vozrozoddenie subletted to NP Infraprojects India Pvt Ltd",
    participation: "100%",
    startDate: "1-Oct-2021",
    period: "24 Months",
    remarks:
      "Work delayed due to tiger corridor and forest land extension (BG valid upto 31-03-26)",
    summary:
      "Construction of four lane highway between Nagpur and Katol under NH-353J EPC mode.",
  },
  {
    title: "Barkhera – Budni Shotcreting Works",
    contractor:
      "RVNL through Gannon Dunkerly & Co Ltd subletted to NP Infraprojects India Pvt Ltd",
    participation: "100%",
    startDate: "4-Sep-2023",
    period: "12 Months",
    remarks: "Extension requested after BG expiry period",
    summary:
      "Shotcreting, gabions and catchwater drain works in Barkhera–Budni railway section.",
  },
  {
    title: "Nagpur – Itarsi 3rd Railway Line",
    contractor:
      "KEC International Limited subletted to NP Infraprojects India Pvt Ltd",
    participation: "100%",
    startDate: "9-Nov-2023",
    period: "4 Months",
    remarks: "On going works and valid till Mar 2026",
    summary:
      "Earthwork in formation for Nagpur–Itarsi third railway line project.",
  },
  {
    title: "Sehore Road Upgrade Project",
    contractor: "Chief Engineer PWD Bhopal through Rudranee-NP Infra JV",
    participation: "100%",
    startDate: "3-Feb-2024",
    period: "24 Months + 10 Years Defect Liability Period",
    remarks: "On going works and valid till Jan 2027",
    summary:
      "Upgradation of 4-lane paved shoulder road between Malibayan, Salkanpur and Neelkachhar.",
  },
  {
    title: "Dharakoh – Maramjhiri Tunnel Project",
    contractor:
      "RVNL through Holistic Technoengineers Ltd subletted to NP Infraprojects India Pvt Ltd",
    participation: "100%",
    startDate: "11-Nov-2025",
    period: "12 Months + 24 Months Defect Liability Period",
    remarks: "Work order received in name of Holistic",
    summary:
      "Construction of tunnels, bridges, ballast supply and formation works.",
  },
  {
    title: "Yavatmal – Nanded Railway Line",
    contractor: "RVNL through Sushee Infra & Holistic Technoengineers Ltd",
    participation: "100%",
    startDate: "25-Jun-2024",
    period: "30 Months + 6 Months Defect Liability Period",
    remarks: "On going works and valid till Oct 2027",
    summary:
      "Construction of roadbed, bridges, station buildings and electrification works.",
  },
  {
    title: "Mangliyagaon – Kheri Railway Line",
    contractor:
      "RVNL through DP Jain Infrastructure & Holistic Technoengineers Ltd",
    participation: "100%",
    startDate: "5-Dec-2024",
    period: "30 Months + 6 Months Defect Liability Period",
    remarks: "On going works and valid till Jun 2027",
    summary:
      "Construction of roadbed, bridges, buildings and railway infrastructure works.",
  },
];

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[350px] md:h-[450px] lg:h-[550px] flex items-center justify-center text-white">
        <Image
          src="/images/OurProjects/Our.png"
          alt="projects"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center px-6 ">
          <h1 className="text-3xl md:text-5xl font-bold">
            Our <span className="text-orange-500">Projects</span>
          </h1>

          <p className="mt-4 text-gray-200 text-xl">
            Delivering large scale infrastructure across India
          </p>
        </div>
      </section>

      {/* PROJECT CARDS */}
      <section className="py-20 px-6 md:px-16 bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>

              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-semibold">Contractor:</span>{" "}
                  {project.contractor}
                </p>

                <p>
                  <span className="font-semibold">Participation:</span>{" "}
                  {project.participation}
                </p>

                <p>
                  <span className="font-semibold">Start Date:</span>{" "}
                  {project.startDate}
                </p>

                <p>
                  <span className="font-semibold">Construction Period:</span>{" "}
                  {project.period}
                </p>
              </div>

              <button
                onClick={() => toggleCard(index)}
                className="mt-4 text-orange-600 font-medium hover:underline"
              >
                {openIndex === index ? "Hide Details" : "View Details"}
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-3 text-sm text-gray-600 border-t pt-3 space-y-2"
                >
                  <p>{project.summary}</p>

                  <p className="text-gray-500">
                    <strong>Remarks:</strong> {project.remarks}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Want to work with us?</h2>

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
