import { useInView } from "framer-motion";
import React, { useRef } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";
import RoundedButton from "../RoundedButton";
import Link from "next/link";

const DescriptionSection = () => {
  const phrase =
    "I'm Andrea, a Full-Stack Developer with a strong emphasis on Visual Design. I possess a keen ability for critical analysis, enabling me to select the best standards and optimize processes for tangible benefits. My passion spans across various realms of innovation and design, and I firmly believe that life is an ongoing journey of self-improvement.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div ref={description} className={styles.description} id="description">
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>

        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </motion.p>

        <div data-scroll data-scroll-speed={0.1}>
          <RoundedButton className={styles.button}>
            <a href="/pdf/Andrea_Zago_Curriculum.pdf" download>
              <p>
                Download <br />
                the CV
              </p>
            </a>
          </RoundedButton>
        </div>
      </div>
    </div>
  );
};

export default DescriptionSection;
