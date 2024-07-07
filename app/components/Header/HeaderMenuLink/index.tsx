import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { slide } from "../anim";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollToPlugin from "gsap/ScrollToPlugin";

interface IProps {
  data: {
    title: string;
    href: string | number;
    index: number;
  };
}

const HeaderMenuLink = ({ data }: IProps) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollToPlugin);
  });

  const scrollToSelector = (selector: string | number) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: selector,
      ease: "power3.inOut",
    });
  };

  return (
    <motion.div
      custom={data.index}
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.link}
      style={{ cursor: "pointer" }}
      onClick={() => scrollToSelector(data.href)}
    >
      {/* <Link href={data.href}>{data.title}</Link> */}
      {data.title}
    </motion.div>
  );
};

export default HeaderMenuLink;
