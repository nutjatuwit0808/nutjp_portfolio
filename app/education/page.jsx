"use client"
import React from "react";
import EducatoinTimelineData from "@/data/educationTimelineData.json";
import TimelineItem from "@/components/timeline/TimelineItem";

function Education() {
  return (
    <div className="h-full overflow-y-auto bg-white p-10">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {EducatoinTimelineData.map((data, index) => {
          return (
            <TimelineItem
              key={data?.moment}
              moment={data?.moment}
              company={data?.company}
              position={data?.position}
              jobDescription={data?.jobDescription}
              isEven={index % 2 === 0}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Education;
