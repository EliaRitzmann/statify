
import {useSession} from "next-auth/react"

import { LogIn } from '../lib/LogIn';
import { LoggedIn } from '../lib/Home';
import { Navbar } from '../components/Navbar';


export default function Home() {
  const {data: session} = useSession()
  



  if(!session){
    return (
      <div>
        <Navbar></Navbar>
        <LogIn></LogIn>
      </div>
      
    )
  }else{

    return (
      <div>
        <Navbar></Navbar>
        <LoggedIn></LoggedIn>
      </div>
    )
  }
}
