import { useSession, signOut, signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="w-full bg-black sticky top-0 h-16 flex justify-between items-center p-4 shadow-md">
        {/* Logo*/}
        <Link href="/">
        <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-sky-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
        <h1 className="text-white text-2xl t">Statify</h1>
      </div>
        </Link>
      

        {/* Navigation*/}
      <div className="flex gap-10 hidden">
        <Link href="/toptracks"><h1 className="text-white hover:text-sky-500 font-medium">Top Tracks</h1></Link>
        <Link href="/topartists"><h1 className="text-white hover:text-sky-500 font-medium">Top Artists</h1></Link>
        <Link href="/toptracks"><h1 className="text-white hover:text-sky-500 font-medium">Top Tracks</h1></Link>
      </div>

        {/* profile*/}
        {session ? <button className="flex items-center gap-2" onClick={() => signOut()}>
        <h1 className="text-white">{session?.session.user.name}</h1>
        <div>
          <img
            className="w-10 rounded-full"
            src={session?.session.user.image}
            alt="profile picture"
          />
        </div>
      </button> : <button onClick={() => signIn("spotify")} className="text-white">LogIn</button>}

      
    </div>
  );
};
