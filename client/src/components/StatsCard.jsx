function StatsCard({ icon, number, title, bgColor }) {
  return (
    <div className="border border-blue-200 rounded-3xl p-10 hover:-translate-y-2 hover:shadow-xl transition duration-300">
      {/* ICON */}
      <div className={`w-16 h-16 rounded-2xl ${bgColor} flex items-center justify-center text-white text-3xl`}>
        {icon}
      </div>
      {/* NUMBER */}
      <h1 className="text-5xl font-bold text-gray-900 mt-8">
        {number}
      </h1>
      {/* TITLE */}
      <p className="text-gray-600 text-2xl mt-3">
        {title}
      </p>

    </div>

  );
}

export default StatsCard;