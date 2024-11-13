import React from "react";
import { Link } from "react-router-dom";

const Playground = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center pt-20 text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-8">Playground</h1>

      <div className="link-wrapper p-6 rounded-lg bg-zinc-200 shadow-md flex flex-wrap gap-4 justify-center">
        <Link
          className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          to="/playground/carl"
        >
          Carl Johnson
        </Link>
        <Link
          className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          to="/playground/simon"
        >
          Simon Riley
        </Link>
        <Link
          className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          to="/playground/farah"
        >
          Farah Karim
        </Link>
      </div>
    </div>
  );
};

export default Playground;
