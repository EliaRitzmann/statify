import React from 'react'
import {useSession, signIn, signOut} from "next-auth/react"
export const LogIn = () => {
  return (
    <button onClick={() => signIn("spotify")}>signIn</button>
  )
}
