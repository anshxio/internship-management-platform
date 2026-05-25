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
        <p className="text-2xl text-gray-600  mt-6 max-w-4xl mx-auto leading-relaxed">
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
          <div className="grid grid-cols-3 gap-8">
            <DashboardStatCard
              title="Applications"
              number="24"
              subtitle="+3 this weeks"
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
            <RecommendationCard
              title="Software Engineer Intern"
              company="Google"
            />

            <RecommendationCard 
            title="Product Manager Intern" 
            company="Meta" />

            <RecommendationCard 
            title="UX Design Intern" 
            company="Apple" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Dashboard;
