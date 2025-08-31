"use client"
import { ReactTyped } from "react-typed";
import Image from "next/image";
import somnang from "@/../public/assets/nang.PNG"
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaPaperPlane } from "react-icons/fa";
const socialIcons = [
    { id: 1, icon: <FaFacebookF />, link: "https://facebook.com/yourprofile" },
    { id: 2, icon: <FaLinkedinIn />, link: "https://linkedin.com/in/yourprofile" },
    { id: 3, icon: <FaEnvelope />, link: "mailto:youremail@example.com" },
    { id: 4, icon: <FaPaperPlane />, link: "https://t.me/yourtelegram" },
];

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 bg-white w-full">
            {/* Left Side */}
            <div className="md:w-1/2 space-y-6">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">Hello It’s Me</h1>
                    <h2 className="text-5xl font-extrabold">
                        <span className="block">SEM SAMNANG</span>
                    </h2>
                    <h3 className="text-2xl font-semibold flex gap-3">
                        And I’m a
                        <span >
                            <ReactTyped
                                strings={["UX UI Designer", "Graphic Designer"]}
                                typeSpeed={200}      // slower typing
                                backSpeed={150}      // slower deleting
                                backDelay={500}     // wait 2s before deleting
                                loop
                                className="text-red-500 font-bold"
                            />

                        </span>
                    </h3>

                </div>

                <p className="text-gray-700 max-w-md">
                    I’m SEM SAMNANG, a designer who loves transforming ideas into beautiful visuals. Whether it’s logos, layouts, or digital experiences, I believe that design show a story and connects people. Take a look around — I hope my work inspires you as much as I’ve enjoyed creating it.
                </p>

                {/* Social Icons */}
                <div className="flex flex-col pt-6 gap-9">
                    <div className="flex gap-5 text-red-500 text-2xl">
                        {socialIcons.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-2 cursor-pointer border-2 border-transparent rounded-full
                       transition-all duration-300 transform 
                       hover:border-red-500 hover:text-red-600"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>


                    {/* Download CV Button */}
                    <button className="bg-red-500 text-white font-bold text-lg px-6 py-3 rounded-xl hover:scale-110 duration-150 cursor-pointer
                   hover:bg-red-600 transition w-fit 
                   hover:shadow-[0_0_30px_10px_rgba(252,79,70,0.6)]">
                        Download CV
                    </button>
                </div>

            </div>

            {/* Right Side */}
            <div className=" mt-14 ">
                <div className="relative w-[350px] h-[350px] rounded-full bg-neonBlue shadow-[0_0_60px_30px_rgba(252,79,70,0.6)] overflow-hidden flex items-center justify-center bg-[#FC4F46]">

                    <Image
                        src={somnang}
                        alt="Unsplash Example"
                        width={250}
                        height={120}
                        className="rounded-lg object-cover "
                    />
                </div>
            </div>
        </div>
    );
}