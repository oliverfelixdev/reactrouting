import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const goBackHandler = () => {
    /* first way */ navigate("/playground");
    /* second way */ //navigate(-1)
  };
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-[90vw] max-w-xl bg-white shadow-lg flex flex-col items-center justify-center p-10 rounded-lg">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 capitalize">
          {name}'s Dashboard
        </h1>
        <p className="text-lg font-medium text-gray-500 mb-6">
          Welcome back, <span className="font-semibold capitalize">{name}</span>
          ! 👋
        </p>

        <button
          onClick={goBackHandler}
          className="mt-4 bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UserDetail;
