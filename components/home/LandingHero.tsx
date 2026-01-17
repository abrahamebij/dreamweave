import Link from "next/link";
import Img from "../ui/Img";

export const LandingHero = () => {
  return (
    <section className="min-h-screen px-4 max-w-7xl mx-auto flex items-center">
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
              className="px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
            >
              Start Recording
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
            >
              Learn More
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
