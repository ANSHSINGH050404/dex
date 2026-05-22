"use client";
import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "@/lib/auth";
import { useRouter } from "next/navigation";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate.push("/");
    }
  }, [navigate]);

  const handleLogin = async () => {
    setLoading(true);

    try {
   
     const response = await fetch(`${BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data)
      localStorage.setItem("token", data.accessToken);
      navigate.push("/");
    } catch {
      console.error("Failed to Authenticate");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4  border-2 border-gray-600 h-[60vh] w-[30vw] bg-gray-900 items-center justify-center">
      <input
        type="text"
        className="bg-gray-800 text-gray-400 placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        className="bg-gray-800 text-gray-400 placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter Your PassWord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {loading ? "Login..." : "Login"}
      </button>
    </div>
  );
};
