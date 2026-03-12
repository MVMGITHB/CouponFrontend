"use client";

import { useEffect } from "react";

export default function ChunkErrorHandler() {
  useEffect(() => {
    const handleChunkError = (e) => {
      if (e.message && e.message.includes("ChunkLoadError")) {
        window.location.reload();
      }
    };

    window.addEventListener("error", handleChunkError);

    return () => {
      window.removeEventListener("error", handleChunkError);
    };
  }, []);

  return null;
}