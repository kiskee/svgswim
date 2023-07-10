"use client";
import { FormEvent, useState } from "react";
import { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Signin() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res?.error) setError(res.error as string);

    if (res?.ok) return router.push("/");
  };

  return (
    <div className="justify-center h-[calc(100vh-4rem)] flex items-center text-center">
      <form
        onSubmit={handleSubmit}
        className="px-8 py-10 w-3/12 rounded-lg border-2 border-green-500 hover:border-black shadow-2xl shadow-slate-950"
        id="signin"
      >
        {error && <div className="bg-red-500 text-slate-950 p-2 mb-2">{error}</div>}
        <h1 className="text-4xl font-bold mb-7">Login</h1>

        <label className="text-black">Email:</label>
        <input
          type="email"
          placeholder="Email"
          className="bg-white text-black px-4 py-2 block mb-2 w-full"
          name="email"
        />

        <label className="text-black">Password:</label>
        <input
          type="password"
          placeholder="Password"
          className="bg-white text-black px-4 py-2 block mb-2 w-full"
          name="password"
        />

        <button className="bg-green-500 text-white px-4 py-2 block w-full mt-4">
          Signin
        </button>
        
          <Link href="/register" className="bg-blue-500 text-white px-4 py-2 block w-full mt-4">Register</Link>
        
      </form>
    </div>
  );
}

export default Signin;