import React from "react";
import "../../app/globals.css";
import Image from "next/image";
import MyResume from "../../public/images/nutjp_resume_image_thai.png";

function index() {
  return (
    <div className="w-full h-full p-10">
      <Image src={MyResume} alt="nutjp resume thai image"></Image>
    </div>
  );
}

export default index;
