import Link from "next/link";
import { getServerSession } from "next-auth";

async function Navbar() {
  const session = await getServerSession();

  return (
    <nav className="p-4" id="navbar">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <h1 className="font-bold text-xl text-white">NextAuth</h1>
        </Link>

        <ul className="flex gap-x-2 text-white">
          {session ? (
            <>
              <li className="px-3 py-1">
                <Link href="/dashboard/profile">Perfil</Link>
              </li>
            </>
          ) : (
            <>
              <li className="px-3 py-1 ">
                <Link href="/about">About</Link>
              </li>
              <li className="bg-indigo-500 px-3 py-1">
                <Link href="/">Login</Link>
              </li>
              <li className="bg-indigo-700 px-3 py-1">
                <Link href="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;