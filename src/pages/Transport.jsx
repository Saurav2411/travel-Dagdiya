import React from "react";
import { motion } from "framer-motion";

import utcBus from "../assets/transport/utc_bus.jpg";
import privateTaxi from "../assets/transport/private_taxi.jpg";
import sharedJeep from "../assets/transport/shared_jeep.jpg";
import bikeRental from "../assets/transport/bike_rental.jpg";
import helicopterService from "../assets/transport/helicopter_service.jpg";


const transportOptions = [
  {
    name: "Uttarakhand Transport Corporation (UTC) Buses",
    description: "State-run buses connecting major cities and towns across Uttarakhand and neighboring states.",
    price: "Varies by route and service type",
    image: utcBus,
  },
  {
    name: "Private Taxi Services",
    description: "Chauffeur-driven cars offering personalized travel experiences across the state.",
    price: "Approximately ₹3,500 per day",
    image: privateTaxi,
  },
  {
    name: "Shared Jeeps",
    description: "Cost-effective shared transport connecting remote areas and hill stations.",
    price: "₹100 - ₹500 per person, depending on distance",
    image: sharedJeep,
  },
  {
    name: "Bike Rentals",
    description: "Two-wheeler rentals for flexible and adventurous travel within cities and towns.",
    price: "₹1,000 per day",
    image: bikeRental,
  },
  {
    name: "Helicopter Services",
    description: "Aerial tours and pilgrim services to destinations like Kedarnath.",
    price: "Starting from ₹7,000 per person",
    image: helicopterService,
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Transport = () => {
  return (
    <div className="container mx-auto px-8 py-24">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-extrabold text-center text-gray-800 mb-6"
      >
        Transport Options in Uttarakhand
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto"
      >
        Explore the diverse transportation options to navigate the scenic landscapes of Uttarakhand.
      </motion.p>

    
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {transportOptions.map((option, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            className="relative bg-white bg-opacity-40 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transition-all duration-300 w-full max-w-[320px] mx-auto"
          >
            <img src={option.image} alt={option.name} className="w-full h-44 object-cover" />
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800">{option.name}</h2>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">{option.description}</p>
              <p className="text-gray-900 font-bold mt-3">💰 {option.price}</p>

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

export default Transport;
