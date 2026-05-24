import InternshipCard from "./InternshipCard";

function FeatureInternship() {
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
        <InternshipCard
          icon="🚀"
          title="Frontend Developer Intern"
          company="TechCorp"
          location="Remote"
          stipend="25,000/mo"
          posted="2 days ago"
          skills={["React", "TypeScript", "Tailwind"]}
        />

        <InternshipCard
          icon="📊"
          title="Data Science Intern"
          company="DataFlow"
          location="Remote"
          stipend="30,000/mo"
          posted="1 week ago"
          skills={["Python", "ML", "Pandas"]}
        />

        <InternshipCard
          icon="🎨"
          title="UI/UX Design Intern"
          company="DesignHub"
          location="Delhi"
          stipend="20,000/mo"
          posted="3 days ago"
          skills={["Figma", "Design", "Prototyping"]}
        />
        <InternshipCard
          icon="☁️"
          title="DevOps Intern"
          company="CloudSys"
          location="Bangalore"
          stipend="22,000/mo"
          posted="5 days ago"
          skills={["AWS", "Docker", "CI/CD"]}
        />
        <InternshipCard
          icon="📱"
          title="Mobile Dev Intern"
          company="MobileTech"
          location="Bangalore"
          stipend="25,000/mo"
          posted="1 day ago"
          skills={["React Native", "iOS", "Android"]}
        />
        <InternshipCard
          icon="🤖"
          title="AI Research Intern"
          company="AILabs"
          location="Gurgaon"
          stipend="30,000/mo"
          posted="4 days ago"
          skills={["PyTorch", "Research", "NLP"]}
        />
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
