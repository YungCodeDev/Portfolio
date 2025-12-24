"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";

export default function Scrollbar() {
  const { theme } = useTheme();
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-0.5 z-200 ${
        theme ? "bg-neutral-800" : "bg-neutral-800"
      }`}
    >
      <div
        className={`h-1 ${theme ? "bg-blue-500" : "bg-purple-500"} rounded-xl`}
        style={{ width: `${scrollPercent}%` }}
      ></div>
    </div>
  );
}
