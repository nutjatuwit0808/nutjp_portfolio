import React from "react";

function FloatBackButton() {
  const backHomeHandler = () => {
    window.location.href = "/";
  };
  return (
    <div
      onClick={backHomeHandler}
      className="w-16 h-16 rounded-full bg-[#176B87] fixed bottom-4 right-4 z-50 flex justify-center items-center cursor-pointer hover:-translate-y-2 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-10 h-10 z-20 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    </div>
  );
}

export default FloatBackButton;
