import { GITHUB, LINKEDIN } from "@/constants/LinkURL";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Topbar() {
  const symbolProps = {
    size: "22px",
    color: "#133E87",
  };
  return (
    <div className="flex justify-end items-center gap-4 h-12 p-4 bg-[#CBDCEB]">
      <Link href={GITHUB} target="_blank" rel="noopener noreferrer">
        <FaGithub {...symbolProps} />
      </Link>
      <Link href={LINKEDIN} target="_blank" rel="noopener noreferrer">
        <FaLinkedin {...symbolProps} />
      </Link>
    </div>
  );
}

export default Topbar;
