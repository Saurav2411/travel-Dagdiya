import React from "react";

const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="bg-gradient-to-b from-green-100 to-blue-200 py-6">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-green-600 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl text-gray-900">
            Must-Visit Locations in Uttarakhand
          </h1>

          <p className="text-gray-700 text-md mb-4">
            Experience the divine beauty of Uttarakhand, from the spiritual town of **Srinagar Garhwal** to the majestic peaks of **Kedarnath**, **Rudranath**, and the serene landscapes of **Almora**.
          </p>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13802.439405034585!2d78.77237949322467!3d30.218297719859067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390921f05ba7d6c9%3A0xf87bfc1fc79c7dd5!2sSrinagar%2C%20Uttarakhand%20246174!5e0!3m2!1sen!2sin!4v1710792186385!5m2!1sen!2sin"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl border border-green-600"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
