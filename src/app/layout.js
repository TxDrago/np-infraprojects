//-------------------------- Import Global CSS --------------------
// import "@/styles/globals.css";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar.js";
import Footer from "@/components/Footer/Footer.js";


export const metadata = {
  title: "N.P. Infraprojects India Pvt. Ltd.",
  description:
    "Road and Railway Line Construction Company specializing in highways, track laying and infrastructure development.",

  icons: {
    icon: "/images/Navbar/Logo.jpeg", 
    shortcut: "/images/Navbar/Logo.jpeg",
    apple: "/images/Navbar/Logo.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}