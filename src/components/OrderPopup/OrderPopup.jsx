import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50">
          <div className="relative p-6 shadow-xl bg-white dark:bg-gray-900 rounded-lg w-[350px] md:w-[420px] transform scale-100 transition-all duration-300">
            
            
            <button
              className="absolute top-3 right-3 text-gray-700 dark:text-gray-300 hover:text-red-500 transition-all duration-200"
              onClick={() => setOrderPopup(false)}
            >
              <IoCloseOutline className="text-2xl" />
            </button>

            
            <h2 className="text-2xl font-bold text-green-700 dark:text-green-400 text-center">
              Book Your Uttarakhand Trip 🏔️
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Explore the Himalayas, rivers & divine beauty 🌿✨
            </p>

           
            <div className="mt-5 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className=" text-white w-full rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="text-white w-full rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Your Address"
                className="text-white w-full rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            
            <div className="mt-6 flex justify-center">
              <button
                className="bg-gradient-to-r from-green-600 to-blue-500 hover:scale-105 transition-transform duration-300 text-white font-semibold px-6 py-2 rounded-md shadow-lg"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
