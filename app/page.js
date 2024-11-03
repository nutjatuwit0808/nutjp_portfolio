"use client";
import React, { useState } from "react";
import styles from "./Home.module.css";
import { AiOutlineJavaScript } from "react-icons/ai";
import { BiLogoTypescript } from "react-icons/bi";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDocker,
  FaProjectDiagram,
  FaAws,
  FaDigitalOcean,
} from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import {
  SiCsswizardry,
  SiDaisyui,
  SiJquery,
  SiAntdesign,
  SiMui,
  SiNestjs,
  SiSpringboot,
  SiDbeaver,
  SiEclipseide,
  SiXcode,
  SiAndroidstudio,
  SiPostman,
} from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

export default function Home() {
  function ContentTest() {
    return (
      <div>
        <h2 className="font-bold">Test</h2>
        <p>lorem20</p>
      </div>
    );
  }

  const skillSymbolProps = {
    size: "24px",
    color: "#133E87",
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeCardWrapper}>
        <div className={styles.homeCard}>
          <h2 className={styles.techTitleWrapper}>Programming Languages</h2>
          <div className={styles.techContentWrapper}>
            <div className={styles.tectItem}>
              <div className={styles.popupContent}>
                <ContentTest />
              </div>
              <AiOutlineJavaScript {...skillSymbolProps} />
            </div>
            <div className={styles.tectItem}>
              <div className={styles.popupContent}>
                <ContentTest />
              </div>
              <BiLogoTypescript {...skillSymbolProps} />
            </div>
            <div className={styles.tectItem}>
              <FaJava {...skillSymbolProps} />
            </div>
          </div>
        </div>
        <div className={styles.homeCard}>
          <h2 className={styles.techTitleWrapper}>Frontend</h2>
          <div className={styles.techContentWrapper}>
            <div className={styles.tectItem}>
              <TiHtml5 {...skillSymbolProps} />
            </div>
            <div className={styles.tectItem}>
              <SiCsswizardry {...skillSymbolProps} />
            </div>
            <div className={styles.tectItem}>
              <SiJquery {...skillSymbolProps} />
            </div>
            <div className={styles.tectItem}>
              <RiTailwindCssFill {...skillSymbolProps} />
            </div>
            <div className={styles.tectItem}>
              <SiDaisyui {...skillSymbolProps} />
            </div>
            <div className={styles.tectItem}>
              <SiAntdesign {...skillSymbolProps} />
            </div>
            <div className={styles.tectItem}>
              <SiMui {...skillSymbolProps} />
            </div>
            <div className={styles.tectItem}>
              <FaReact {...skillSymbolProps} />
            </div>
            <div className={styles.tectItem}>
              <RiNextjsFill {...skillSymbolProps} />
            </div>
          </div>
        </div>
        <div className={styles.homeCard}>
          <h2 className={styles.techTitleWrapper}>Backend</h2>
          <div className={styles.techContentWrapper}>
            <div className={styles.tectItem}>
              <FaNodeJs {...skillSymbolProps} />
            </div>
            <div className={styles.tectItem}>
              <SiNestjs {...skillSymbolProps} />
            </div>
            <div className={styles.tectItem}>
              <SiSpringboot {...skillSymbolProps} />
            </div>
          </div>
        </div>
        <div className={styles.homeCard}>
          <h2 className={styles.techTitleWrapper}>Tools</h2>
          <div className={styles.techContentWrapper}>
            <div className={styles.tectItem}>
              <VscVscode {...skillSymbolProps} />
            </div>
            <div className={styles.tectItem}>
              <SiDbeaver {...skillSymbolProps} />
            </div>
            <div className={styles.tectItem}>
              <FaGithub {...skillSymbolProps} />
            </div>
            <div className={styles.tectItem}>
              <SiEclipseide {...skillSymbolProps} />
            </div>
            <div className={styles.tectItem}>
              <SiXcode {...skillSymbolProps} />
            </div>
            <div className={styles.tectItem}>
              <SiAndroidstudio {...skillSymbolProps} />
            </div>
            <div className={styles.tectItem}>
              <FaDocker {...skillSymbolProps} />
            </div>
            <div className={styles.tectItem}>
              <FaProjectDiagram {...skillSymbolProps} />
            </div>
            <div className={styles.tectItem}>
              <SiPostman {...skillSymbolProps} />
            </div>
          </div>
        </div>
        <div className={styles.homeCard}>
          <h2 className={styles.techTitleWrapper}>Cloud</h2>
          <div className={styles.techContentWrapper}>
            <div className={styles.tectItem}>
              <FaAws {...skillSymbolProps} />
            </div>
            <div className={styles.tectItem}>
              <FaDigitalOcean {...skillSymbolProps} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
