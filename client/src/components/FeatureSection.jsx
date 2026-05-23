import FeatureCards from "./FeatureCards";

import {
  MousePointerClick,
  ShieldCheck,
  FileText,
  LayoutDashboard,
  ClipboardCheck,
  Bell,
} from "lucide-react";

function FeatureSection() {
    return (
        <section className="px-10 py-24 ">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-900">
                    Everything you need to succeed
                </h1>

                <p className="text-gray-600 text-2xl mt-6 max-w-3xl mx-auto leading-relaxed">
                    Powerful features designed to make your internship
                    search effortless and effective.
                </p>

            </div>

            {/* Features grid */}
            <div className="grid grid-cols-3 gap-10 mt-20">
                <FeatureCards
                    icon = {<MousePointerClick />}
                    title = "Easy Apply" 
                    description ="Apply the multiple internships with one click using saved profiles."
                    backgroundColor="bg-blue-600"
                />
                <FeatureCards
                    icon = {<ShieldCheck />}
                    title = "Verified Recruiters" 
                    description ="All compaines are verified to ensure legimate opportunities for students."
                    backgroundColor="bg-green-600"
                />
                <FeatureCards
                    icon = {<FileText />}
                    title = "Resume Upload" 
                    description ="Upload your resume once and use it across multiple applications seamlessly."
                    backgroundColor="bg-yellow-600"
                />
                <FeatureCards
                    icon = {<LayoutDashboard />}
                    title = "Smart Dashboard" 
                    description ="Track all your applications, interviews, and offers in one beautiful interface."
                    backgroundColor="bg-purple-600"
                />
                <FeatureCards
                    icon = {<ClipboardCheck />}
                    title = "Internship Tracking" 
                    description ="Never lose a track of where you applied with our intelligent tracking system."
                    backgroundColor="bg-pink-600"
                />
                <FeatureCards
                    icon = {<Bell />}
                    title = "Notifications" 
                    description ="Get instant updates on application status and new matching opportunities."
                    backgroundColor="bg-indigo-600"
                />
            </div>
        </section>
    );
}
export default FeatureSection;