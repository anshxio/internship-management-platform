import StatsCard from "./StatsCard";
import { BriefcaseBusiness, Users, GraduationCap } from "lucide-react";

function StatsSection() {
  return (
    <section className="px-4 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        <StatsCard
          icon={<BriefcaseBusiness />}
          number="500+"
          title="Internships"
          bgColor="bg-blue-600"
        />
        <StatsCard
          icon={<Users />}
          number="200+"
          title="Recruiters"
          bgColor="bg-green-600"
        />
        <StatsCard
          icon={<GraduationCap />}
          number="5K+"
          title="Students"
          bgColor="bg-purple-600"
        />
      </div>
    </section>
  );
}

export default StatsSection;