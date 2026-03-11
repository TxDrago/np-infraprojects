//-------------------------- Import Global CSS --------------------
// import "@/styles/globals.css";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar.js";
import Footer from "@/components/Footer/Footer.js";


export const metadata = {
  title: "NP Infraprojects India Pvt. Ltd.",
  description:
    "Road and Railway Line Construction Company specializing in highways, track laying and infrastructure development.",

  icons: {
    icon: "/images/Navbar/logo2.png", 
    shortcut: "/images/Navbar/logo2.png",
    apple: "/images/Navbar/logo2.png",
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