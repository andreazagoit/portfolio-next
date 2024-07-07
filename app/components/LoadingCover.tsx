"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const LoadingCover = () => {
  const container = useRef(null);
  const loadingBarRef = useRef(null);
  const [open, setOpen] = useState(true);

  /* useGSAP(() => {
    if (!open) {
      gsap.to(container.current, {
        height: 100,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(container.current, {
        height: "100vh",
        ease: "power3.inOut",
      });
    }
  }, [open]); */

  useGSAP(() => {
    const tl = gsap.timeline();
    /* tl.to(
      container.current,
      { background: "red", height: 80, ease: "power3.inOut" },
      1
    );
    tl.to(
      container2.current,
      { background: "green", height: 80, ease: "power3.inOut" },
      2
    ); */
    tl.to(loadingBarRef.current, { width: "30%", ease: "power1.inOut" });
    tl.to(loadingBarRef.current, { width: "50%", ease: "power1.inOut" });
    tl.to(loadingBarRef.current, { width: "100vw", ease: "power1.inOut" });
    tl.to(loadingBarRef.current, { height: "100%", ease: "power3.inOut" }, 2);
  });

  return (
    <>
      {/* <div
        ref={container}
        className="bg-black bg-opacity-75 backdrop-filter backdrop-blur-lg"
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          zIndex: 100,
        }}
        onClick={() => setOpen(!open)}
      >
        LoadingCover
      </div> */}
      {/* <div
        ref={container}
        className="bg-blue"
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          zIndex: 100,
        }}
        onClick={() => setOpen(!open)}
      >
        LoadingCover
      </div> */}
      <div
        ref={loadingBarRef}
        className="bg-black absolute w-full"
        style={{
          background: "red",
          height: 80,
          bottom: 0,
          left: 0,
          width: 0,
          boxSizing: "border-box",
        }}
      >
        ciao2
      </div>
    </>
  );
};

export default LoadingCover;
