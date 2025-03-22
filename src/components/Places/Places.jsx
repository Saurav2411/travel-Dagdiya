import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/nainital.jpg";
import Img2 from "../../assets/places/mussoorie.jpg";
import Img3 from "../../assets/places/kedarnath.jpg";
import Img4 from "../../assets/places/badrinath.jpg";
import Img5 from "../../assets/places/auli.jpg";
import Img6 from "../../assets/places/haridwar.jpg";
import Img7 from "../../assets/places/rishikesh.jpg";
import Img8 from "../../assets/places/chopta.jpg";
import Img9 from "../../assets/places/vff.jpg";
import Img10 from "../../assets/places/jimcorbett.jpg";
import Img11 from "../../assets/places/lansdowne.jpg";
import Img12 from "../../assets/places/munsiyari.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Nainital",
    location: "Uttarakhand",
    description:
      "The city of lakes, offering breathtaking views and a peaceful retreat amidst hills.",
    price: 5000,
    type: "Nature & Relaxation",
  },
  {
    img: Img2,
    title: "Mussoorie",
    location: "Uttarakhand",
    description:
      "Queen of Hills, famous for its colonial charm, stunning viewpoints, and lush greenery.",
    price: 5500,
    type: "Hill Station & Leisure",
  },
  {
    img: Img3,
    title: "Kedarnath",
    location: "Uttarakhand",
    description:
      "One of the Char Dham pilgrimage sites, surrounded by majestic Himalayan peaks.",
    price: 7000,
    type: "Spiritual & Trekking",
  },
  {
    img: Img4,
    title: "Badrinath",
    location: "Uttarakhand",
    description:
      "A sacred Hindu temple nestled in the Himalayas, attracting devotees and nature lovers alike.",
    price: 6800,
    type: "Spiritual & Adventure",
  },
  {
    img: Img5,
    title: "Auli",
    location: "Uttarakhand",
    description:
      "India's top skiing destination, offering panoramic views of the snow-covered Himalayas.",
    price: 7500,
    type: "Adventure & Snow Sports",
  },
  {
    img: Img6,
    title: "Haridwar",
    location: "Uttarakhand",
    description:
      "A divine city on the banks of the Ganges, famous for Ganga Aarti and spiritual experiences.",
    price: 4000,
    type: "Spiritual & Culture",
  },
  {
    img: Img7,
    title: "Rishikesh",
    location: "Uttarakhand",
    description:
      "The yoga capital of the world, offering adventure sports, rafting, and serene meditation spots.",
    price: 4500,
    type: "Spiritual & Adventure",
  },
  {
    img: Img8,
    title: "Chopta",
    location: "Uttarakhand",
    description:
      "A paradise for trekkers, offering lush green meadows and a gateway to Tungnath temple.",
    price: 6200,
    type: "Trekking & Nature",
  },
  {
    img: Img9,
    title: "Valley of Flowers",
    location: "Uttarakhand",
    description:
      "A UNESCO World Heritage Site, home to rare flora and breathtaking alpine flowers.",
    price: 7200,
    type: "Nature & Wildlife",
  },
  {
    img: Img10,
    title: "Jim Corbett National Park",
    location: "Uttarakhand",
    description:
      "India's oldest national park, perfect for wildlife lovers and tiger safaris.",
    price: 6800,
    type: "Wildlife & Adventure",
  },
  {
    img: Img11,
    title: "Lansdowne",
    location: "Uttarakhand",
    description:
      "A quiet hill station with colonial-era charm, pine forests, and breathtaking landscapes.",
    price: 5300,
    type: "Nature & Relaxation",
  },
  {
    img: Img12,
    title: "Munsiyari",
    location: "Uttarakhand",
    description:
      "A Himalayan gem known for trekking, snow-covered peaks, and stunning sunrise views.",
    price: 7500,
    type: "Adventure & Nature",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <div className="bg-gradient-to-b from-green-100 via-white to-blue-50 dark:bg-gray-900 py-10">
      <section data-aos="fade-up" className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-green-800 dark:text-green-300 border-l-8 border-green-500 py-2 pl-3 mb-8">
          Best Places to Visit in Uttarakhand 🏔️
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PlacesData.map((item, index) => (
            <PlaceCard
              handleOrderPopup={handleOrderPopup}
              key={index}
              {...item}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Places;
