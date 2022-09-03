import React from "react";
import ICS from "../assets/ICS.jpeg";

const Fregister = () => {
  return (
    <>
      <div className="bg-[#BFE3FF] mt-6 mx-80 ">
        <div className="flex justify-center">
          <img src={ICS} alt="" className="my-6  opacity-50 relative" />
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col gap-y-2 w-[20%] pb-4 ">
            <input
              type="text"
              name=""
              value=""
              className="placeholder-black rounded-sm px-2   opacity-20"
              placeholder="First Name"
            />
            <input
              type="text"
              name=""
              value=""
              className="placeholder-black rounded-sm px-2 opacity-20"
              placeholder="Middle Name"
            />
            <input
              type="text"
              name=""
              value=""
              className="placeholder-black rounded-sm px-2 opacity-20"
              placeholder="Last Name"
            />
            <input
              type="text"
              name=""
              value=""
              className="placeholder-black rounded-sm px-2 opacity-20"
              placeholder="Email"
            />
            <input
              type="text"
              name=""
              value=""
              className="placeholder-black rounded-sm px-2 opacity-20"
              placeholder="Password"
            />
            <input
              type="text"
              name=""
              value=""
              className="placeholder-black rounded-sm px-2 opacity-20"
              placeholder="Confirm Password"
            />
            <input
              type="text"
              name=""
              value=""
              className="placeholder-black rounded-sm px-2 opacity-20"
              placeholder="Aadhar No."
            />
            <input
              type="text"
              name=""
              value=""
              className="placeholder-black rounded-sm px-2 opacity-20"
              placeholder="Udyog Aadhar"
            />
            <input
              type="text"
              name=""
              value=""
              className="placeholder-black rounded-sm px-2 opacity-20"
              placeholder="GST"
            />
            <input
              type="text"
              name=""
              value=""
              className="placeholder-black rounded-sm px-2 opacity-20"
              placeholder="Company Name"
            />
          </div>
        </div>
        <div className="flex justify-center pb-4 ">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-60">
          Sign Up
        </button>
        </div>
      </div>
    </>
  );
};

export default Fregister;
