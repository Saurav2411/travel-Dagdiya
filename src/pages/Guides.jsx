import React from "react";
import { motion } from "framer-motion";

import guideRavi from "../assets/guides/guide_ravi.jpg";
import guideMeera from "../assets/guides/guide_meera.jpg";
import guideAnkit from "../assets/guides/guide_ankit.jpg";
import guidePriya from "../assets/guides/guide_priya.jpg";
import guideVikas from "../assets/guides/guide_vikas.jpg";
import guideNeha from "../assets/guides/guide_neha.jpg";


const guides = [
  {
    name: "Ravi Sharma",
    experience: "10 years",
    specialization: "Adventure & Trekking",
    location: "Rishikesh, Uttarakhand",
    image: guideRavi,
  },
  {
    name: "Meera Joshi",
    experience: "8 years",
    specialization: "Cultural & Historical Tours",
    location: "Nainital, Uttarakhand",
    image: guideMeera,
  },
  {
    name: "Ankit Rawat",
    experience: "6 years",
    specialization: "Wildlife & Nature Exploration",
    location: "Jim Corbett National Park, Uttarakhand",
    image: guideAnkit,
  },
  {
    name: "Priya Singh",
    experience: "7 years",
    specialization: "Religious & Spiritual Tours",
    location: "Haridwar, Uttarakhand",
    image: guidePriya,
  },
  {
    name: "Vikas Negi",
    experience: "9 years",
    specialization: "Hiking & Camping",
    location: "Mussoorie, Uttarakhand",
    image: guideVikas,
  },
  {
    name: "Neha Bhandari",
    experience: "5 years",
    specialization: "Local Food & Handicrafts",
    location: "Dehradun, Uttarakhand",
    image: guideNeha,
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Guides = () => {
  return (
    <div className="container mx-auto px-6 pt-24 pb-16">
     
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-extrabold text-center text-gray-800 mb-4"
      >
        Meet Our Expert Travel Guides
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg text-gray-600 mb-10 text-center"
      >
        Our experienced guides will ensure you have an unforgettable journey through Uttarakhand.
      </motion.p>


      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-center"
      >
        {guides.map((guide, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0,0,0,0.15)" }}
            className="relative bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden transition-all duration-300 max-w-[300px] mx-auto hover:shadow-2xl hover:bg-opacity-30"
          >
            <motion.img
              src={guide.image}
              alt={`Portrait of travel guide ${guide.name}`}
              className="w-full h-48 object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{guide.name}</h2>
              <p className="text-gray-600 mt-1">
                <strong>Experience:</strong> {guide.experience}
              </p>
              <p className="text-gray-600">
                <strong>Specialization:</strong> {guide.specialization}
              </p>
              <p className="text-gray-900 font-bold mt-2">📍 {guide.location}</p>

        
              <motion.button
                aria-label={`Contact ${guide.name}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="mt-4 bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded-lg shadow-md transition-all w-full"
              >
                Contact Guide
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Guides;
