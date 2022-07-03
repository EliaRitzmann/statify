import { useSession } from "next-auth/react";
import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";

import { Track } from "../components/Track";

export default function TopTracks() {
  const { status } = useSession();
  const [list, setList] = useState([]);
  const [time_range, setTime_range] = useState("medium_term");

  useEffect(() => {
    const getMyPlaylists = async () => {
      const res = await fetch("https://statify.elia-ritzmann.ch//api/spotify/toptracks?time_range=" + time_range
      );
      const { items } = await res.json();
      setList(items);
    };

    getMyPlaylists();
  }, [time_range]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    //redirect because no log in
    Router.push("/");
  }

  var items = [];

  for (let i = 0; i < list.length; i++) {
    items.push(<Track info={list[i]} key={i} number={i + 1}></Track>);
  }

  function handleDropdown() {
    var select = document.getElementById("dropdown");
    var value = select.options[select.selectedIndex].value;
    setTime_range(value);
  }

  return (
    <div className="">
      <div className="flex justify-between my-2 px-5 items-center">
        <h1 className="text-2xl font-semibold">Top Tracks</h1>
        <select
          name="cars"
          id="dropdown"
          className="form-select rounded-lg w-1/3 md:w-auto"
          onChange={handleDropdown}
        >
          <option value="short_term">4 weeks</option>
          <option value="medium_term" selected="selected">
            6 months
          </option>
          <option value="long_term">lifetime</option>
        </select>
      </div>

      <div className="flex flex-col">
        <div className="md:flex md:flex-wrap md:gap-20 md:justify-center">
          {items}
        </div>
      </div>
    </div>
  );
}
