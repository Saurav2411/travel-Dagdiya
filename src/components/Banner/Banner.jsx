import React from "react";
import TravelImg from "../../assets/travelbox.png";
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="min-h-[550px] bg-gradient-to-b from-green-200 to-blue-300">
      <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* Image Section */}
            <div data-aos="flip-up" className="flex justify-center">
              <img
                src={TravelImg}
                alt="Uttarakhand Travel"
                className="max-w-[450px] h-[350px] w-full mx-auto object-cover drop-shadow-lg rounded-lg"
              />
            </div>

            {/* Text Content Section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0 lg:px-16">
              <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-green-900">
                Discover the Beauty of Uttarakhand
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm text-gray-700 tracking-wide leading-7"
              >
                From the divine temples of Kedarnath & Badrinath to the serene hills of Almora and the adventurous trails of Rudranath, experience the heart of the Himalayas. Explore lush forests, snow-capped peaks, and spiritual retreats like never before.
              </p>

              {/* Features Section */}
              <div data-aos="zoom-in" className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <FeatureCard icon={<MdFlight />} bg="bg-blue-200 dark:bg-blue-400" label="Trekking & Flights" />
                  <FeatureCard icon={<MdOutlineLocalHotel />} bg="bg-orange-200 dark:bg-orange-400" label="Hotels & Stays" />
                </div>
                <div className="space-y-6">
                  <FeatureCard icon={<IoIosWifi />} bg="bg-green-200 dark:bg-green-400" label="Internet & Connectivity" />
                  <FeatureCard icon={<IoFastFoodSharp />} bg="bg-yellow-200 dark:bg-yellow-400" label="Local Cuisine" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Feature Card Component
const FeatureCard = ({ icon, bg, label }) => {
  return (
    <div className="flex items-center gap-4">
      <div className={`text-4xl h-12 w-12 shadow-md p-4 rounded-full ${bg}`}>
        {icon}
      </div>
      <p className="text-lg font-medium text-gray-800">{label}</p>
    </div>
  );
};

export default Banner;
