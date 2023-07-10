import Link from 'next/link'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Logo from '../../public/login.png'
import UserProfile from './UserProfile'

async function Navbar () {
  const session = await getServerSession()
  //console.log(session)

  /*
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
  */

  /*
        
<nav className="bg-white  fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center">
  <Image
      src={Logo}
      width={100}
     height={50}
      alt="Picture of the author"
    />
      <span className="self-center text-2xl font-semibold whitespace-nowrap">SVG-SWIM</span>
  </a>
  <div className="flex md:order-2">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  text-black">
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
      </li>
      <li>
       
        <Link href="/about" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100  md:p-0">About</Link>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100  md:p-0">Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100  md:p-0">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
    
    
    */
  return (
    <nav className='border-b border-gray-200 p-4'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='#' className='flex items-center'>
          <Image
            src={Logo}
            width={100}
            height={50}
            alt='Picture of the author'
          />
          <span className='self-center text-2xl font-semibold whitespace-nowrap'>
            SVG-SWIM
          </span>
        </a>
        <div className='flex md:order-2'>
          {session ? (
            <UserProfile session={session} />
          ) : (
            <Link
              href='/login'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Signin
            </Link>
          )}
        </div>
        <div
          className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
          id='navbar-sticky'
        >
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  text-black'>
          <li>
                  <a
                    href='/'
                    className='block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0'
                    aria-current='page'
                  >
                    Home
                  </a>
                </li>
                <li>
                  <Link
                    href='/about'
                    className='block py-2 pl-3 pr-4 rounded hover:bg-gray-100  md:p-0'
                  >
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href='#'
                    className='block py-2 pl-3 pr-4 rounded hover:bg-gray-100  md:p-0'
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block py-2 pl-3 pr-4 rounded hover:bg-gray-100  md:p-0'
                  >
                    Contact
                  </a>
                </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
