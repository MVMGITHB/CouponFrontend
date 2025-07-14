'use client'

import { useState } from "react";

export default function CouponBox({ code}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);

    // Reset after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex justify-center items-center mt-2 gap-2">
      <div className="border-2 border-[#0d65a0] bg-[#DCEEFF] rounded-b-md">
        <h4 className="text-2xl text-[#0d65a0] px-4 py-1">{code}</h4>
      </div>
      <p
        onClick={handleCopy}
        className={`p-2 rounded-md cursor-pointer transition 
          ${copied ? "bg-green-600" : "bg-[#0d65a0] hover:bg-[#09578b]"} 
          text-white`}
      >
        {copied ? "Copied!" : "Copy code"}
      </p>
    </div>
  );
}
