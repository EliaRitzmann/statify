import React from "react";

export const Track = (props) => {
  console.log(props.info);
  return (
    <div className="flex items-center py-1 px-4">
        <h1 className="text-3xl w-16 text-right px-1 hidden md:block">{props.index}#</h1>
      <img src={props.info.album.images[0].url} className="w-20" alt="" />
      <div className="ml-2">
        <h1 className="font-semibold">{props.info.name}</h1>
        <h1 className="">{props.info.artists[0].name}</h1>
      </div>
    </div>
  );
};
