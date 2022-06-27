import { useSession } from "next-auth/react";
import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { Track } from "../components/Track";

export default function TopTracks() {
  const { data: session, status } = useSession();
  const [list, setList] = useState([]);

  useEffect(() => {
    const getMyPlaylists = async () => {
      const res = await fetch("/api/spotify/toptracks");
      const { items } = await res.json();
      setList(items);
    };

    getMyPlaylists();
  }, []);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    //redirect because no log in
    Router.push("/");
  }

  var items = [];

  for (let i = 0; i < list.length; i++) {
    items.push(<Track info={list[i]} index={i + 1}></Track>);
  }

  return <div>
    <div className="flex ">
    <Link href="/">{"< Back Home"}</Link>
    <h1>Top Tracks</h1>
    </div>
    {items}
    </div>;
}
