import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About Us
          </h1>
          <p>
            Welcome to <strong>Travel Dagdiya</strong>, your ultimate guide to exploring the breathtaking landscapes, rich culture, and hidden gems of Uttarakhand. Whether you're an adventure enthusiast, a nature lover, or a spiritual seeker, we bring you the best travel experiences, curated itineraries, and expert tips to make your journey unforgettable.
          </p>
          <br />
          <p>
            From the serene beauty of Nainital and Mussoorie to the spiritual vibes of Rishikesh and Kedarnath, we cover it all. Discover local traditions, offbeat destinations, and thrilling trekking routes that showcase the true essence of Devbhoomi. Join us as we take you on a journey through Uttarakhand’s majestic mountains, lush valleys, and charming villages.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
