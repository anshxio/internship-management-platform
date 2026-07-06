function StatsCard({ icon, number, title, bgColor }) {
  return (
    <div className="rounded-3xl border border-blue-200 p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8 lg:p-10">
      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${bgColor} text-2xl text-white sm:h-16 sm:w-16 sm:text-3xl`}>
        {icon}
      </div>
      <h1 className="mt-6 text-4xl font-bold text-gray-900 sm:mt-8 sm:text-5xl">
        {number}
      </h1>
      <p className="mt-3 text-xl text-gray-600 sm:text-2xl">{title}</p>
    </div>
  );
}

export default StatsCard;