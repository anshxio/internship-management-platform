import {
  LayoutDashboard,
  BriefcaseBusiness,
} from "lucide-react";
import { Link } from "react-router-dom";

function SideBar() {
  const linkClass =
    "flex items-center gap-4 rounded-3xl border border-gray-200 px-6 py-6 text-xl font-medium transition hover:shadow-lg";

  return (
    <nav className="flex flex-col gap-6" aria-label="Dashboard navigation">
      <Link to="/dashboard" className={`${linkClass} border-blue-200`}>
        <LayoutDashboard />
        Dashboard
      </Link>
      <Link to="/internships" className={linkClass}>
        <BriefcaseBusiness />
        Browse Internships
      </Link>
      <Link to="/" className={linkClass}>
        Home
      </Link>
    </nav>
  );
}

export default SideBar;