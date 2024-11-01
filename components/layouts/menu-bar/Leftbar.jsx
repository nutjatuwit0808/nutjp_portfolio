import {
  RESUME_ENG,
  RESUME_TH,
  TRANSCRIPT,
  GITHUB,
  PROJECT_DEMO,
} from "@/constants/LinkURL";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import myImage from "../../../public/images/my_photo.jpg";

function Leftbar() {
  return (
    <nav className="flex flex-col items-center justify-start gap-8 h-screen w-[280px]">
      <div className="h-[30vh] w-full flex flex-col justify-center items-center p-4 bg-slate-100">
        <Image
          className="object-cover rounded-full mb-3 border-2 border-white shadow-white shadow-2xl"
          src={myImage}
          style={{ width: "80px", height: "80px" }}
          alt="nutjp image"
        />
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am Jatuwit Pitukdansakul. My nickname is Nut. I am a Developer, currently working at
          Avalant.
        </p>
      </div>
      <Link href={RESUME_TH}>Resume TH</Link>
      <Link href={RESUME_ENG}>Resume ENG</Link>
      <Link href={TRANSCRIPT}>Transcript</Link>
      <Link href={PROJECT_DEMO}>Project Demo</Link>
      <Link href={""}>Tech Stack</Link>
      <Link href={""}>Work Timeline</Link>
      <Link href={""}>Graduted Timeline</Link>
      <Link href={""}>Certificate</Link>
      <Link href={""}>About Me</Link>
      {/* <Link href={""}>Knowledge</Link> */}
    </nav>
  );
}

export default Leftbar;
