import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Bhuwan Chand",
    text: "The serenity of Auli was breathtaking. Skiing in the snow-covered hills was an unforgettable experience!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Emily Carter",
    text: "Rishikesh is the ultimate destination for yoga and adventure! The Ganga Aarti at Triveni Ghat was mesmerizing.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Kishan Rawat",
    text: "Kedarnath’s spiritual energy is unparalleled. The trek was challenging but absolutely worth it!",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Lucas Martínez",
    text: "Rafting in Rishikesh was thrilling! The natural beauty and spiritual vibe make it a must-visit.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Megha Bisht",
    text: "Chopta is a hidden gem. The Tungnath trek offered stunning views of the Himalayas.",
    img: "https://picsum.photos/105/105",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700, 
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="py-10 bg-gradient-to-b from-green-100 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
       
        <div className="text-center mb-12 max-w-xl mx-auto">
          <p className="text-sm font-semibold text-green-600">Testimonials</p>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            What Travelers Say
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Discover the experiences of visitors who explored the beauty of
            Uttarakhand.
          </p>
        </div>

       
        <div className="max-w-3xl mx-auto">
          <Slider {...settings}>
            {testimonialData.map(({ id, name, text, img }) => (
              <div key={id} className="px-4">
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-center transform hover:scale-105 transition duration-300">
                  <img
                    src={img}
                    alt={name}
                    className="w-16 h-16 mx-auto rounded-full border-4 border-green-300"
                  />
                  <h2 className="text-lg font-semibold mt-4 text-gray-700 dark:text-white">
                    {name}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-300 mt-2 text-sm">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
