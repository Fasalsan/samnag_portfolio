
import { PenTool, Layout, Grid } from "lucide-react"; // lucide-react icons

export default function Skills() {

  const skills = [
    {
      icon: <PenTool size={40} className="text-red-500 mx-auto rotate-270" />,
      title: "UX-UI Design",
      desc: "I finished design some projects for any bank, a Grocery store, UI screen, and E-commerce application, and sometimes have designed web application too. I can use prototype and advance understanding on it.",
    },
    {
      icon: <Layout size={40} className="text-red-500 mx-auto" />,
      title: "Graphic Design",
      desc: "I finished design some projects for any Poster, a Logo, Banner, and draw 3D application, and sometimes have designed used with advance effect too. I can use prototype and advance understanding on it.",
    },
    {
      icon: <Grid size={40} className="text-red-500 mx-auto" />,
      title: "Microsoft Office",
      desc: "I can use the Microsoft office as MS. Word, Excel, and PowerPoint for presentation, input data, summary report, new product or any projects show to our team and management of company.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          My <span className="text-red-500">Skills</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-200 border-2 border-red-400 rounded-2xl p-6 text-center flex flex-col items-center shadow hover:shadow-lg transition"
            >
              {skill.icon}
              <h3 className="text-lg font-semibold mt-4 mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-6">
                {skill.desc}
              </p>
              <button
                className="bg-red-500 text-white font-semibold px-8 py-3 rounded-xl shadow hover:bg-red-600 transition">
                Click
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
