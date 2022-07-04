import { info } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import { Track } from './Track';

export const RecentlyPlayed = () => {
    const [list, setList] = useState([]);

    const items = []

    function formatDate(date){

        var seconds = Math.floor((new Date() - Date.parse(date)) / 1000);
      
        var interval = seconds / 31536000;
      
        if (interval > 1) {
          return Math.floor(interval) + " years ago";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
          return Math.floor(interval) + " months ago";
        }
        interval = seconds / 86400;
        if (interval > 1) {
          return Math.floor(interval) + " days ago";
        }
        interval = seconds / 3600;
        if (interval > 1) {
          return Math.floor(interval) + " hours ago";
        }
        interval = seconds / 60;
        if (interval > 1) {
          return Math.floor(interval) + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
      }

    useEffect(() => {
        const getMyPlaylists = async () => {
          const res = await fetch("/api/spotify/recentlyplayed");
          const { items } = await res.json();
          setList(items);
        };
    
        getMyPlaylists();
      }, []);
      
      console.log(list)
      for (let i = 0; i < list.length; i++) {
        items.push(<Track info={list[i].track} key={i} number={formatDate(list[i].played_at)} textcolor="white"></Track>);
      }
    
  return (
    <div className='md:flex md:flex-wrap md:gap-20 md:justify-center'>{items}</div>
  )
}
