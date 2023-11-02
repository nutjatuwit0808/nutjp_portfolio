"use client";

import Image from "next/image";
import Link from "next/link";
import myImage from "../public/images/my_photo.jpg";
import Navbar from "@/components/layouts/navbar/Navbar";
import {
  GITHUB,
  LINKEDIN,
  PROJECT_DEMO,
  RESUME,
  RESUME_ENG,
  RESUME_TH,
  TRANSCRIPT,
} from "@/constants/LinkURL";
import Contact from "@/components/layouts/contact/Contact";

export default function Home() {
  const resumeThHandler = () => {
    window.open(RESUME_TH, "_blank");
  };
  const resumeEngHandler = () => {
    window.open(RESUME_ENG, "_blank");
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
  const projectDemoHandler = () => {
    // window.open(PROJECT_DEMO, "_blank");
    window.location.href = PROJECT_DEMO;
  };

  return (
    <div className="content-wrapper min-h-screen bg-[#DAFFFB]">
      {/* <Navbar /> */}
      <div className="color-bar h-36 bg-[#176B87]"></div>
      <main className="flex flex-col items-center justify-between px-24 pb-4 -mt-20 relative">
        <header className="flex flex-col justify-center text-center items-center">
          <Image
            className="object-cover rounded-full mb-3 border-2 border-white shadow-white shadow-2xl"
            src={myImage}
            style={{ width: "150px", height: "150px" }}
            alt="nutjp image"
          ></Image>
          <h1 className="text-5xl mt-1 font-bold text-[#04364A]">
            Jatuwit Pitukdansakul
          </h1>
          <p className="mt-1 font-normal text-[#04364A]">
            I am a Full Stack Developer, currently working at Avalant.
          </p>
        </header>
        <menu className="grid md:grid-cols-2 min-[320px]:grid-cols-1 gap-3">
          {/* ITEM1 */}
          <div className="menu cursor-pointer" onClick={resumeEngHandler}>
            <div className="max-w-sm p-6 bg-white border-l-4 border-[#176B87] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a className="mb-2 text-2xl font-bold tracking-tight text-[#04364A] dark:text-white">
                Resume(Eng)
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                last updated on 2023/10/30.
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
          {/* ITEM1 */}
          {/* ITEM2 */}
          <div className="menu cursor-pointer" onClick={resumeThHandler}>
            <div className="max-w-sm p-6 bg-white border-l-4 border-[#176B87] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a className="mb-2 text-2xl font-bold tracking-tight text-[#04364A] dark:text-white">
                Resume(Thai)
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                last updated on 2023/10/30.
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
          {/* ITEM2 */}
          {/* ITEM3 */}
          <div className="menu cursor-pointer" onClick={projectDemoHandler}>
            <div className="max-w-sm p-6 bg-white border-l-4 border-[#176B87] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a className="mb-2 text-2xl font-bold tracking-tight text-[#04364A] dark:text-white">
                Project experience
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                last updated on 2023/11/02.
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
          {/* ITEM3 */}
          {/* ITEM4 */}
          <div className="menu cursor-pointer" onClick={linkinHandler}>
            <div className="max-w-sm p-6 bg-white border-l-4 border-[#176B87] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
          {/* ITEM4 */}
          {/* ITEM5 */}
          <div className="menu cursor-pointer" onClick={transcriptHandler}>
            <div className="max-w-sm p-6 bg-white border-l-4 border-[#176B87] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a className="mb-2 text-2xl font-bold tracking-tight text-[#04364A] dark:text-white">
                Transcript
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                My academic record.
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
          {/* ITEM5 */}
          {/* ITEM6 */}
          <div className="menu cursor-pointer" onClick={gitHubHandler}>
            <div className="max-w-sm p-6 bg-white border-l-4 border-[#176B87] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
          {/* ITEM6 */}
        </menu>
        <Contact />
      </main>
    </div>
  );
}
