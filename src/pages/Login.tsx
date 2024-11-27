import "../index.css";

import { PiBagSimple } from "react-icons/pi";
import { RiUserSearchLine } from "react-icons/ri";
import { SiTheboringcompany } from "react-icons/si";

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-purple-900 via-black to-purple-900 relative overflow-hidden flex items-center justify-center">
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 opacity-10 pointer-events-none">
        {[...Array(100)].map((_, index) => (
          <div key={index} className="border border-gray-700"></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-white flex flex-col md:flex-row w-full justify-center items-center gap-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center">
          <p className="text-center text-xl md:text-3xl mb-4">Company Logo</p>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Tech hiring done <span className="text-purple-400">right</span>
          </h1>
          <p className="text-xs md:text-sm">
            Dream talent. Top companies. Building tomorrow.
          </p>
          {/* Brand Names Promotion */}
          <div className="mt-8 flex flex-col justify-center items-center">
            <p>Trusted by global brands</p>
            <div className="flex flex-row gap-2 md:gap-8">
              <SiTheboringcompany className="text-6xl" />
              <SiTheboringcompany className="text-6xl" />
              <SiTheboringcompany className="text-6xl" />
              <SiTheboringcompany className="text-6xl" />
            </div>
          </div>
        </div>

        {/* Right Section (Login Form) */}
        <div className="border p-4 rounded-md">
          <h1 className="font-bold text-2xl">Login</h1>
          <div className="flex flex-col gap-4 mt-4">
            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm">
                Email ID
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter email address"
                className="border border-zinc-500 rounded-md bg-transparent p-2 h-8"
              />
            </div>
            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="border border-zinc-500 rounded-md bg-transparent p-2 h-8"
              />
            </div>
            <a href="#" className="text-end text-xs underline tracking-wide">
              Forgot Password?
            </a>
            {/* Login Button */}
            <button
              type="button"
              className="bg-purple-800 rounded-md py-1 md:py-2"
              onClick={() => {
                console.log("Login button clicked!");
                navigate("/");
              }}
            >
              Login
            </button>
          </div>

          {/* Sign-up Options */}
          <div className="flex flex-col gap-2">
            <p className="text-center text-xs mt-4 text-zinc-400">
              Don't have an account?
            </p>
            <div className="flex flex-col md:flex-row gap-2">
              {/* Explore Jobs */}
              <div
                className="flex justify-start items-center border rounded-md border-zinc-400 gap-2 p-2 cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                <PiBagSimple className="text-xl" />
                <div>
                  <p className="font-bold">Explore Jobs</p>
                  <p className="text-xs text-zinc-400">Sign up as a Talent</p>
                </div>
              </div>
              {/* Hire Talent */}
              <div
                className="flex justify-start items-center border rounded-md border-zinc-400 gap-2 p-2 cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                <RiUserSearchLine className="text-xl" />
                <div>
                  <p className="font-bold">Hire Talent</p>
                  <p className="text-xs text-zinc-400">
                    Sign up as a Recruiter
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
