"use client";

import Image from "next/image";
import Link from "next/link";
import myImage from "../public/images/my_photo.jpg";
import Navbar from "@/components/layouts/navbar/Navbar";
import { GITHUB, LINKEDIN, RESUME, TRANSCRIPT } from "@/constants/LinkURL";
import Contact from "@/components/layouts/contact/Contact";

export default function Home() {
  const resumeHandler = () => {
    window.open(RESUME, "_blank");
  };
  const transcriptHandler = () => {
    window.open(TRANSCRIPT, "_blank");
  };
  const gitHubHandler = () => {
    window.open(GITHUB, "_blank");
  };
  const linkinHandler = () => {
    window.open(LINKEDIN, "_blank");
  };

  return (
    <div className="content-wrapper min-h-screen bg-[#DAFFFB]">
      <Navbar />
      <div className="color-bar h-32 bg-[#176B87]"></div>
      <main className="flex flex-col items-center justify-between px-24 -mt-20 relative">
        <header className="flex flex-col justify-center text-center items-center">
          <Image
            className="object-cover rounded-full mb-3 border-2 border-white"
            src={myImage}
            style={{ width: "150px", height: "150px" }}
            alt="nutjp image"
          ></Image>
          <h1 className="text-5xl mt-1 font-bold text-[#04364A]">
            Jatuwit Pitukdansakul
          </h1>
          <p className="mt-1 font-normal text-[#04364A]">I am a Full Stack Developer, currently working at Avalant.</p>
        </header>
        <menu className="grid md:grid-cols-2 min-[320px]:grid-cols-1 gap-3">
          <div className="menu cursor-pointer" onClick={resumeHandler}>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a className="mb-2 text-2xl font-bold tracking-tight text-[#04364A] dark:text-white">
                Resume(thai)
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                last updated on 2023/10/30
              </p>
              <div className="flex flex-row justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="menu cursor-pointer" onClick={transcriptHandler}>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a className="mb-2 text-2xl font-bold tracking-tight text-[#04364A] dark:text-white">
                Transcript
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                My academic record
              </p>
              <div className="flex flex-row justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="menu cursor-pointer" onClick={gitHubHandler}>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a className="mb-2 text-2xl font-bold tracking-tight text-[#04364A] dark:text-white">
                Github
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Most are in private repositories. 😢
              </p>
              <div className="flex flex-row justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="menu cursor-pointer" onClick={linkinHandler}>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a className="mb-2 text-2xl font-bold tracking-tight text-[#04364A] dark:text-white">
                Linkedin
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                last updated on 2023/11/01.
              </p>
              <div className="flex flex-row justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </menu>
        <Contact/>
      </main>
    </div>
  );
}
