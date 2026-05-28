import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try{
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      console.log(res.data);
      // Save token to localStorage
      localStorage.setItem("token", res.data.token);
      // Save role to localStorage
      localStorage.setItem("role", res.data.user.role);
      alert("Login successful!");
      if(res.data.user.role === "student"){
        navigate("/dashboard");
      }else{
        navigate("/recruiter-dashboard");
      }
    } catch(err){
      console.error(err);
      alert("Login failed");
    }
  };
  return (
    <section className="min-h-screen grid grid-cols-[45%_55%]">
      {/* LEFT PANEL */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 min-h-screen">
        <div className="p-16 text-white flex flex-col justify-center gap-20 h-full">
          {/* LOGO */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white text-blue-600 flex items-center justify-center font-bold text-2xl shadow-lg">
              I
            </div>

            <h1 className="text-5xl font-bold">InternFlow</h1>
          </div>

          {/* HERO CONTENT */}
          <div>
            <h1 className="text-5xl font-bold leading-[1.1] max-w-xl">
              Welcome back to
              <br />
              your career journey
            </h1>

            <p className="text-xl text-blue-100 mt-8 leading-relaxed max-w-lg">
              Continue discovering opportunities and connecting with top
              companies.
            </p>
          </div>

          {/* STATS */}
          <div className="flex items-center gap-8">
            {/* CARD 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl px-6 py-5 shadow-xl">
              <h1 className="text-3xl font-bold">15k+</h1>

              <p className="text-blue-100 mt-2">Students</p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl px-6 py-5 shadow-xl">
              <h1 className="text-3xl font-bold">500+</h1>

              <p className="text-blue-100 mt-2">Companies</p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl px-6 py-5 shadow-xl">
              <h1 className="text-3xl font-bold">98%</h1>

              <p className="text-blue-100 mt-2">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="bg-white flex items-center justify-center px-20">
        <div className="w-full max-w-xl">
          {/* HEADING */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900">
              Sign in to your account
            </h1>

            <p className="text-gray-500 text-lg mt-4">
              Don&apos;t have an account?
              <span className="text-blue-600 font-semibold ml-2 cursor-pointer hover:text-blue-700 transition">
                Sign up
              </span>
            </p>
          </div>

          {/* SOCIAL BUTTONS */}
          <div className="flex gap-4 mt-8">
            <button className="flex-1 border border-gray-200 rounded-2xl py-4 text-lg font-medium hover:bg-gray-50 hover:shadow-lg transition-all duration-300">
              Google
            </button>

            <button className="flex-1 border border-gray-200 rounded-2xl py-4 text-lg font-medium hover:bg-gray-50 hover:shadow-lg transition-all duration-300">
              LinkedIn
            </button>
          </div>

          {/* DIVIDER */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-[1px] bg-gray-200"></div>

            <p className="text-gray-400 text-sm">or continue with email</p>

            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-lg font-medium text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              value ={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-3 border border-gray-200 rounded-2xl px-6 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-lg transition-all duration-300"
            />
          </div>

          {/* REMEMBER */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />

              <p className="text-gray-600">Remember me</p>
            </div>

            <button className="text-blue-600 font-medium hover:text-blue-700 transition">
              Forgot Password?
            </button>
          </div>

          {/* SIGN IN BUTTON */}
          <button className="w-full bg-blue-600 text-white py-4 rounded-2xl text-xl font-medium mt-8 hover:bg-blue-700 hover:shadow-xl transition-all duration-300 hover:scale-[1.01]"
          onClick ={handleLogin}>
            Sign In
          </button>
        </div>
      </div>
    </section>
  );
}

export default Login;
