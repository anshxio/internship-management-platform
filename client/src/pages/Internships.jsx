import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import InternshipCard from "../components/InternshipCard";
import Navbar from "../components/Navbar";

function Internships() {
  const [internships, setInternships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/internships`,
        );
        setInternships(response.data.internships);
      } catch (requestError) {
        console.error(requestError);
        setError("We couldn't load internships. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchInternships();
  }, []);

  return (
    <>
      <Navbar />
      <main className="px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            Explore Internships
          </h1>
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Find an opportunity that fits your skills and career goals.
          </p>
        </header>

        {isLoading ? (
          <p className="mt-12 text-center text-lg text-gray-600" role="status">
            Loading internships...
          </p>
        ) : error ? (
          <p className="mt-12 text-center text-lg text-red-600" role="alert">
            {error}
          </p>
        ) : internships.length === 0 ? (
          <p className="mt-12 text-center text-lg text-gray-600">
            No internships have been posted yet. Please check back soon.
          </p>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
            {internships.map((internship) => (
              <InternshipCard
                key={internship.id}
                icon="🚀"
                title={internship.title}
                company={internship.company}
                location={internship.location}
                stipend={internship.stipend}
                posted={
                  internship.created_at
                    ? new Date(internship.created_at).toLocaleDateString()
                    : "Recently posted"
                }
                skills={Array.isArray(internship.skills) ? internship.skills : []}
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Internships;
