import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Link as Scroll } from "react-scroll";
import { RecentlyPlayed } from "./RecentlyPlayed";

export const Home2 = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div>
      <div className="bg-[#FF5964] pt-5 pb-2">
        <h1 className="text-white font-bold text-2xl ml-3 mb-5 md:text-5xl md:p-4">
          Good morning {session.session.user.name}
        </h1>
        <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="m-3 flex flex-col items-center gap-2 md:gap-4">
            <Link href="/toptracks">
              <h1 className="text-white hover:font-medium outline outline-2 rounded-md p-1 px-2 md:text-3xl md:p-3 md:px-6">
                Top Tracks
              </h1>
            </Link>
            <Link href="/topartists">
              <h1 className="text-white hover:font-medium outline outline-2 rounded-md p-1 px-2 md:text-3xl md:p-3 md:px-6">
                Top Artists
              </h1>
            </Link>
            <Scroll
              to="recentlyPlayed"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              <h1 className="text-white hover:font-medium outline outline-2 rounded-md p-1 px-2 md:text-3xl md:p-3 md:px-6">
                Recently Played
              </h1>
            </Scroll>
          </div>
        </div>

        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            enableBackground="new 0 0 32 32"
            version="1.1"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
            className="fill-white w-2/3"
          >
            <path d="M4 13c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-.6-.4-1-1-1zM8 11c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1s1-.4 1-1v-8c0-.6-.4-1-1-1zM12 6c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1s1-.4 1-1V7c0-.6-.4-1-1-1zM16 13c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-.6-.4-1-1-1zM20 9c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1s1-.4 1-1V10c0-.6-.4-1-1-1zM24 6c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1s1-.4 1-1V7c0-.6-.4-1-1-1zM28 13c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-.6-.4-1-1-1z"></path>
          </svg>
        </div>
        </div>
        
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        version="1.1"
        viewBox="0 0 960 200"
      >
        <path fill="#FF5964" d="M0 0H960V200H0z"></path>
        <path
          fill="#fa7268"
          d="M0 87l22.8-8.5C45.7 70 91.3 53 137 50.2c45.7-2.9 91.3 8.5 137 7.6 45.7-.8 91.3-13.8 137.2-16.6 45.8-2.9 91.8 4.5 137.6 6.6C594.7 50 640.3 47 686 44c45.7-3 91.3-6 137-3.2 45.7 2.9 91.3 11.5 114.2 15.9L960 61v140H0z"
        ></path>
        <path
          fill="#de638d"
          d="M0 97l22.8-4.8C45.7 87.3 91.3 77.7 137 72.5c45.7-5.2 91.3-5.8 137-.8S365.3 87.3 411.2 93c45.8 5.7 91.8 6.3 137.6 3 45.9-3.3 91.5-10.7 137.2-10.8 45.7-.2 91.3 6.8 137 3.6 45.7-3.1 91.3-16.5 114.2-23.1L960 59v142H0z"
        ></path>
        <path
          fill="#ab64a3"
          d="M0 120l22.8 2c22.9 2 68.5 6 114.2 2.5s91.3-14.5 137-20.3c45.7-5.9 91.3-6.5 137.2-4.2 45.8 2.3 91.8 7.7 137.6 13.8 45.9 6.2 91.5 13.2 137.2 14.5 45.7 1.4 91.3-3 137-7.8s91.3-10.2 114.2-12.8L960 105v96H0z"
        ></path>
        <path
          fill="#6e66a2"
          d="M0 151l22.8 1.2c22.9 1.1 68.5 3.5 114.2 4.5s91.3.6 137-3.2c45.7-3.8 91.3-11.2 137.2-15.3 45.8-4.2 91.8-5.2 137.6-1.9 45.9 3.4 91.5 11 137.2 12.4 45.7 1.3 91.3-3.7 137-3.4 45.7.4 91.3 6 114.2 8.9L960 157v44H0z"
        ></path>
        <path
          fill="#38618c"
          d="M0 175l22.8.7c22.9.6 68.5 2 114.2 1.8 45.7-.2 91.3-1.8 137-5.2 45.7-3.3 91.3-8.3 137.2-10 45.8-1.6 91.8 0 137.6 2.7 45.9 2.7 91.5 6.3 137.2 9.2 45.7 2.8 91.3 4.8 137 4.6 45.7-.1 91.3-2.5 114.2-3.6L960 174v27H0z"
        ></path>
      </svg>

      <div
        className="bg-[#38618C] flex flex-col items-center"
        name="recentlyPlayed"
      >
        <h1 className="text-white text-4xl font-semibold  mb-10">
          Recently Played
        </h1>
        {session ? (
          <RecentlyPlayed></RecentlyPlayed>
        ) : (
          <h1>log in to see stuff</h1>
        )}
      </div>
      {/* 
       <div className="bg-[#1DB954] h-screen">
        <h1 className="">Test our Game</h1>
      </div>
      <div className="bg-[#35A7FF] h-screen"></div> 
      
      */}
    </div>
  );
};
