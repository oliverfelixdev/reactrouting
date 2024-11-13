import React from "react";

const Azul = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center gap-10 rounded-lg shadow-lg">
      <div className="w-96 h-72 rounded-lg mb-6 overflow-hidden">
        <img
          src="https://t4.ftcdn.net/jpg/03/82/57/89/240_F_382578916_1FZowkxxlRZy9ZpQE67TgqaB2dOBRrRI.jpg"
          alt="Placeholder Image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className=" flex items-start justify-center flex-col">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-3">Azul Bot</h1>
        <h2 className="text-lg font-medium text-gray-600 mb-4">
          Discover More About Azul
        </h2>
        <p className="text-gray-600 max-w-md mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
          consequatur tempora sapiente voluptatem saepe.
        </p>
        <button className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Azul;
