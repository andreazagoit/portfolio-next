"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import IntroSection from "./components/IntroSection";
import ProjectsSection from "./components/ProjectsSection";
import DescriptionSection from "./components/DescriptionSection";
import ContactSection from "./components/ContactSection";
import Preloader from "./components/Preloader";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import SlidingProjectsSection from "./components/SlidingProjectsSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Header />
      <IntroSection />
      <DescriptionSection />
      {/* <ProjectsSection /> */}
      <SlidingProjectsSection />
      <ContactSection />
    </main>
  );
}
