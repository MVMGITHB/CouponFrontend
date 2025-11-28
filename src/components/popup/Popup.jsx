"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

export default function Popup() {
  const [visible, setVisible] = useState(false);
  const [showClose, setShowClose] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 2000);
    const closeTimer = setTimeout(() => setShowClose(true), 1000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  if (!visible) return null;

  return (

   
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-1">
      <div className="relative min-w-[65%] flex justify-center  rounded-2xl overflow-hidden">

         {showClose && (
          <button
            onClick={() => setVisible(false)}
            className="absolute cursor-pointer top-3  right-1 md:right-[200px] z-20 bg-white/80 hover:bg-white rounded-full p-1 transition"
          >
            <X size={20} className="text-black" />
          </button>
        )}
        
        <Link
          href="https://offer.mvmtracking.com/api/clicks?campaign_id=491&pub_id=15&originalClick={}"
          target="_blank"
          className="relative"
        >
          <img
            src="/popularbrand/Desktop-Pop-ups.gif"
            alt="Popup"
            className=" hidden md:block h-auto max-h-[60vh] object-contain rounded-2xl "
          />

          <img
            src="/popularbrand/700-mob-gif.gif"
            alt="Popup"
            className="block md:hidden h-auto max-h-[80vh] object-contain rounded-2xl "
          />

         
        </Link>
      </div>
    </div>
  );
}
