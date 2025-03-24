import React from "react";
import { motion } from "framer-motion";

// Import hotel images
import himalayanRetreat from "../assets/hotels/himalayan_retreat.jpg";
import gangesView from "../assets/hotels/ganges_view.jpg";
import pineWoods from "../assets/hotels/pine_woods.jpg";
import snowPeak from "../assets/hotels/snow_peak_resort.jpg";
import valleyView from "../assets/hotels/valley_view_lodge.jpg";
import sereneRiverside from "../assets/hotels/serene_riverside.jpg";

// Hotel Data
const hotelListings = [
  {
    name: "The Himalayan Retreat",
    location: "Mussoorie, Uttarakhand",
    image: himalayanRetreat,
    price: "₹1299 per night",
    rating: "4.7/5",
  },
  {
    name: "Ganges View Resort",
    location: "Rishikesh, Uttarakhand",
    image: gangesView,
    price: "₹1599 per night",
    rating: "4.5/5",
  },
  {
    name: "Pine Woods Stay",
    location: "Nainital, Uttarakhand",
    image: pineWoods,
    price: "₹1500 per night",
    rating: "4.6/5",
  },
  {
    name: "Snow Peak Resort",
    location: "Auli, Uttarakhand",
    image: snowPeak,
    price: "₹1800 per night",
    rating: "4.8/5",
  },
  {
    name: "Valley View Lodge",
    location: "Dehradun, Uttarakhand",
    image: valleyView,
    price: "₹1500 per night",
    rating: "4.5/5",
  },
  {
    name: "Serene Riverside Resort",
    location: "Jim Corbett National Park, Uttarakhand",
    image: sereneRiverside,
    price: "₹1500 per night",
    rating: "4.7/5",
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Hotels = () => {
  return (
    <div className="container mx-auto px-6 pt-24 pb-16">
  
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-extrabold text-center text-gray-800 mb-4"
      >
        Best Hotels & Resorts in Uttarakhand
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg text-gray-600 mb-10 text-center"
      >
        Discover the finest hotels and resorts offering comfort, luxury, and scenic beauty.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-center"
      >
        {hotelListings.map((hotel, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0,0,0,0.15)" }}
            className="relative bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden transition-all duration-300 max-w-[300px] mx-auto hover:shadow-2xl hover:bg-opacity-30"
          >
            <motion.img
              src={hotel.image}
              alt={`Hotel ${hotel.name}`}
              className="w-full h-48 object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{hotel.name}</h2>
              <p className="text-gray-600 mt-1">
                <strong>📍 Location:</strong> {hotel.location}
              </p>
              <p className="text-gray-900 font-bold mt-1">💰 {hotel.price}</p>
              <p className="text-yellow-500 font-semibold">⭐ {hotel.rating}</p>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="mt-4 bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded-lg shadow-md transition-all w-full"
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hotels;
