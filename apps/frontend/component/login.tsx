import React from "react";

export const Login = () => {
  return <div  className="flex flex-col gap-4  border-2 border-gray-600 h-[60vh] w-[30vw] bg-gray-900 items-center justify-center" >
    <input type="text"  className="bg-gray-800 text-gray-400 placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"  placeholder="Enter Your Email"/>
    <input type="text"  className="bg-gray-800 text-gray-400 placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"  placeholder="Enter Your PassWord"/>

      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button>
  </div>;
};
