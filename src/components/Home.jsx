import React from "react";

const Home = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center gap-10 rounded-lg shadow-lg">
      <div className="w-96 h-72 rounded-lg mb-6 overflow-hidden">
        <img
          src="https://lp-cms-production.imgix.net/2024-02/shutterstock765382675.jpg?w=1440&h=810&fit=crop&auto=format&q=75"
          alt="Scenic Landscape"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-3">Home</h1>
        <h2 className="text-lg font-medium text-gray-600 mb-4">
          Discover More About Us
        </h2>
        <p className="text-gray-600 max-w-md mb-8">
          We’re excited to share our journey and values with you. Dive in to
          learn more about what we offer!
        </p>
        <button className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
