"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email) || name.trim() === "" || contact.length !== 10) {
      alert("Please enter valid Name, Contact Number and Email");
      return;
    }

    try {
      await fetch("https://sheetdb.io/api/v1/c5bmb4h2j4dtx", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              Name: name,
              Contact: contact,
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
      setContact("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="bg-white">

      {/* HERO SECTION */}

      <section className="relative h-[350px] md:h-[450px] lg:h-[550px] flex items-center justify-center text-white">
        <Image
          src="/images/contact/Hero.png"
          alt="services"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Contact <span className="text-orange-500">Us</span>
          </h1>
        </div>
      </section>

      {/* CONTACT SECTION */}

      <section className="py-20 px-6 md:px-16 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          {/* FORM */}

          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-6">
              Get In <span className="text-orange-500">Touch</span>
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="text"
                name="form_contact"
                placeholder="Your Contact Number"
                value={contact}
                onChange={(e) =>
                  /^[0-9]{0,10}$/.test(e.target.value) &&
                  setContact(e.target.value)
                }
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-lg font-semibold transition duration-300"
              >
                SUBMIT FORM
              </button>

            </form>
          </div>

          {/* CONTACT DETAILS */}

          <div className="bg-gray-900 text-white p-10 rounded-2xl shadow-xl flex flex-col justify-center space-y-10">

            <div>
              <h4 className="text-orange-500 font-semibold text-lg">
                Our Location
              </h4>
              <p className="text-gray-300 mt-2">
                127, Tilak Nagar, Chhatrapati Sambhajinagar,  Aurangabad 431001
              </p>
            </div>

            <div>
              <h4 className="text-orange-500 font-semibold text-lg">
                Phone Number
              </h4>
              <p className="text-gray-300 mt-2">
                +91 94059 11203
              </p>
            </div>

            <div>
              <h4 className="text-orange-500 font-semibold text-lg">
                Email Address
              </h4>
              <p className="text-gray-300 mt-2">
                info@npinfaraindia.in
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* MAP SECTION */}

   <section className="py-16 bg-gray-100 text-center">
  <h2 className="text-3xl font-bold mb-10">
    Find Us <span className="text-orange-500">On Map</span>
  </h2>

  <div className="h-[450px] w-full">
    <iframe
      src="https://maps.google.com/maps?q=127%20Tilak%20Nagar%20Chhatrapati%20Sambhajinagar%20Aurangabad%20431001&t=&z=15&ie=UTF8&iwloc=&output=embed"
      className="w-full h-full border-0"
      loading="lazy"
      allowFullScreen
    ></iframe>
  </div>
</section>

    </div>
  );
}