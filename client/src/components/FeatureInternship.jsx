import { useEffect, useState } from "react";
import axios from "axios";
import InternshipCard from "./InternshipCard";

function FeatureInternship() {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/internships`);
        setInternships(res.data.internships);
      } catch (err) {
        console.error(err);
      }
    };
    fetchInternships();
  }, []);

  return (
    <section className="px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
          Featured Internships
        </h1>

        <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-gray-600 sm:text-xl lg:text-2xl">
          Discover opportunities from top companies looking for talented students like you.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-10 xl:mt-20">
        {internships.map((internship) => (
          <InternshipCard
            icon="🚀"
            key={internship.id}
            title={internship.title}
            company={internship.company}
            location={internship.location}
            stipend={internship.stipend}
            posted={new Date(internship.created_at).toLocaleDateString()}
            skills={["React", "TypeScript", "Tailwind"]}
          />
        ))}
      </div>

      <div className="mt-12 flex justify-center sm:mt-16">
        <button className="rounded-2xl border-2 border-gray-300 bg-[#08122F] px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#0B173A] sm:px-10 sm:py-4 sm:text-xl">
          View All Internships
        </button>
      </div>
    </section>
  );
}

export default FeatureInternship;
