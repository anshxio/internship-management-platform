import { ArrowRight } from "lucide-react";
import heroImage from "../assets/hero-image.png";

function HeroSection() {
  return (
    <section className="w-full px-4 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full lg:max-w-2xl">
          <p className="mb-4 font-semibold text-blue-600">#1 Internship Platform</p>
          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Find Internship <br />
            That <span className="text-blue-600">actually fit</span> <br />
            Your Skills.
          </h1>
          <p className="mt-6 max-w-xl text-base text-gray-600 sm:text-lg">
            Connect with top companies, track your applications, and land your dream internship—all in one modern platform designed for ambitious students.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
            <button className="group rounded-2xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 sm:px-7 sm:py-3">
              <div className="flex items-center gap-2 transition duration-300 group-hover:scale-110">
                Explore Internships
                <ArrowRight size={18} />
              </div>
            </button>
            <button className="rounded-2xl border border-gray-300 px-6 py-3 font-medium sm:px-7 sm:py-3">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex h-[280px] w-full max-w-[600px] items-center justify-center rounded-[40px] bg-blue-100 sm:h-[360px] lg:h-[420px] lg:w-[600px]">
          <img
            src={heroImage}
            alt="Hero"
            className="h-full w-full rounded-[40px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;