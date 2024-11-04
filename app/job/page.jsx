import TimelineItem from "@/components/timeline/TimelineItem";
import React from "react";
import JobTimelineData from "@/data/jobTimelineData.json"

function Job() {
  return (
    <div className="h-full overflow-y-auto bg-white p-10">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {JobTimelineData.map((data, index) => {
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

export default Job;
