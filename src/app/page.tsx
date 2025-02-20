"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import Navbar from "./components/navbar/page";
import Landing from "./components/landing/page";
import About from "./components/about/page";

export default function Home() {
  const getPositionStyles = (index: number): React.CSSProperties => {
    const positions: Record<number, React.CSSProperties> = {
      0: { top: "0" }, // Fixed top positioning
      1: { right: "0", top: "10%" },
      2: { left: "0", bottom: "10%" },
      3: { right: "0", bottom: "0" }, // Adjusted from -50%
      4: {},
    };
    return positions[index] || {};
  };

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen overflow-hidden light:bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-neutral-950">
        <Navbar />
        <Landing />
        <About/>
      </div>
    </>
  );
}
