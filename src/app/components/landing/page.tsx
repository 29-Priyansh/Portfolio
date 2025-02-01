import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import * as React from "react";
import { useTheme } from "next-themes";
import { Icons } from "../../components/iconProvider/page";
import Image from "next/image";

export default function Landing() {
  const { setTheme } = useTheme();
  return (
    <>
      <div className="flex justify-between absolute w-full h-full">
        {/* Portfolio owner name */}
        <div className="overflow-hidden flex items-center">
          <h1 className="pl-20 text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-bold tracking-tighter text-transparent dark:text-transparent dark:[-webkit-text-stroke:1px_white] [-webkit-text-stroke:1px_black]">
            PRIYANSH
          </h1>
        </div>

        {/* Oribiting techs */}
        <div className="relative flex w-1/2 flex-col items-center justify-center rounded-lg">
          {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Circles
      </span> */}
          {/* <div className="flex justify-center items-center h-screen"> */}
          <div className="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/images/priyansh_profile.png"
              alt="profile-pic"
              width={400}
              height={400}
              priority
              unoptimized
            />
          </div>
          {/* </div> */}
          <OrbitingCircles iconSize={40} radius={225} speed={2}>
            <Icons.html />
            <Icons.css3 />
            <Icons.javascript />
            <Icons.typescript />
            <Icons.c />
            <Icons.cpp />
            <Icons.python />
            <Icons.php />
          </OrbitingCircles>
          <OrbitingCircles iconSize={50} radius={300} reverse>
            <Icons.nextjs />
            <Icons.strapi />
            <Icons.react />
            <Icons.medusa />
            <Icons.tailwind />
            <Icons.mysql />
            <Icons.postgresql />
            <Icons.mongodb />
          </OrbitingCircles>
        </div>
      </div>
    </>
  );
}
