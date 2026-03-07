"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

/* ---------------- Animation Variant ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// -------------------------- Home page -------------------------- //
export default function Home() {

  return (
    <main className="bg-white overflow-hidden">

      <HeroCarousel />
      <AboutExpertise />
      <SectorOperations />
      <CoreCompetencies />
      <ProjectCounter />
      <Visionaries />
      {/* <Awards /> */}
      {/* <div className="w-full h-1 bg-red-600"></div> */}
      <GetInTouch />

    </main>
  );
}

  // -------------------------- Hero Carousel -------------------------- //
  function HeroCarousel() {
  const slides = [
    "/images/hero/hero1.jpeg",
    "/images/hero/hero2.jpg",
    "/images/hero/hero3.jpeg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[90vh] w-full">
      <Image
        src={slides[index]}
        alt="Hero"
        fill
        className="object-cover transition-all duration-700"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center text-white px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building India's Railway & Infrastructure Future
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Precision • Strength • Reliability
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// -------------------------- About & Expertise Section -------------------------- //
function AboutExpertise() {
  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-6">
            About <span className="text-orange-500">N.P. Infraprojects</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We specialize in railway line construction, track laying,
            highway development and major infrastructure projects across India.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-orange-500">
            Our Expertise
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>✔ Railway Track Construction</li>
            <li>✔ Heavy Earthwork & Excavation</li>
            <li>✔ Civil & Structural Engineering</li>
            <li>✔ Large Scale Infrastructure Projects</li>
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Image
            src="/images/about/about2.jpg"
            alt="About"
            width={600}
            height={400}
            className="rounded-xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

// -------------------------- Sector of Operation -------------------------- //

function SectorOperations() {
  const sectors = [
    "Railway Infrastructure",
    "Highway Construction",
    "Urban Development",
    "Industrial Projects",
  ];

  return (
    <section className="py-20 bg-gray-900 text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl font-bold mb-12"
        >
          Sector of Operation
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8">
          {sectors.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-xl hover:bg-orange-600 transition"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


// -------------------------- Core Competencies -------------------------- //
function CoreCompetencies() {
  return (
    <section className="py-20 px-6 md:px-16">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-3xl font-bold text-center mb-12"
      >
        Our Core Competencies
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          "Advanced Engineering Techniques",
          "On-Time Project Delivery",
          "High Safety Standards",
        ].map((item, i) => (
          <div
            key={i}
            className="p-8 shadow-lg rounded-xl text-center hover:shadow-2xl transition"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

// -------------------------- Number of Projects & Achievements -------------------------- //
function ProjectCounter() {
  return (
    <section className="py-20 bg-orange-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-12">
        Our Achievements
      </h2>

      <div className="grid md:grid-cols-4 gap-10">
        <Stat number="20+" label="Projects Completed" />
        <Stat number="20+" label="Years Experience" />
        <Stat number="500+" label="Skilled Workforce" />
        <Stat number="3" label="States Covered" />
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <h3 className="text-4xl font-bold">{number}</h3>
      <p className="mt-2">{label}</p>
    </div>
  );
}

// -------------------------- Recognized by Visionaries -------------------------- //

function Visionaries() {
  return (
    <section className="py-20 px-6 md:px-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-12">
        Recognized by Visionaries
      </h2>

      <p className="max-w-3xl mx-auto text-gray-600">
        Our company has been acknowledged by industry leaders,
        railway authorities and infrastructure experts for delivering
        large-scale high-quality projects across India.
      </p>
    </section>
  );
}


// -------------------------- Awards & Appreciations -------------------------- //
// function Awards() {
//   return (
//     <section className="py-20 bg-gray-900 text-white text-center">
//       <h2 className="text-3xl font-bold mb-12">
//         Awards & Appreciations
//       </h2>

//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         <div className="bg-gray-800 p-6 rounded-xl">
//           Excellence in Infrastructure Development
//         </div>
//         <div className="bg-gray-800 p-6 rounded-xl">
//           Best Railway Contractor Award
//         </div>
//         <div className="bg-gray-800 p-6 rounded-xl">
//           Safety & Quality Recognition
//         </div>
//       </div>
//     </section>
//   );
// }


//--------------------------- Get In Touch Section -------------------------- //
function GetInTouch() {
 const formRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email) || name.trim() === "") {
      alert("Please enter valid Name and Email");
      return;
    }

    try {
      await fetch("https://sheetdb.io/api/v1/vx91vtn4uszhy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              Name: name,
              Email: email,
              Message: message,
            },
          ],
        }),
      });

      if (formRef.current) {
        emailjs.sendForm(
          "service_egxeldj",
          "template_ysw7f37",
          formRef.current,
          "sCeBvf_xHkwUmN77f"
        );
      }

      alert("Form submitted successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <section className="bg-gray-900 text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-orange-500 font-semibold mb-2">
            Contact Us
          </h4>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get In Touch With Us
          </h2>

          <p className="text-gray-300 mb-10">
            We are ready to deliver excellence in railway and infrastructure
            projects. Reach out to us for collaboration, quotations, or project discussions.
          </p>

          <div className="space-y-6">
            <div>
              <h5 className="text-orange-500 font-semibold">Location</h5>
              <p className="text-gray-300">
                Greater Noida, West - 201009
              </p>
            </div>

            <div>
              <h5 className="text-orange-500 font-semibold">Phone</h5>
              <p className="text-gray-300">
                +91 9580364089
              </p>
            </div>

            <div>
              <h5 className="text-orange-500 font-semibold">Email</h5>
              <p className="text-gray-300">
                info@savvyr.in
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white text-black p-10 rounded-2xl shadow-2xl space-y-6"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            />

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-lg font-semibold transition duration-300"
            >
              SUBMIT REQUEST
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}


