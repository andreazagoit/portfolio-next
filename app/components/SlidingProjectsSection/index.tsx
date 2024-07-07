import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "project-1.jpg",
  },

  {
    color: "#d6d7dc",
    src: "project-1.jpg",
  },

  {
    color: "#e3e3e3",
    src: "project-1.jpg",
  },

  {
    color: "#a8aebc",
    src: "project-1.jpg",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "project-1.jpg",
  },
  {
    color: "#e5e0e1",
    src: "project-1.jpg",
  },
  {
    color: "#d7d4cf",
    src: "project-1.jpg",
  },
  {
    color: "#e1dad6",
    src: "project-1.jpg",
  },
];

const SlidingProjectsSection = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.slidingImages}>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>

      <motion.div style={{ x: x2 }} className={styles.slider}>
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SlidingProjectsSection;
