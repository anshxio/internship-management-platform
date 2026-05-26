import DashboardStatCard from "../components/DashboardStatCard";
function RecruiterDashboard() {
  return (
    <section className="px-10 py-16">
      {/*Header */}
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">
          Recruit smarter, not harder
        </h1>
        <p className="text-2xl text-gray-600 mt-6 max-w-full mx-auto leading-relaxed">
          Post internships, manage applications, and find the perfect candidates
          for your team.
        </p>
      </div>
      {/* Dashboard Content */}
      <div className="flex gap-8 mt-20">
        {/* Left Panel */}
        <div className=" flex-1">
          <div className="border border-gray-200 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold text-gray-900">
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
                  type="text"
                  placeholder="e.g. Software Engineering Intern"
                  className="w-full mt-3 p-4 border border-gray-200 px-6 py-4 text-lg rounded-2xl  focus:ring-2 focus:ring-blue-600 transition"
                />
              </div>
              {/* Location & Stipend */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <label className="text-lg font-medium text-gray-700">
                    Location
                  </label>
                  <input
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
                    type="text"
                    placeholder="e.g. ₹20,000/month"
                    className="w-full mt-3 p-4 border border-gray-200 px-6 py-4 text-lg rounded-2xl  focus:ring-2 focus:ring-blue-600 transition"
                  />
                </div>
              </div>
              {/* BUTTON */}
              <button className="w-full mt-10 bg-blue-600 text-white py-5 rounded-2xl text-xl font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-[1.02]">
                Publish Internship
              </button>
            </div>
          </div>
        </div>
        {/* Right Panel */}
        <div className="w-[420px]">
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
