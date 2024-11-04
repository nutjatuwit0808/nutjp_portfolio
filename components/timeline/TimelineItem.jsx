import React from "react";

function TimelineItem({ moment, company, position, jobDescription, isEven }) {
  return (
    <li>
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        className={
          (isEven ? "timeline-start" : "timeline-end") +
          " mb-10 max-w-[600px] " +
          (isEven ? "md:text-start" : "") +
          " bg-[#F3F3E0] p-6 rounded-md text-[#133E87]"
        }
      >
        <time className="font-mono italic">{moment}</time>
        <div className="text-lg font-black">{company}</div>
        <div className="text-sm text-[#608BC1]">{position}</div>
        <ul className="text-start list-disc">
          {jobDescription.map((job, index) => {
            return <li key={index}>{job}</li>;
          })}
        </ul>
      </div>
      <hr />
    </li>
  );
}

export default TimelineItem;
