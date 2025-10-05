import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-400 text-4xl" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-4xl" /> },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-3 text-gray-800">My Skills</h2>
        <p className="text-gray-600">Technologies I work with</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto px-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="flex flex-col items-center justify-center bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300"
          >
            <div className="mb-3">{skill.icon}</div>
            <p className="text-gray-700 font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
