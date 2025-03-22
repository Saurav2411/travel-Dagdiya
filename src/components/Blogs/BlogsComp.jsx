import React from "react";
import BlogCard from "./BlogCard";

import Img1 from "../../assets/places/badrinath.jpg";
import Img2 from "../../assets/places/kedarnath.jpg";
import Img3 from "../../assets/places/gangotri.jpg";
import Img4 from "../../assets/places/yamunotri.jpg";
import Img5 from "../../assets/places/nainital.jpg";
import Img6 from "../../assets/places/mussoorie.jpg";
import Img7 from "../../assets/places/rudranath.jpg";
import Img8 from "../../assets/places/almora.jpg";
import Img9 from "../../assets/places/himalayas.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Badrinath - The Sacred Dham",
    description:
      "Badrinath, dedicated to Lord Vishnu, is one of the most revered pilgrimage sites in India. Surrounded by the majestic Himalayas, it offers spiritual peace and breathtaking landscapes.",
    author: "Travel Enthusiast",
    date: "March 22, 2025",
  },
  {
    id: 2,
    image: Img2,
    title: "Kedarnath - The Land of Lord Shiva",
    description:
      "Kedarnath, one of the twelve Jyotirlingas of Lord Shiva, is an iconic pilgrimage destination. The temple stands against a stunning backdrop of snow-capped mountains.",
    author: "Spiritual Traveler",
    date: "March 18, 2025",
  },
  {
    id: 3,
    image: Img3,
    title: "Gangotri - Origin of the Holy Ganga",
    description:
      "Gangotri is the birthplace of the sacred Ganges River. Nestled in the Himalayas, it holds deep religious significance and offers a peaceful retreat for devotees and nature lovers.",
    author: "Explorer",
    date: "March 15, 2025",
  },
  {
    id: 4,
    image: Img4,
    title: "Yamunotri - Sacred Source of Yamuna",
    description:
      "Yamunotri, the source of the Yamuna River, is a revered pilgrimage site. The temple dedicated to Goddess Yamuna and the hot springs make it a unique spiritual journey.",
    author: "Adventure Seeker",
    date: "March 10, 2025",
  },
  {
    id: 5,
    image: Img5,
    title: "Nainital - The Lake District of India",
    description:
      "Nainital is a charming hill station known for its serene lakes, scenic beauty, and vibrant markets. A perfect getaway for nature lovers and adventure enthusiasts.",
    author: "Nature Lover",
    date: "March 5, 2025",
  },
  {
    id: 6,
    image: Img6,
    title: "Mussoorie - The Queen of Hills",
    description:
      "Mussoorie is a picturesque hill station offering stunning views of the Himalayas, colonial-era architecture, and a pleasant climate, making it a popular tourist destination.",
    author: "Hill Wanderer",
    date: "March 1, 2025",
  },
  {
    id: 7,
    image: Img7,
    title: "Rudranath - The Mystical Shiva Temple",
    description:
      "Rudranath is one of the Panch Kedar temples dedicated to Lord Shiva. It offers a challenging yet rewarding trek through dense forests and stunning meadows in the Garhwal Himalayas.",
    author: "Trekker",
    date: "February 25, 2025",
  },
  {
    id: 8,
    image: Img8,
    title: "Almora - The Cultural Heritage Town",
    description:
      "Almora is known for its rich cultural heritage, stunning views of the Himalayas, and vibrant local markets. It is a perfect blend of history, spirituality, and natural beauty.",
    author: "Culture Explorer",
    date: "February 20, 2025",
  },
  {
    id: 9,
    image: Img9,
    title: "Upper Himalayan Ranges - Majestic Peaks",
    description:
      "The Upper Himalayan ranges offer some of the most breathtaking views in the world. From snow-clad peaks to thrilling trekking routes, it is a paradise for adventure lovers and nature enthusiasts.",
    author: "Mountaineer",
    date: "February 15, 2025",
  },
];

const BlogsComp = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white py-10">
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Explore Uttarakhand
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {BlogsData.map((item) => (
            <BlogCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsComp;
