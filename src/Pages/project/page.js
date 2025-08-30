import Image from "next/image";
import phone from "@/../public/assets/phone.jpg";

const cardData = [
  {
    title: "UX UI Design",
    description:
      "For the final exam for the course, I designed an E-commerce application for individuals that includes Food, beverages, Clothes, Jewelry, Electronics devices...etc. I focused on 2 functions: Payment Method and OTP verification. The project includes 180+ screens.",
  },
  {
    title: "ICT Portal",
    description:
      "A learning portal that helps students access various programming resources including C#, C++, and Java. It includes user authentication, search, and bookmarking features.",
  },
  {
    title: "Clothing Store",
    description:
      "A mobile-first UI for browsing, filtering, and buying fashion items. It supports category browsing, product details, and secure checkout.",
  },
];

export default function Project() {
  return (

    <div className="w-full">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-red-500">Project</span>
      </h2>
      <div className="w-full h-screen bg-gray-200 flex items-center justify-center px-6">

        <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cardData.map((card, idx) => (
            <div
              key={idx}
              className="relative group w-full h-[450px] border-4 border-red-300 rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Background Image */}
              <Image
                src={phone}
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
                  <h2 className="text-xl font-bold mb-6">{card.title}</h2>
                  <p className="text-lg leading-tight">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
