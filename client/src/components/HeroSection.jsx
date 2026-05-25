import { ArrowRight } from "lucide-react";
import heroImage from "../assets/hero-image.png";
function HeroSection() {
    return (
        <section className="w-full px-10 py-20">
            <div className=" flex items-center justify-between">
                {/* Left side of the hero section */}
                <div>
                    <p className="text-blue-600 font-semibold mb-4">
                        #1 Internship Platform
                    </p>
                    <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                        Find Internship <br />
                        That <span className=" text-blue-600">actually fit</span> <br />
                        Your Skills.

                    </h1>
                    <p className="text-gray-600 text-lg mt-6 max-w-xl">
                        Connect with top companies, track your applications, and land your dream internship—all in one modern platform designed for ambitious students.
                    </p>
                    {/* Buttons */}
                    <div className="flex items-center mt-8 gap-6">
                        <button className="group bg-blue-600 text-white px-7 py-3 rounded-2xl font-medium hover:bg-blue-700 transition">
                            <div className="flex items-center gap-2 transition duration-300 group-hover:scale-110">
                                Explore Internships
                                <ArrowRight size={18}/>
                            </div> 
                        </button>
                        <button className="border border-gray-300 px-7 py-3 rounded-2xl font-medium">
                            Learn More
                        </button>
                    </div>
                </div>
                {/* Right side of the hero section */}
                <div className="w-[600px] h-[420px] bg-blue-100 rounded-[40px] flex items-center justify-center">
                    <img src={heroImage} alt="Hero" className="w-full h-full object-cover rounded-[40px]" />
                </div>
            </div>
        </section>
    );
}
export default HeroSection;