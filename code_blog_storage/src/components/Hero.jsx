import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Top Icons Bar */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-5">
        {/* GitHub */}
        <a
          href="https://github.com/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-300 transition"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-300 transition"
        >
          <FaLinkedin />
        </a>

        {/* Resume Download */}
        <a
          href="https://drive.google.com/file/d/YOUR_RESUME_ID/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-gray-200 transition"
        >
          <FaDownload />
          Resume
        </a>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome Vishal Kamath
          </h1>

          <p className="text-lg md:text-xl text-gray-200">
            Here you can store your code snippets, write blogs, and document your
            journey as a developer — all in one place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
