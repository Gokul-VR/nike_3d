import React from "react";
import nike from "../public/nike-logo.png";

export default function Sidebar() {
  return (
    <div className="flex justify-between mt-7 items-center text-white">
      <img src={nike} className="h-8" />
      <div className="flex gap-5 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="fill-white h-6 w-6"
        >
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
        </svg>
      </div>
    </div>
  );
}
