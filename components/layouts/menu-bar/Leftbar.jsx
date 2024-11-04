"use client";
import {
  RESUME_ENG,
  RESUME_TH,
  TRANSCRIPT,
  PROJECT_DEMO,
  JOB,
  EDUCATION,
} from "@/constants/LinkURL";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import styles from "./MenuBar.module.css";
import myImage from "../../../public/images/my_photo.jpg";
import { usePathname } from "next/navigation";

function Leftbar() {
  const path = usePathname();

  useEffect(() => {
    console.log("path => ", path);
  }, [path]);

  return (
    <nav className="flex flex-col items-center justify-start h-screen w-[280px] bg-[#133E87]">
      <div className="h-[30vh] w-full flex flex-col justify-center items-center p-4 bg-[#CBDCEB] text-[#133E87]">
        <Image
          className="object-cover rounded-full mb-3 border-2 border-white shadow-white shadow-2xl"
          src={myImage}
          style={{ width: "80px", height: "80px" }}
          alt="nutjp image"
          unoptimized
        />
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I’m Jatuwit Pitukdansakul, also known as
          Nut. I’m a developer currently working at Avalant.
        </p>
      </div>
      <Link
        className={
          styles.linkItem +
          " " +
          (path === "/" ? styles.linkActive : styles.linkNonActive)
        }
        href={"/"}
      >
        Skills
      </Link>
      <Link
        className={
          styles.linkItem +
          " " +
          (path === JOB ? styles.linkActive : styles.linkNonActive)
        }
        href={JOB}
      >
        Job Experience
      </Link>
      <Link
        className={
          styles.linkItem +
          " " +
          (path === EDUCATION ? styles.linkActive : styles.linkNonActive)
        }
        href={EDUCATION}
      >
        Education
      </Link>
      {/* <Link href={""}>Certificate</Link> */}
      <Link
        className={
          styles.linkItem +
          " " +
          (path === RESUME_TH ? styles.linkActive : styles.linkNonActive)
        }
        href={RESUME_TH}
      >
        Resume TH
      </Link>
      <Link
        className={
          styles.linkItem +
          " " +
          (path === RESUME_ENG ? styles.linkActive : styles.linkNonActive)
        }
        href={RESUME_ENG}
      >
        Resume ENG
      </Link>
      <Link
        className={
          styles.linkItem +
          " " +
          (path === TRANSCRIPT ? styles.linkActive : styles.linkNonActive)
        }
        href={TRANSCRIPT}
      >
        Transcript
      </Link>
      <Link
        className={
          styles.linkItem +
          " " +
          (path === PROJECT_DEMO ? styles.linkActive : styles.linkNonActive)
        }
        href={PROJECT_DEMO}
      >
        Project Demo
      </Link>
    </nav>
  );
}

export default Leftbar;
