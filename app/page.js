"use client";
import React, { useState } from "react";
import styles from "./Home.module.css";
import { TechGroupItems } from "@/data/skillsData";

export default function Home() {
  const skillSymbolProps = {
    size: "24px",
    color: "#133E87",
  };

  const TechItem = ({ PopupContent, Icon }) => {
    return (
      <div className={styles.tectItem}>
        <div className={styles.popupContent}>
          <PopupContent />
        </div>
        <Icon {...skillSymbolProps} />
      </div>
    );
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeCardWrapper}>
        {TechGroupItems.map((item) => {
          return (
            <div key={item?.groupName} className={styles.homeCard}>
              <h2 className={styles.techTitleWrapper}>{item?.groupName}</h2>
              <div className={styles.techContentWrapper}>
                {item?.skills.map((skill) => {
                  return (
                    <TechItem
                      key={skill?.skillName}
                      PopupContent={skill?.popupContent}
                      Icon={skill?.icon}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
