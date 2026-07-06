import { MapPin, DollarSign, Clock3, Bookmark } from "lucide-react";

function InternshipCard({
  icon,
  title,
  company,
  location,
  stipend,
  posted,
  skills,
}) {
  return (
    <div className="group cursor-pointer rounded-3xl border border-blue-200 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Top section */}
      <div className="flex items-start justify-between">
        {/* Icon */}
        <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-3xl text-4xl transition duration-300 group-hover:scale-110">
          {icon}
        </div>
        {/* Bookmark icon */}
        <Bookmark className="text-gray-400" />
      </div>
      {/* TITLE */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600 text-lg mt-2">{company}</p>
      </div>
      {/* Details */}
      <div className="mt-8 space-y-2">
        <div className="flex items-center gap-3 text-gray-600 text-lg">
          <MapPin size={20} />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600 text-lg">
          <div className="w-5 flex justify-center">
            <span className="text-lg font-semibold leading-none">₹</span>
          </div>

          <span>{stipend}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600 text-lg">
          <Clock3 size={20} />
          <span>{posted}</span>
        </div>
      </div>
      {/*skills */}
      <div className="flex flex-wrap gap-3 mt-8">
        {skills.map((skills, index) => (
          <span
            key={index}
            className="bg-gray-100 px-4 py-2 rounded-full text-gray-700"
          >
            {skills}
          </span>
        ))}
      </div>
      <button className="w-full mt-8 bg-blue-600 text-white py-4 rounded-2xl text-xl font-medium hover:bg-blue-700 transition">
        Apply Now
      </button>
    </div>
  );
}
export default InternshipCard;
