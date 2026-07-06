import { useState } from "react";
import axios from "axios";

function Register() {
  // STATES
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  // REGISTER FUNCTION
  const handleRegister = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, {
        name,
        email,
        password,
        role,
      });

      console.log(res.data);

      alert("Registration successful!");
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  return (
    <section className="min-h-screen grid grid-cols-1 overflow-hidden lg:grid-cols-[42%_58%]">
      {/* LEFT PANEL */}
      <div className="bg-linear-to-br from-fuchsia-600 via-blue-600 to-indigo-800">
        <div className="flex h-full flex-col justify-between px-4 py-8 text-white sm:px-8 sm:py-10 lg:px-12">
          {/* TOP CONTENT */}
          <div>
            {/* LOGO */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-blue-600 flex items-center justify-center font-bold text-xl shadow-lg">
                I
              </div>

              <h1 className="text-4xl font-bold">InternFlow</h1>
            </div>

            {/* HERO SECTION */}
            <div className="mt-12 sm:mt-16 lg:mt-20">
              <h1 className="max-w-lg text-3xl font-bold leading-[1.05] sm:text-4xl lg:text-5xl">
                Start your internship journey today
              </h1>

              <p className="mt-6 max-w-md text-base leading-relaxed text-blue-100 sm:text-lg">
                Join thousands of students and recruiters building amazing
                careers.
              </p>
            </div>
          </div>

          {/* MIDDLE CARDS */}
          <div className="space-y-5">
            {/* ROLE CARDS */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {/* STUDENT */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-400 flex items-center justify-center text-2xl">
                  🎓
                </div>

                <h1 className="text-2xl font-bold mt-5">Students</h1>

                <p className="text-blue-100 mt-2">Find your dream internship</p>
              </div>

              {/* RECRUITER */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6">
                <div className="w-14 h-14 rounded-2xl bg-pink-400 flex items-center justify-center text-2xl">
                  💼
                </div>

                <h1 className="text-2xl font-bold mt-5">Recruiters</h1>

                <p className="text-blue-100 mt-2">Discover top talent</p>
              </div>
            </div>

            {/* STATS */}
            <div className="flex flex-col gap-4 px-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-4xl font-bold">500+</h1>

                <p className="text-blue-100 mt-1">Internships</p>
              </div>

              <div>
                <h1 className="text-4xl font-bold">200+</h1>

                <p className="text-blue-100 mt-1">Companies</p>
              </div>

              <div>
                <h1 className="text-4xl font-bold">95%</h1>

                <p className="text-blue-100 mt-1">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="overflow-y-auto bg-white">
        <div className="h-full px-4 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-10">
          <div className="w-full max-w-xl mx-auto">
            {/* HEADING */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                Create your account
              </h1>

              <p className="text-gray-500 text-lg mt-4">
                Already have an account?
                <span className="text-blue-600 font-semibold ml-2 cursor-pointer hover:text-blue-700 transition">
                  Sign in
                </span>
              </p>
            </div>

            {/* GOOGLE BUTTON */}
            <button
              type="button"
              className="w-full border border-gray-200 rounded-2xl py-4 text-lg font-medium mt-8 hover:bg-gray-50 hover:shadow-lg transition-all duration-300"
            >
              Continue with Google
            </button>

            {/* SOCIAL BUTTONS */}
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <button
                type="button"
                className="border border-gray-200 rounded-2xl py-4 text-lg font-medium hover:bg-gray-50 hover:shadow-lg transition-all duration-300"
              >
                GitHub
              </button>

              <button
                type="button"
                className="border border-gray-200 rounded-2xl py-4 text-lg font-medium hover:bg-gray-50 hover:shadow-lg transition-all duration-300"
              >
                LinkedIn
              </button>
            </div>

            {/* DIVIDER */}
            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200"></div>

              <p className="text-sm text-gray-400">Or register with email</p>

              <div className="h-px flex-1 bg-gray-200"></div>
            </div>

            {/* ROLE SELECTOR */}
            <div>
              <p className="text-lg font-medium text-gray-700 mb-4">
                I am a...
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* STUDENT */}
                <button
                  type="button"
                  onClick={() => setRole("student")}
                  className={`rounded-3xl p-6 border transition-all duration-300 hover:shadow-xl ${
                    role === "student" ? "border-blue-600" : "border-gray-200"
                  }`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl mx-auto">
                    🎓
                  </div>

                  <h1 className="text-2xl font-bold text-gray-900 mt-5">
                    Student
                  </h1>

                  <p className="text-gray-500 mt-2">Looking for internships</p>
                </button>

                {/* RECRUITER */}
                <button
                  type="button"
                  onClick={() => setRole("recruiter")}
                  className={`rounded-3xl p-6 border-2 transition-all duration-300 hover:shadow-xl ${
                    role === "recruiter" ? "border-blue-600" : "border-gray-200"
                  }`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-2xl mx-auto">
                    💼
                  </div>

                  <h1 className="text-2xl font-bold text-gray-900 mt-5">
                    Recruiter
                  </h1>

                  <p className="text-gray-500 mt-2">Hiring interns</p>
                </button>
              </div>
            </div>

            {/* FULL NAME */}
            <div className="mt-8">
              <label className="text-lg font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-3 border border-gray-200 rounded-2xl px-6 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-lg transition-all duration-300"
              />
            </div>

            {/* EMAIL */}
            <div className="mt-6">
              <label className="text-lg font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-3 border border-gray-200 rounded-2xl px-6 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-lg transition-all duration-300"
              />
            </div>

            {/* PASSWORD */}
            <div className="mt-6">
              <label className="text-lg font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a strong Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-3 border border-gray-200 rounded-2xl px-6 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-lg transition-all duration-300"
              />

              <p className="text-gray-400 text-sm mt-3">
                Must be at least 8 characters
              </p>
            </div>

            {/* TERMS */}
            <div className="flex items-start gap-3 mt-6">
              <input type="checkbox" className="w-5 h-5 mt-1" />

              <p className="text-gray-500 leading-relaxed">
                I agree to the
                <span className="text-blue-600 ml-1 cursor-pointer">
                  Terms of Service
                </span>
                and
                <span className="text-blue-600 ml-1 cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>

            {/* CREATE ACCOUNT BUTTON */}
            <button
              type="button"
              onClick={handleRegister}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl text-xl font-medium mt-8 hover:bg-blue-700 hover:shadow-xl transition-all duration-300 hover:scale-[1.01]"
            >
              Create your account
            </button>

            {/* BOTTOM TEXT */}
            <p className="text-center text-gray-400 mt-8 pb-10">
              Join 5,000+ students and recruiters on InternFlow
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
