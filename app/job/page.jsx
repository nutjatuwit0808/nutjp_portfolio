import React from "react";

function Job() {
  return (
    <div className="h-full overflow-y-auto bg-white p-10">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
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
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2019-now</time>
            <div className="text-lg font-black">Avalant.Co.,ltd</div>
            <div className="text-sm text-slate-300">Full stack developer</div>
            <ul className="text-start list-disc">
              <li>
                Provide advice and find solutions to solve problems for
                developers within the team
              </li>
              <li>Develop application following requirement specification</li>
              <li>Design the database according to the specifications</li>
              <li>Analyze problems and solve problems in the application</li>
              <li>Fix issues and improve code performance</li>
              <li>Enhance new feature</li>
            </ul>
          </div>
          <hr />
        </li>
        <li>
          <hr />
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
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2018-2019</time>
            <div className="text-lg font-black">Godygo.Co.,ltd</div>
            <div className="text-sm text-slate-300">Java developer & Android developer</div>
            <ul className="text-start list-disc">
              <li>
                Responsible for the back-end of the Godygo appication and
                implemented with the Android application
              </li>
            </ul>
          </div>
          <hr />
        </li>
        <li>
          <hr />
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
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2017-2018</time>
            <div className="text-lg font-black">
              Open source technology.Co.,ltd(intern)
            </div>
            <div className="text-sm text-slate-300">Java developer</div>
            <ul className="text-start list-disc">
              <li>
                Received a job assignment to make a report summary
                system(iReport) for each department, which will pull data from
                the HospitalOS system database using Java, JSP
              </li>
            </ul>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
}

export default Job;
