import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import coderImg from "../assets/coder.png";

export default function Home() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-16 px-6 md:px-12 lg:px-20 ">
      {/* Left Content */}
      <div className="text-center md:text-left max-w-xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
            Syeda Shakeela
          </span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          A passionate <span className="font-semibold text-gray-800">React Developer</span> 🚀 
          crafting modern, responsive, and elegant web applications.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 justify-center md:justify-start">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-500 transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-500 transition"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-500 transition"
          >
            <FaTwitter size={22} />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="mb-10 md:mb-0 flex justify-center">
        <div className="relative">
          <img
            src={coderImg}
            alt="Coding illustration"
            className="w-72 md:w-[380px] lg:w-[420px] drop-shadow-xl rounded-xl"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 blur-2xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}
