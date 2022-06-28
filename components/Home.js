import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import {useSession} from "next-auth/react"

export const Home2 = () => {
  const {data: session} = useSession()
    console.log(session)

  return (
    <div>
      <div className='bg-[#FF5964] h-screen'>
        <h1>welcome {session.session.user.name}</h1>
        <br></br>
        <Link href="/toptracks">TopTracks</Link>
        <br></br>
      <Link href="/topartists">TopArtists</Link>
      </div>
      <div className='bg-[#38618C] h-screen'>
      </div>
      <div className='bg-[#1DB954] h-screen'>

      </div>
      <div className='bg-[#35A7FF] h-screen'>

      </div>
      
        
    </div>
  )
}
