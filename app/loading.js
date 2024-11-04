import Image from "next/image";
import React from "react";
import loadingGif from "@/assets/gif/loading_portfolio.gif"

export default function Loading() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-white text-[#133E87]">
      <Image alt="loading" src={loadingGif} width={"8px"} height={"8px"} />
    </div>
  );
}
