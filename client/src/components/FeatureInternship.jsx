import { useEffect,useState} from "react";
import axios from "axios";
import InternshipCard from "./InternshipCard";

function FeatureInternship() {
  const [internships,setInternships] = useState([]);
  useEffect(()=>{
    const fetchInternships = async () => {
      try{
        const res = await axios.get("http://localhost:5000/api/internships");
        setInternships(res.data.internships);
      } catch(err){
        console.error(err);

      }
    };
    fetchInternships();
  },[]);
  console.log(internships);
  return (
    <section className="px-10 py-24">
      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">
          Featured Internships
        </h1>

        <p className="text-gray-600 text-2xl mt-6 max-w-4xl mx-auto leading-relaxed">
          Discover opportunities from top companies looking for talented
          students like you.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-3 gap-10 mt-20">

        {internships.map((internship) =>(
          <InternshipCard
          icon="🚀"
          key ={internship.id}
          title={internship.title}
          company= {internship.company}
          location={internship.location}
          stipend={internship.stipend}
          posted= {new Date(internship.created_at).toLocaleDateString()}
          skills={["React", "TypeScript", "Tailwind"]}
        />
        ) )}
      </div>
      <div className="flex justify-center mt-16">
        <button className="bg-[#08122F] text-white px-10 py-4 rounded-2xl border-2 border-gray-300 text-xl font-semibold hover:bg-[#0B173A] transition-all duration-300 hover:scale-105">
          View All Internships
        </button>
      </div>
    </section>
  );
}

export default FeatureInternship;
