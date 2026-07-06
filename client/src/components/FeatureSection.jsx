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
    <section className="px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
          Everything you need to succeed
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl lg:text-2xl">
          Powerful features designed to make your internship search effortless and effective.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-10 xl:mt-20">
        <FeatureCards
          icon={<MousePointerClick />}
          title="Easy Apply"
          description="Apply to multiple internships with one click using saved profiles."
          backgroundColor="bg-blue-600"
        />
        <FeatureCards
          icon={<ShieldCheck />}
          title="Verified Recruiters"
          description="All companies are verified to ensure legitimate opportunities for students."
          backgroundColor="bg-green-600"
        />
        <FeatureCards
          icon={<FileText />}
          title="Resume Upload"
          description="Upload your resume once and use it across multiple applications seamlessly."
          backgroundColor="bg-yellow-600"
        />
        <FeatureCards
          icon={<LayoutDashboard />}
          title="Smart Dashboard"
          description="Track all your applications, interviews, and offers in one beautiful interface."
          backgroundColor="bg-purple-600"
        />
        <FeatureCards
          icon={<ClipboardCheck />}
          title="Internship Tracking"
          description="Never lose track of where you applied with our intelligent tracking system."
          backgroundColor="bg-pink-600"
        />
        <FeatureCards
          icon={<Bell />}
          title="Notifications"
          description="Get instant updates on application status and new matching opportunities."
          backgroundColor="bg-indigo-600"
        />
      </div>
    </section>
  );
}

export default FeatureSection;