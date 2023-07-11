"use client";
import { FormEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Signup() {
  const [error, setError] = useState();
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const signupResponse = await axios.post("/api/auth/signup", {
        email: formData.get("email"),
        password: formData.get("password"),
        fullname: formData.get("fullname"),
      });
      
      const res = await signIn("credentials", {
        email: signupResponse.data.email,
        password: formData.get("password"),
        redirect: false,
      });

      if (res?.ok) return router.push("/");
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        setError(errorMessage);
      }
    }
  };

  /*
  <input
          type="password"
          placeholder="Password"
          className="bg-zinc-800 px-4 py-2 block mb-2 w-full"
          name="password"
        />

  <input
          type="email"
          placeholder="Email"
          className="bg-zinc-800 px-4 py-2 block mb-2 w-full"
          name="email"
        />
  <input
          type="text"
          placeholder="Fullname"
          className="bg-zinc-800 px-4 py-2 block mb-2 w-full"
          name="fullname"
        />

  */


  return (
    <div className="justify-center h-[calc(100vh-4rem)] flex items-center text-center text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-950 px-8 py-10 w-3/12 rounded-lg border-2 border-blue-600 shadow-2xl shadow-purple-400"
      >
        {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
        <h1 className="text-4xl font-bold mb-7">User Register</h1>

        <label className="text-slate-300">Fullname:</label>
        <input
          type="text"
          className="mt-1 block text-slate-400 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          placeholder="Full Name"
          name="fullname"
        />

        <label className="text-slate-300">Email:</label>

        <input
          type="email"
          name="email"
          id="email"
          className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 
          disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 
          block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500
           focus:invalid:ring-pink-500 disabled:shadow-none"
          placeholder="Email"
        />

        <label className="text-slate-300">Password:</label>
        
        
        

        
        <input
          type="password"
          name="password"
          id="password"
          className="px-3 py-2 bg-white text-slate-400 border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 
        disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1
         invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
          placeholder="Password"
        
        />

        <button className="bg-blue-500 text-white px-4 py-2 block w-full mt-4">
          Register
        </button>

        <Link
          href="/login"
          className="bg-green-500 text-white px-4 py-2 block w-full mt-4"
        >
          Login
        </Link>
      </form>
    </div>
  );
}

export default Signup;
