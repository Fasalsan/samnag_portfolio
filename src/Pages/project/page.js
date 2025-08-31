"use client";
import Image from "next/image";
import phone from "@/../public/assets/phone.jpg";
import phone2 from "@/../public/assets/phone2.jpg";
import phone3 from "@/../public/assets/phone3.jpg";
import poster from "@/../public/assets/poster.jpg";
import poster3 from "@/../public/assets/poster3.jpg";
import poster2 from "@/../public/assets/poster2.jpg";

const cardData = [
  {
    img: phone,
    title: "UX UI Design",
    description:
      "For the final exam for the course, I designed an E-commerce application for individuals that includes Food, beverages, Clothes, Jewelry, Electronics devices...etc. I focused on 2 functions: Payment Method and OTP verification. The project includes 180+ screens.",
    link: "",
  },
  {
    img: phone2,
    title: "ICT Portal",
    description:
      "A learning portal that helps students access various programming resources including C#, C++, and Java. It includes user authentication, search, and bookmarking features.",
    link: "",
  },
  {
    img: phone3,
    title: "Clothing Store",
    description:
      "A mobile-first UI for browsing, filtering, and buying fashion items. It supports category browsing, product details, and secure checkout.",
    link: "",
  },
  {
    img: poster,
    title: "Clothing Store",
    description:
      "A mobile-first UI for browsing, filtering, and buying fashion items. It supports category browsing, product details, and secure checkout.",
    link: "",
  },
  {
    img: poster3,
    title: "Clothing Store",
    description:
      "A mobile-first UI for browsing, filtering, and buying fashion items. It supports category browsing, product details, and secure checkout.",
    link: "",
  },
  {
    img: poster2,
    title: "Clothing Store",
    description:
      "A mobile-first UI for browsing, filtering, and buying fashion items. It supports category browsing, product details, and secure checkout.",
    link: "",
  },
];

export default function Project() {

  const handleClick = (title) => {
    alert(`You are Clicking on ${title} Project`);
  };
  return (
    <div className="w-full h-fit">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-red-500">Project</span>
      </h2>

      <div className="w-full bg-gray-200 flex items-center justify-center px-6">
        <div className="w-full h-fit py-20 max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cardData.map((card, idx) => (
            <div
              key={idx}
              className="relative group w-full h-[450px] border-4 border-red-300 rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Background Image */}
              <Image
                src={card.img}
                alt="App Mockup"
                className="object-cover"
                fill
              />

              {/* Slide-Up Overlay */}
              <div className="absolute inset-0 flex items-end">
                <div
                  className="w-full h-[80%] bg-gradient-to-b from-orange-500 to-transparent text-black text-center p-6 rounded-t-3xl
                    transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
                >
                  <h2 className="text-xl font-bold mb-4">{card.title}</h2>
                  <p className="text-lg leading-tight mb-4">
                    {card.description}
                  </p>

                  {/* Link Button */}
                  <button
                    // href={card.link}\
                    onClick={() => handleClick(card.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-500 text-white px-4 py-2 rounded-full shadow hover:bg-red-600 transition cursor-pointer"
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
