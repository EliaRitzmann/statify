import React, { useEffect, useState } from 'react'
import {signOut} from "next-auth/react"

export const LoggedIn = () => {

    const [list, setList] = useState([]);
    
    useEffect(() => {
      
        const getMyPlaylists = async () => {
            const res = await fetch('/api/spotify/playlists');
            const {items} = await res.json();
            setList(items);
          };

          
      

          getMyPlaylists()
          
    }, [])
    

  return (
    <div>
        <button onClick={() => signOut()}>signOut</button>
        {list.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.images[0]?.url} width="100" />
          </div>
          ))}
    </div>
  )
}
