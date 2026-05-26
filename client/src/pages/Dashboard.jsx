import SideBar from "../components/Sidebar";
import DashboardStatCard from "../components/DashboardStatCard";
import RecommendationCard from "../components/RecommendationCard";

function Dashboard() {
  return (
    <section className="px-10 py-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">
          Your personal command center
        </h1>

        <p className="text-2xl text-gray-600 mt-6 max-w-4xl mx-auto leading-relaxed">
          Track your applications, discover opportunities, and manage your
          entire internship journey.
        </p>
      </div>

      {/* Dashboard Content */}
      <div className="flex gap-10 mt-20">
        {/* Left Panel */}
        <div className="w-[300px]">
          <SideBar />
        </div>

        {/* Right Panel */}
        <div className="flex-1">
          {/* Top Stats */}
          <div className="grid grid-cols-3 gap-8">
            <DashboardStatCard
              title="Applications"
              number="24"
              subtitle="+3 this week"
              bgColor="bg-blue-600"
              icon="📝"
            />

            <DashboardStatCard
              title="Interviews"
              number="5"
              subtitle="2 upcoming"
              bgColor="bg-green-500"
              icon="🎯"
            />

            <DashboardStatCard
              title="Profile"
              number="85%"
              subtitle="Complete"
              bgColor="bg-purple-500"
              icon="✅"
            />
          </div>

          {/* Recommendations */}
          <div className="mt-10 border border-gray-200 rounded-3xl p-8">
            <h1 className="text-4xl font-bold text-gray-900">
              Recommended for You
            </h1>

            <div className="flex flex-col gap-6 mt-8">
              <RecommendationCard
                title="Software Engineer Intern"
                company="Google"
              />

              <RecommendationCard
                title="Product Manager Intern"
                company="Meta"
              />

              <RecommendationCard title="UX Design Intern" company="Apple" />
            </div>
          </div>

          {/* Complete Profile Section */}
          <div className="mt-10 bg-orange-50 border border-orange-200 rounded-3xl p-8 flex items-center justify-between">
            {/* Left Content */}
            <div className="flex items-center gap-6">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-white text-3xl">
                🎯
              </div>

              {/* Text */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Complete your profile
                </h2>

                <p className="text-gray-600 text-xl mt-2">
                  Add 3 more skills to increase your visibility by 40%
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="bg-orange-500 text-white px-8 py-4 rounded-2xl text-lg font-medium hover:bg-orange-600 transition-all duration-300 hover:scale-105">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
