"use client";
import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const IntroSection = () => {
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const sliderRef = useRef(null);

  let xPercent = 0;
  let direction = -1;

  const slidingText = "Developer - Designer - Photographer - ";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(sliderRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstTextRef.current, { xPercent });
    gsap.set(secondTextRef.current, { xPercent });
    xPercent += 0.025 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div className={styles.main}>
      <div className={styles.imageContainer}>
        <Image
          fill={true}
          src="/images/background-2.png"
          alt="image"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div>
        <div
          className={styles.descriptionText}
          data-scroll
          data-scroll-speed={0.2}
        >
          <p className={styles.descriptionTextName}>Andrea Zago</p>
          <p>Full-Stack Developer</p>
        </div>
      </div>
      <div className={styles.sliderContainer}>
        <div ref={sliderRef} className={styles.slider}>
          <p ref={firstTextRef}>{slidingText}</p>
          <p ref={secondTextRef}>{slidingText}</p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
