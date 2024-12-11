// pages/register.js

import { FaUserAlt, FaEnvelope, FaLock, FaPhoneAlt } from 'react-icons/fa';

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Register</h2>
        <form className="space-y-4">
          <div className="flex items-center border-b-2 border-gray-300 py-2">
            <FaUserAlt className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Username"
              className="outline-none w-full text-gray-700 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center border-b-2 border-gray-300 py-2">
            <FaEnvelope className="text-gray-500 mr-3" />
            <input
              type="email"
              placeholder="Email"
              className="outline-none w-full text-gray-700 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center border-b-2 border-gray-300 py-2">
            <FaLock className="text-gray-500 mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="outline-none w-full text-gray-700 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center border-b-2 border-gray-300 py-2">
            <FaPhoneAlt className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Phone Number"
              className="outline-none w-full text-gray-700 focus:border-blue-500"
            />
          </div>

          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
