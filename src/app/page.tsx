"use client"
import styles from "./page.module.css";
import { Box } from "@chakra-ui/react";
import { Banner } from "@/components/Home/Banner";
import { Features } from "@/components/Home/Features";
import { Intro } from "@/components/Home/Intro";
import { Board } from "@/components/Home/Board";
import { Reviews } from "@/components/Home/Reviews";
import { ServicesSection } from "@/components/Home/Services";
import { Stories } from "@/components/Home/Stories";
import { AdBlock } from "@/components/Home/AdBlock";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Box>
          <Banner />
          <Features />
          <Intro />
          <Board />
          {/* <Reviews /> */}
          <ServicesSection />
          {/* <Stories /> */}
          {/* <AdBlock /> */}
        </Box> 
        </main>
    </div>
  );
};

