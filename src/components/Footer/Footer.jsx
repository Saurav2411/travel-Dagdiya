import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope,
} from "react-icons/fa";
import NatureVid from "../../assets/video/mains.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Destinations", link: "/best-places" },
  { title: "Blogs", link: "/blogs" },
];

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
     
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      >
        <source src={NatureVid} type="video/mp4" />
      </video>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
         

          <div className="space-y-4">
            <h1 className="flex items-center gap-3 text-3xl font-bold">
              <img src="src/assets/logo.jpg" alt="Logo" className="h-14 rounded-lg" />
              Travel Dagdiya
            </h1>
            <p className="text-sm text-gray-300">
              Explore Uttarakhand and beyond with Travel Dagdiya, your guide to hidden gems and beautiful destinations.
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <FaLocationArrow className="text-primary" /> Uttarakhand, India
              </p>
              <p className="flex items-center gap-2">
                <FaMobileAlt className="text-primary" /> +91 9876543210
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-primary" /> contact@traveldagdiya.com
              </p>
            </div>

           
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-xl transition-transform duration-300 hover:scale-125">
                <FaInstagram />
              </a>
              <a href="#" className="text-xl transition-transform duration-300 hover:scale-125">
                <FaFacebook />
              </a>
              <a href="#" className="text-xl transition-transform duration-300 hover:scale-125">
                <FaLinkedin />
              </a>
            </div>
          </div>

         
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
              <ul className="space-y-2 text-gray-300">
                {FooterLinks.map((link) => (
                  <li key={link.title} className="hover:text-primary transition-colors duration-300">
                    <Link to={link.link} onClick={() => window.scrollTo(0, 0)}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-3">Explore</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-primary transition-colors duration-300">Uttarakhand Tourism</li>
                <li className="hover:text-primary transition-colors duration-300">Travel Guides</li>
                <li className="hover:text-primary transition-colors duration-300">Budget Trips</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-3">Support</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-primary transition-colors duration-300">FAQs</li>
                <li className="hover:text-primary transition-colors duration-300">Contact Us</li>
                <li className="hover:text-primary transition-colors duration-300">Privacy Policy</li>
              </ul>
            </div>
          </div>

         
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Subscribe to Our Newsletter</h2>
            <p className="text-sm text-gray-300">
              Get exclusive Uttarakhand travel tips and hidden gems delivered to your inbox!
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="absolute right-2 top-2 bg-primary px-4 py-2 rounded-lg text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

       
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          © 2024 Travel Dagdiya. All Rights Reserved | Saurav Chuahan
        </div>
      </div>
    </footer>
  );
};

export default Footer;
