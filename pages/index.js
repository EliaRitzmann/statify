
import {useSession} from "next-auth/react"

import { LogIn } from '../components/LogIn';
import { Home2 } from '../components/Home';
import { Navbar } from '../components/Navbar';


export default function Home() {
  const {data: session} = useSession()
  



  if(!session){
    return (
      <div>
        <LogIn></LogIn>
      </div>
      
    )
  }else{

    return (
      <div>
        <Home2></Home2>
      </div>
    )
  }
}
