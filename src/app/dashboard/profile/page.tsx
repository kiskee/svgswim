"use client";
import { useSession } from "next-auth/react";


function ProfilePage() {
  const { data: session, status } = useSession();

  /*
  
  
      <pre className="bg-zinc-800 p-4">
        {JSON.stringify(
          {
            session,
            status,
          },
          null,
          2
        )}
      </pre>
  
  */ 

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col gap-y-10 items-center justify-center">
      <h1 className="font-bold text-3xl text-cyan-600">Profile</h1>

      
     
    </div>
  );
}

export default ProfilePage;