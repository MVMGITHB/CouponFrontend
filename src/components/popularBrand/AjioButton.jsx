"use client";
import { useState } from "react";
import Link from "next/link";

const AjioButton = () => {
  const [isActivated, setIsActivated] = useState(false);

  const handleClick = () => {
    setIsActivated(true);
  };

  return (
    <Link
      href="https://tracking.ajio.business/click?pid=87&offer_id=2&sub1=cc%20&redirect=https://www.ajio.com/s/uhs1-min-70-percent-off-5629-90556"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`font-semibold text-lg px-8 py-3 rounded-full shadow-lg transition-transform duration-300
        ${isActivated 
          ? "bg-green-500 text-white hover:bg-green-600" 
          : "bg-yellow-400 text-gray-900 hover:bg-yellow-500 hover:scale-105"
        }`}
    >
      {isActivated ? "Code Activated" : "GET CODE"}
    </Link>
  );
};

export default AjioButton;
