import React from "react";

export const Track = (props) => {

  function color(){
    if(props.textcolor == "white"){
      return "text-white"
    }
  }

  return (
    <a className={color()} href={props.info.external_urls.spotify} target="_blank">
      <div className="flex items-center w-auto py-1 md:hidden px-2">
        {/*<h1 className="text-lg font-semibold w-6">{props.number}</h1> */}
        
      <img src={props.info.album.images[0].url} className="w-24 h-24" alt="" />
      <div className="ml-2 ">
        <h1 className="font-semibold ">{props.info.name}</h1>
        <h1 className="">{props.info.artists[0].name}</h1>
        <h1 className="text-sm font-normal">{props.number}</h1>
      </div>
    </div>
    <div className="hidden md:block">
    <div className="flex flex-col items-center w-64">
      <h1 className="text-2xl mb-1">{props.number}</h1>
      <img src={props.info.album.images[0].url} className="w-64 h-64" alt="" />
      <div className="flex flex-col items-center mt-1">
        <h1 className="font-semibold text-xl text-center">{props.info.name}</h1>
        <h1 className="md:text-lg text-center">{props.info.artists[0].name}</h1>
      </div>
    </div>
    </div>
    </a>
    
  );
};