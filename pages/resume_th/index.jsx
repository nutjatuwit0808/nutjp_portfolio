import React from "react";
import "../../app/globals.css";
import Image from "next/image";
import MyResume from "../../public/images/nutjatuwit_resume_th_2024_page-0001.jpg";

function index() {
  return (
    <div className="w-full h-full p-10 flex flex-row justify-center">
      <Image src={MyResume} alt="nutjp resume thai image"></Image>
    </div>
  );
}

export default index;
