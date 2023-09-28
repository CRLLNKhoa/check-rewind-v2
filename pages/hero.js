import React from "react";
import { imgHero } from "./api/hero";

function Hero() {
  return (
    <>
      <div className="flex flex-col w-full mt-24 mb-10 justify-center items-center">
      <p className="mb-4 font-bold">Hero & Skill Tree</p>
      {imgHero.map((item,index)=> {
        return <>
        <div className="divider"></div>
        <div className="grid h-24 card w-4/5 rounded-box place-items-center">
          <img className="h-24" src={item} alt="" />
        </div></>
      })}
      </div>
    </>
  );
}

export default Hero;
