function FeatureCards({ icon, title, description, backgroundColor }) {
  return (
    <div className="group cursor-pointer rounded-3xl border border-gray-200 p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${backgroundColor} text-white shadow-lg transition duration-300 group-hover:scale-110 sm:h-16 sm:w-16`}
      >
        {icon}
      </div>

      <h2 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 sm:mt-5 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default FeatureCards;