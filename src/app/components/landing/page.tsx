import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import * as React from "react";
import { useTheme } from "next-themes";
import { Icons } from "../../components/iconProvider/page";
import Image from "next/image";
import styles from "./Landing.module.css";

export default function Landing() {
  const { setTheme } = useTheme();
  return (
    <>
      <div className={styles.container}>
        {/* Portfolio owner name */}
        <div className={styles.nameContainer}>
          <h1 className={styles.name}>
            PRIYANSH
          </h1>
        </div>

        {/* Orbiting techs */}
        <div className={styles.techContainer}>
          <div className={styles.profileImage}>
            <Image
              src="/images/priyansh_profile.png"
              alt="profile-pic"
              width={400}
              height={400}
              priority
              unoptimized
            />
          </div>
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
