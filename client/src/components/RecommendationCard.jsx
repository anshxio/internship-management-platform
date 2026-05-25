function RecommendationCard({ title, company }) {
  return (
    <div className="flex items-center justify-between bg-gray-50 rounded-3xl p-6 hover:shadow-lg transition duration-300">
      {/* LEFT */}
      <div className="flex items-center gap-5">
        {/* ICON */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500"></div>

        {/* TEXT */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>

          <p className="text-gray-600 text-lg mt-1">
            Perfect match • {company}
          </p>
        </div>
      </div>

      {/* BUTTON */}
      <button className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-medium hover:bg-blue-700 transition">
        Apply
      </button>
    </div>
  );
}

export default RecommendationCard;
