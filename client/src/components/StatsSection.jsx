import StatsCard from "./StatsCard";
import {
    BriefcaseBusiness,
    Users,
    GraduationCap,
} from "lucide-react";

function StatsSection() {
    return (
        <section className="px-10 py-20">
            <div className="grid grid-cols-3 gap-10">
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