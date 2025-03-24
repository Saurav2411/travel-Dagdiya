import React, { useState } from "react";

const Hero = () => {
  const [priceValue, setPriceValue] = useState(3000);

  return (
    <div className="relative h-full">
      <div className="h-full flex justify-center items-center p-6 bg-black/40">
        <div className="container grid grid-cols-1 gap-6">
         
          <div className="text-white text-center">
            <p data-aos="fade-up" className="text-sm tracking-wide text-gray-200">
              Discover the Beauty of Uttarakhand 🌄
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-extrabold text-4xl text-white"
            >
              Journey To Himalayas! 🏕️
            </p>
          </div>

          
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4 bg-white/20 backdrop-blur-lg shadow-lg rounded-lg p-6 relative border border-white/30"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-3">
              
              <div>
                <label htmlFor="destination-input" className="opacity-80 block text-gray-100">
                  Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination-input"
                  placeholder="Mussoorie, Chopta, Rishikesh..."
                  className="w-full bg-gray-100/70 text-gray-900 my-2 rounded-full p-3 focus:outline-blue-500 focus:ring-2 ring-gray-400"
                />
              </div>

              
              <div>
                <label htmlFor="date-input" className="opacity-80 block text-gray-100">
                  Travel Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date-input"
                  className="w-full bg-gray-100/70 text-gray-900 my-2 rounded-full p-3 focus:outline-blue-500 focus:ring-2 ring-gray-400"
                />
              </div>

              
              <div>
                <label htmlFor="price-range" className="opacity-80 block text-gray-100">
                  <div className="w-full flex justify-between items-center">
                    <p>Budget (INR)</p>
                    <p className="font-bold text-lg text-blue-400">₹ {priceValue}</p>
                  </div>
                </label>
                <div className="bg-gray-100/70 rounded-full p-3 flex items-center justify-center">
                  <input
                    type="range"
                    id="price-range"
                    aria-label="Select max budget"
                    className="appearance-none w-full h-2 rounded-full bg-gradient-to-r from-blue-400 to-gray-500"
                    min="2000"
                    max="50000"
                    value={priceValue}
                    step="1000"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>
            </div>

           
            <button className="bg-gradient-to-r from-green-400 to-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              🌄 Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
