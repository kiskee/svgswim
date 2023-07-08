import Link from "next/link";
import { getServerSession } from "next-auth";
import Image from 'next/image'
import Logo from '../../public/login.png'

async function Navbar() {
 
  const session = await getServerSession();
  console.log(session)
  return (
    <nav className="p-4" id="navbar">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
        <Image
      src={Logo}
      width={200}
      height={200}
      alt="Picture of the author"
    />
        </Link>

        <ul className="flex gap-x-2 text-black">
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
              <li className="bg-indigo-500 p-3 m-1">
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