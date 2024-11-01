import { GITHUB, LINKEDIN } from "@/constants/LinkURL";
import Link from "next/link";
import React from "react";

function Topbar() {
  return (
    <div className="flex justify-end items-center gap-2 h-12 p-4 bg-slate-100">
      <Link href={GITHUB}  target="_blank" rel="noopener noreferrer">Github</Link>
      <Link href={LINKEDIN}  target="_blank" rel="noopener noreferrer">LinkIn</Link>
    </div>
  );
}

export default Topbar;
