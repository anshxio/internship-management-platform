import SideBar from "../components/SideBar";
import DashboardStatCard from "../components/DashboardStatCard";
import RecommendationCard from "../components/RecommendationCard";

function Dashboard() {
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
          Your personal command center
        </h1>

        <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-gray-600 sm:text-xl lg:text-2xl">
          Track your applications, discover opportunities, and manage your
          entire internship journey.
        </p>
      </div>

      {/* Dashboard Content */}
      <div className="mt-12 flex flex-col gap-8 lg:mt-20 lg:flex-row lg:gap-10">
        {/* Left Panel */}
        <div className="w-full lg:w-75">
          <SideBar />
        </div>

        {/* Right Panel */}
        <div className="flex-1">
          {/* Top Stats */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8">
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
          <div className="mt-10 flex flex-col gap-6 rounded-3xl border border-orange-200 bg-orange-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            {/* Left Content */}
            <div className="flex items-center gap-6">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-white text-3xl">
                🎯
              </div>

              {/* Text */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Complete your profile
                </h2>

                <p className="mt-2 text-base text-gray-600 sm:text-xl">
                  Add 3 more skills to increase your visibility by 40%
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="rounded-2xl bg-orange-500 px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600 sm:px-8 sm:py-4 sm:text-lg">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
