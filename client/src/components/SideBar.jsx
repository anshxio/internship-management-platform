import {
  LayoutDashboard,
  BriefcaseBusiness,
  Bookmark,
  User,
} from "lucide-react";

function SideBar() {
    return(
        <div className ="flex flex-col gap-6">
            <button className ="flex items-center gap-4 border border-blue-200 rounded-3xl px-6 py-6 text-xl font-medium hover:shadow-lg transition">
                <LayoutDashboard  />
                Dashboard
            </button>
            <button className ="flex items-center gap-4 border border-gray-200 rounded-3xl px-6 py-6 text-xl font-medium hover:shadow-lg transition">
                <BriefcaseBusiness  />
                Applications
            </button>
            <button className ="flex items-center gap-4 border border-gray-200 rounded-3xl px-6 py-6 text-xl font-medium hover:shadow-lg transition">
                <Bookmark  />
                Saved
            </button>
            <button className ="flex items-center gap-4 border border-gray-200 rounded-3xl px-6 py-6 text-xl font-medium hover:shadow-lg transition">
                <User  />
                Profile
            </button>
        </div>
    );
}
export default SideBar;