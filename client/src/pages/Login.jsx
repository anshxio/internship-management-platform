import {useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try{
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
        email,
        password,
      });
      // Save token to localStorage
      localStorage.setItem("token", res.data.token);
      // Save role to localStorage
      localStorage.setItem("role", res.data.user.role);
      // save user info to localStorage
      localStorage.setItem("userId", res.data.user.id);
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
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-[45%_55%]">
      {/* LEFT PANEL */}
      <div className="min-h-[320px] bg-gradient-to-br from-blue-600 to-indigo-700 lg:min-h-screen">
        <div className="flex h-full flex-col justify-center gap-10 p-8 text-white sm:p-12 lg:gap-20 lg:p-16">
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

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-blue-100 sm:text-xl">
              Continue discovering opportunities and connecting with top
              companies.
            </p>
          </div>

          {/* STATS */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
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
      <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-8 lg:px-20 lg:py-0">
        <div className="w-full max-w-xl">
          {/* HEADING */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Sign in to your account
            </h1>

            <p className="text-gray-500 text-lg mt-4">
              Don&apos;t have an account?
              <Link to="/register" className="text-blue-600 font-semibold ml-2 hover:text-blue-700 transition">
                Sign up
              </Link>
            </p>
          </div>

          <form onSubmit={handleLogin}>
          <div className="mt-8">
            <label className="text-lg font-medium text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              required
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
              required
              value ={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-3 border border-gray-200 rounded-2xl px-6 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-lg transition-all duration-300"
            />
          </div>

          {/* SIGN IN BUTTON */}
          <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-2xl text-xl font-medium mt-8 hover:bg-blue-700 hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
            Sign In
          </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
