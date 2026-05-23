function FeatureCards({
    icon,
    title,
    description,
    backgroundColor
}) {
    return(
        <div className="group border border-gray-200 rounded-3xl p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
            {/* Icon */}
            <div className={`w-16 h-16 rounded-2xl ${backgroundColor} flex items-center justify-center text-white shadow-lg transition duration-300 group-hover:scale-110`}>
                {icon}
            </div>

            {/* Title */}
            <h2 className="text-4xl font-bold text-gray-900 mt-8">
                {title}
            </h2>
            {/* Description */}
            <p className="text-gray-600 text-lg mt-5 leading relaxed">
                {description}
            </p>
        </div>
    );
}
export default FeatureCards;