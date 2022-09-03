import React from "react";
import ICS from "../assets/ICS.jpeg";

const Login = () => {
  return (
    <div>
      <div className="bg-[#BFE3FF] mt-6 mx-80 ">
        <div className="flex justify-center">
          <img src={ICS} alt="" className="my-6  opacity-50 w-[20%]" />
        </div>
        <div className="flex justify-center p-5 ">
          <div className="flex flex-col gap-y-2  ;">
            <input
              type="Text"
              className="placeholder-gray-500 rounded-sm px-2"
              placeholder="Name"
            />
            <input
              type="Text"
              className="placeholder-gray-500 rounded-sm px-2"
              placeholder="ID"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-row gap-x-2 pb-5">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-60">
              Login
            </button>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-60">
              Farmer Sign Up
            </button>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-60">
              Inspector Sign Up
            </button>
          </div>
        </div>
      </div>
      {/* Blue div */}
    </div>
  );
};

export default Login;
