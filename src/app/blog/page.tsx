"use client";
import { useSession,   } from "next-auth/react";
import { BlogModal } from '@/components/BlogModal'
import Link from "next/link";
import { useState } from "react";





function Blog() {

  const {data:session} = useSession();
  const [show, setShow] = useState(false)

/*
 <Link  href="/?modal=true" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">New Post</Link>

    {showModal && <BlogModal />}
*/


  return (
    <>
  {session?.user?.type == 'admin' && (<>
    <button  className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={()=>setShow(true)}>New Post</button>
    <BlogModal show={show} onClose={()=>setShow(false)}/>
    </>
  )}
    <div>
      Blog
    </div>
    </>

  )
}

export default Blog