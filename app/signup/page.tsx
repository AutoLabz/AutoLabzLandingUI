import React from 'react';
import 'tailwindcss/tailwind.css';
import { signup } from '../login/actions';

export default function SignUpPage() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-black">
      <div className="w-full p-6 m-auto bg-gray-800 bg-opacity-60 rounded-md shadow-xl lg:max-w-xl" style={{ borderImage: 'linear-gradient(to right, #0033CC, #EB2891) 1' }}>
        <h1 className="text-3xl font-semibold text-center text-white">
          Sign Up
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter email"
              required
              className="block w-full px-4 py-2 mt-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:border-[#0033CC] focus:ring-[#0033CC] focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-300">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter password"
              required
              className="block w-full px-4 py-2 mt-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:border-[#0033CC] focus:ring-[#0033CC] focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              formAction={signup}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md bg-gradient-to-r from-[#EB2891] to-[#0033CC] focus:outline-none"
            >
              Sign up
            </button>
          </div>
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-400">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-[#EB2891] hover:underline"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}