import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="border-b border-gray-200">
            <div className=" w-full px-8 py-3 flex items-center justify-between">
                {/* left section */}
                <div className="flex items-center gap-10">
                   { /* logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
                            I
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            InternFlow
                        </h1>
                    </div>
                    <div className="flex items-center gap-8 text-gray-600 text-base">
                        <Link to = "/">Home</Link>
                        <Link to = "/internships">Internships</Link>
                        <Link to = "/about">About</Link>
                        <Link to = "/contact">Contact</Link>
                    </div>
                </div>
                {/* right section */}
                <div className="flex items-center gap-6">
                    <Link to = "/login" className="text-gray-700 text-base font-medium">Login</Link>
                    <Link to = "/register"  className="bg-blue-600 text-white px-5 py-2.5 rounded-2xl text-base font-medium hover:bg-blue-700 transition">Sign UP</Link>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;