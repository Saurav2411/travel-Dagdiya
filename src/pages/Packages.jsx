import React from "react";
import { motion } from "framer-motion";
import adventureImg from "../assets/package/adventure.jpg";
import religiousImg from "../assets/package/religious.jpg";
import wildlifeImg from "../assets/package/wildlife.jpg";


const travelPackages = [
  {
    title: "Adventure Tour",
    description: "Experience trekking, river rafting, and camping in Rishikesh and Auli.",
    image: adventureImg,
    cost: "₹8,999 per person",
    duration: "5 Days / 4 Nights",
  },
  {
    title: "Religious Tour",
    description: "Visit Kedarnath, Badrinath, Haridwar, and Rishikesh for a divine experience.",
    image: religiousImg,
    cost: "₹10,000 per person",
    duration: "6 Days / 5 Nights",
  },
  {
    title: "Nature & Wildlife Tour",
    description: "Explore Jim Corbett National Park and Nainital’s serene landscapes.",
    image: wildlifeImg,
    cost: "₹7,000 per person",
    duration: "4 Days / 3 Nights",
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Packages = () => {
  return (
    <div className="container mx-auto px-8 py-24">
     
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-extrabold text-center text-gray-800 mb-6"
      >
        Uttarakhand Travel Packages
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto"
      >
        Choose from a variety of travel packages designed for adventure, spirituality, and relaxation.
      </motion.p>


      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {travelPackages.map((pkg, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
            className="relative bg-white bg-opacity-50 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transition-all duration-300 w-full max-w-[320px] mx-auto"
          >
            <img src={pkg.image} alt={pkg.title} className="w-full h-44 object-cover rounded-t-lg" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">{pkg.title}</h2>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">{pkg.description}</p>
              <p className="text-gray-900 font-bold mt-3">💰 {pkg.cost}</p>
              <p className="text-gray-700 mt-1">📅 {pkg.duration}</p>


              <motion.button
                whileHover={{ scale: 1.1 }}
                className="mt-5 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition-all w-full"
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
