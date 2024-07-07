"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import HeaderMenuNav from "./HeaderMenuNav";
import { AnimatePresence, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "../Magnetic";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import useIsMobile from "@/hooks/useIsMobile";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const header = useRef(null);
  const button = useRef(null);
  const isMobile = useIsMobile();

  const [isActive, setIsActive] = useState(false);

  /* const pathname = usePathname(); */

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    if (!isMobile) {
      if (window.scrollY < window.innerHeight / 2) {
        gsap.to(button.current, {
          scale: 0,
          duration: 0.25,
          ease: "power1.out",
        });
      }

      gsap.to(button.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight / 2,
          onLeave: () =>
            gsap.to(button.current, {
              scale: 1,
              duration: 0.25,
              ease: "power1.out",
            }),
          onEnterBack: () =>
            gsap.to(button.current, {
              scale: 0,
              duration: 0.25,
              ease: "power1.out",
            }),
        },
      });
    } else {
      gsap.to(button.current, {
        scale: 1,
        duration: 0.25,
        ease: "power1.out",
      });
    }
  }, [isMobile]);

  const scrollToSelector = (selector: string | number) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: selector,
      ease: "power3.inOut",
    });
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo} onClick={() => scrollToSelector(0)}>
          <p className={styles.copyright}>©</p>
          <div className={styles.name}>
            <p className={styles.codeBy}>Code by</p>
            <p className={styles.dennis}>Andrea</p>
            <p className={styles.snellenberg}>Zago</p>
          </div>
        </div>
        {!isMobile && (
          <div className={styles.nav}>
            {/* <Magnetic>
              <div className={styles.el}>
                <a onClick={() => scrollToSelector("#")}>Work</a>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic> */}
            <Magnetic>
              <div className={styles.el}>
                <a onClick={() => scrollToSelector("#description")}>About</a>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
            <Magnetic>
              <div className={styles.el}>
                <a onClick={() => scrollToSelector("#contacts")}>Contact</a>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
          </div>
        )}
      </div>
      <div ref={button} className={styles.headerButtonContainer}>
        <div onClick={() => setIsActive(!isActive)} className={styles.button}>
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <HeaderMenuNav />}
      </AnimatePresence>
    </>
  );
};

export default Header;
