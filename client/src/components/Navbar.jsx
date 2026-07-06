import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="w-full px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-between gap-4 sm:justify-start">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
                I
              </div>
              <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
                InternFlow
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 sm:gap-8 sm:text-base">
            <Link to="/">Home</Link>
            <Link to="/internships">Internships</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            <Link to="/login" className="text-sm font-medium text-gray-700 sm:text-base">
              Login
            </Link>
            <Link
              to="/register"
              className="rounded-2xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 sm:px-5 sm:py-2.5 sm:text-base"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;