import somnang from "@/../public/assets/nang.PNG"
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="bg-gray-200 py-12">
      <div className="w-full mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          About <span className="text-red-500">Me</span>
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left: Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-[15px] border-red-500 shadow-[0_0_40px_rgba(239,68,68,0.7)]">
              <Image
                src={somnang} // put your image in /public folder
                alt="Profile"
                
                width={250}
                height={150}
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-3">UX UI Designer</h3>
            <p className="text-gray-800 leading-relaxed mb-6">
              I’m a graduated with bachelor degree of Computer Science at Royal
              University of Phnom Penh and I finished the UX UI course at the
              ICT center (ICT Professional Training Center) and have many
              platforms of apps and web. Now seeking new opportunity to
              challenge and interest with your company. I appreciate and match
              with these position.
            </p>

            {/* Button */}
            <button className="bg-red-500 text-white font-semibold px-10 py-3 rounded-xl shadow hover:bg-red-600 transition">
              See More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
