import React from "react";
import Button from "../../components/Button";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const FORM_URL =
  import.meta.env.VITE_API_FORM_URL || "https://tevoj98108.pythonanywhere.com/";
``;

import { useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
function LoginPage() {
  let emailRef = useRef();
  let passwordRef = useRef();
  const navigete = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();

    let formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      let res = await fetch(FORM_URL + "auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error(" yuborishda muammo!");
      }
      let data = await res.json();
      localStorage.setItem("access", data.data.access);
      navigete("/admin");
      console.log(data);
    } catch (error) {
      toast.error("loginda muammo!");
    }
  }

  return (
    <div className="h-full flex items-center overflow-x-hidden justify-center  p-4 md:p-8">
      <div className="w-full max-w-[1280px] min-h-[50vh] flex flex-col lg:flex-row items-center justify-between bg-white rounded-3xl p-4 lg:p-10- gap-12 lg:gap-8">
        <div className="w-full lg:w-1/2 flex flex-col max-w-[440px] mx-auto lg:mx-0">
          <div className="flex flex-col mb-12">
            <div className="flex items-center gap-2  mb-6">
              <img
                src="/Link.svg"
                alt="Logo"
                className="w-8 h-8 object-contain w-25 rounded"
              />
            </div>
            <Link
              to="/"
              className="text-gray-400 hover:text-gray-900 transition flex items-center gap-2 text-sm font-medium"
            >
              <span>←</span> Back to Home
            </Link>
          </div>
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-400 text-sm">
              Enter your credentials to access your account
            </p>
          </div>
          <form onSubmit={handleSubmit} className="w-full">
            <label className="block mb-5">
              <span className="block text-gray-700 text-sm font-semibold mb-2">
                Email
              </span>
              <input
                className="w-full border border-gray-200 hover:border-gray-300 focus:border-indigo-500 rounded-xl px-4 py-3.5 transition-colors outline-none text-gray-900 placeholder:text-gray-300"
                type="email"
                placeholder="name@example.com"
                ref={emailRef}
                required
                autoComplete="username"
              />
            </label>
            <label className="block mb-6">
              <span className="block text-gray-700 text-sm font-semibold mb-2">
                Password
              </span>
              <input
                className="w-full border border-gray-200 hover:border-gray-300 focus:border-indigo-500 rounded-xl px-4 py-3.5 transition-colors outline-none text-gray-900 placeholder:text-gray-300"
                type="password"
                placeholder="........"
                ref={passwordRef}
                required
                autoComplete="current-password"
              />
            </label>
            <div className="w-full">
              <button
                type="submit"
                className="w-full bg-[#4F46E5] text-white rounded-xl py-4 px-6 font-semibold hover:bg-indigo-700 transition duration-150 shadow-md"
              >
                Login
              </button>
            </div>
            <p className="text-center mt-8 text-gray-500 text-sm">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-[#4F46E5] font-semibold hover:underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
        <div className="w-full hidden lg:flex lg:w-1/2 flex flex-col items-center justify-center">
          <img
            src="www.svg"
            alt="Login Illustration"
            className="w-[450px] h-[450px] object-cover rounded-2xl"
          />
          <div className="text-center mt-10 max-w-[400px]">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Start Your Journey
            </h2>
            <p className="text-gray-400 text-sm px-4">
              Join thousands of creators sharing their stories on Blogify
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
