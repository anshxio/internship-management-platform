import axios from "axios";
import {useState} from "react";
import DashboardStatCard from "../components/DashboardStatCard";

function RecruiterDashboard() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [stipend, setStipend] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  // handle form submission
  const handleSubmit = async () => {
    try{

      const token = localStorage.getItem("token");

      const res = await axios.post(`${import.meta.env.VITE_API_URL}/internships/create`,{
        title,
        company,
        location,
        stipend,
        description,
      },
      {
        headers: {
          token: token,
        },
      }
    );
      
      console.log(res.data);
      alert("Internship posted successfully!");
      // here we are clearing the form 
      setTitle("");
      setCompany("");
      setLocation("");
      setStipend("");
      setDescription("");

    } catch(err){
      console.error(err);
      alert("Failed to post internship");
    }
  };
  
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
      {/*Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
          Recruit smarter, not harder
        </h1>
        <p className="mx-auto mt-6 max-w-full text-lg leading-relaxed text-gray-600 sm:text-xl lg:text-2xl">
          Post internships, manage applications, and find the perfect candidates
          for your team.
        </p>
      </div>
      {/* Dashboard Content */}
      <div className="mt-12 flex flex-col gap-8 lg:mt-20 lg:flex-row lg:gap-8">
        {/* Left Panel */}
        <div className=" flex-1">
          <div className="border border-gray-200 rounded-3xl p-8 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Post New Internship
              </h1>

              <button className="w-14 h-14 rounded-2xl bg-blue-600 text-white text-4xl flex items-center justify-center hover:bg-blue-700 transition">
                +
              </button>
            </div>
            {/* Form */}
            <div className="mt-10">
              <div>
                <label className="text-lg font-medium text-gray-700">
                  Job Title
                </label>
                <input
                  value={title}
                  onChange ={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="e.g. Software Engineering Intern"
                  className="w-full mt-3 p-4 border border-gray-200 px-6 py-4 text-lg rounded-2xl  focus:ring-2 focus:ring-blue-600 transition"
                />
              </div>
              <div className="mt-6">
                <label className="text-lg font-medium text-gray-700">
                  Company
                </label>
                <input
                  value={company}
                  onChange ={(e) => setCompany(e.target.value)}
                  type="text"
                  placeholder="e.g. Google"
                  className="w-full mt-3 p-4 border border-gray-200 px-6 py-4 text-lg rounded-2xl  focus:ring-2 focus:ring-blue-600 transition"
                />
              </div>
              {/* Location & Stipend */}
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-lg font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    value={location}
                    onChange ={(e) => setLocation(e.target.value)}
                    type="text"
                    placeholder="e.g. Remote "
                    className="w-full mt-3 p-4 border border-gray-200 px-6 py-4 text-lg rounded-2xl  focus:ring-2 focus:ring-blue-600 transition"
                  />
                </div>
                <div>
                  <label className="text-lg font-medium text-gray-700">
                    Stipend
                  </label>
                  <input
                    value={stipend}
                    onChange ={(e) => setStipend(e.target.value)}
                    type="text"
                    placeholder="e.g. ₹20,000/month"
                    className="w-full mt-3 p-4 border border-gray-200 px-6 py-4 text-lg rounded-2xl  focus:ring-2 focus:ring-blue-600 transition"
                  />
                </div>
              </div>
              {/* Description */}
              <div className="mt-6">
                <label className="text-lg font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange ={(e) => setDescription(e.target.value)}
                  rows="5"
                  placeholder="e.g. You will be working on exciting projects and gaining hands-on experience..."
                  className="w-full mt-3 p-4 border border-gray-200 px-6 py-4 text-lg rounded-2xl resize-none focus:ring-2 focus:ring-blue-600 transition"
                  rows="4"
                />
              </div>
              {/* BUTTON */}
              <button className="w-full mt-10 bg-blue-600 text-white py-5 rounded-2xl text-xl font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-[1.02]"
               onClick={handleSubmit}>
                Publish Internship
              </button>
            </div>
          </div>
        </div>
        {/* Right Panel */}
        <div className="w-full lg:w-105">
          <div className="flex flex-col gap-8">
            <DashboardStatCard
              title="Active Listings"
              number="8"
              subtitle="2 closing soon"
              bgColor="bg-blue-600"
              icon="💼"
            />

            <DashboardStatCard
              title="Total Applications"
              number="342"
              subtitle="+45 this week"
              bgColor="bg-green-500"
              icon="👥"
            />

            <DashboardStatCard
              title="Shortlisted"
              number="28"
              subtitle="Ready to interview"
              bgColor="bg-purple-500"
              icon="⭐"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default RecruiterDashboard;
