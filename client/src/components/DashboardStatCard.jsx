function DashboardStatCard({ title, number, subtitle, bgColor, icon }) {
  return (
    <div
      className={`${bgColor} rounded-3xl p-8 text-white flex flex-col justify-between min-h-[180px] transition duration-300 hover:-translate-y-2 hover:shadow-2xl`}
    >
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-medium">{title}</h3>

        <div className="text-3xl">{icon}</div>
      </div>

      {/* BOTTOM */}
      <div>
        <h1 className="text-6xl font-bold">{number}</h1>

        <p className="text-xl mt-2">{subtitle}</p>
      </div>
    </div>
  );
}

export default DashboardStatCard;
