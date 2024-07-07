"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

interface IProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedClippedContent = ({ children, delay = 0 }: IProps) => {
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.set(contentRef.current, {
      yPercent: -100,
    });
    gsap.to(contentRef.current, {
      yPercent: 0,
      ease: "power3.out",
      delay,
    });
  }, [children, delay]);

  return (
    <div>
      <div
        style={{
          display: "inline-block",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div ref={contentRef}>
          <h1>{children} </h1>
        </div>
      </div>
    </div>
  );
};

export default AnimatedClippedContent;
