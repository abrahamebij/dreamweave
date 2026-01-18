import Link from "next/link";
import Img from "../ui/Img";
import { FaVideo } from "react-icons/fa";

export const LandingHero = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 max-w-7xl mx-auto pt-16 lg:pt-0 flex items-center">
      <div className="gap-12 flex flex-col lg:flex-row items-center justify-between w-full">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            DreamWeave
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl lg:mx-0 mx-auto">
            Transform your dreams into stunning visualizations with AI-powered
            interpretation and psychological insight
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/dream"
              className="px-4 py-2 lg:px-8 lg:py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all transform hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
            >
              Start Recording
            </Link>
            <Link
              href="https://youtu.be/jIrZOCIUYO0?si=Brso6B0QbtrLf2So"
              className="px-4 py-2 lg:px-8 lg:py-4 flex items-center justify-center gap-2 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Demo <FaVideo />
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 max-w-2xl mx-auto lg:mx-0 p-1 rounded-2xl bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 shadow-[0_0_30px_rgba(168,85,247,0.5)]">
          <Img
            src="/landing.jpg"
            className="w-full rounded-2xl"
            alt="Landing Image"
          />
        </div>
      </div>
    </section>
  );
};
