"use client";
import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import Image from "next/image";
import RoundedButton from "../RoundedButton";
import Link from "next/link";

const ContactSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  return (
    <motion.div ref={container} className={styles.contact} id="contacts">
      <div className={styles.body}>
        <div className={styles.title}>
          <span>
            <div className={styles.imageContainer}>
              <Image
                fill={true}
                alt={"image"}
                src={`/images/background-2.png`}
              />
            </div>

            <h2>{"Let's work"}</h2>
          </span>

          <h2>together</h2>

          <motion.div style={{ x }} className={styles.buttonContainer}>
            <RoundedButton
              backgroundColor={"#334BD3"}
              className={styles.button}
            >
              <Link
                href="https://www.linkedin.com/in/andreazagoit/"
                target="_blank"
              >
                <p>LinkedIn</p>
              </Link>
            </RoundedButton>
          </motion.div>
        </div>

        <div className={styles.nav}>
          <RoundedButton>
            <p>info@andreazago.it</p>
          </RoundedButton>

          <RoundedButton>
            <p>+39 349 138 4504</p>
          </RoundedButton>
        </div>

        <div className={styles.info}>
          {/* <div>
            <span>
              <h3>Version</h3>

              <p>2022 © Edition</p>
            </span>

            <span>
              <h3>Version</h3>

              <p>11:49 PM GMT+2</p>
            </span>
          </div>

          <div>
            <span>
              <h3>socials</h3>

              <Magnetic>
                <p>Awwwards</p>
              </Magnetic>
            </span>

            <Magnetic>
              <p>Instagram</p>
            </Magnetic>

            <Magnetic>
              <p>Dribbble</p>
            </Magnetic>

            <Magnetic>
              <p>Linkedin</p>
            </Magnetic>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
