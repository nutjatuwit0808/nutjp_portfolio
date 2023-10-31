import React from 'react'
import "../../app/globals.css";
import Image from "next/image";
import MyTranscript from "../../public/images/jatuwitTranscript.png";

function Transcript() {
  return (
    <div className="w-full h-full p-10">
      <Image src={MyTranscript} alt="nutjp transcript image"></Image>
    </div>
  )
}

export default Transcript