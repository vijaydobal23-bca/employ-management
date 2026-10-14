
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Submitted");
    setEmail("");
    setPassword(""); 
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 px-4">
      <div className="flex w-full max-w-md flex-col items-center rounded-2xl bg-white px-8 py-10 shadow-xl">

        <h2 className="mb-2 text-3xl font-bold text-gray-800">
          Welcome Back
        </h2>

        <p className="mb-8 text-sm text-gray-500">
          Login to your account
        </p>

        <form
          className="flex w-full flex-col gap-5"
          onSubmit={submitHandler}
        >
          <input
            className="h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-end">
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="h-12 w-full rounded-xl bg-blue-600 text-lg font-semibold text-white shadow-md transition hover:bg-blue-700 active:scale-[0.98]"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="font-semibold text-blue-600 hover:underline">
            Sign up
          </a>
        </p>

      </div>
    </div>
  );
};

export default Login;
