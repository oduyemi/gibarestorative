"use client"
import styles from "./page.module.css";
import { Box } from "@chakra-ui/react";
import { Banner } from "@/components/Home/Banner";
import { Features } from "@/components/Home/Features";
import { Intro } from "@/components/Home/Intro";
import { ServicesSection } from "@/components/Home/ServicesSection";
import { Ceo } from "@/components/About/Ceo";
import { Schedule } from "@/components/ScheduleCTA";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Box>
          <Banner />
          <Features />
          <Intro />
          <Schedule />
          <Ceo />
          <ServicesSection />
        </Box> 
        </main>
    </div>
  );
};

