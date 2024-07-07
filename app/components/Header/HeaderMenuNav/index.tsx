import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import HeaderMenuLink from "../HeaderMenuLink";
import { motion } from "framer-motion";
import { menuSlide } from "../anim";
import Curve from "../Curve";
import gsap from "gsap";

const HeaderMenuNav = () => {
  /* const navItems = [
    { title: "Home", href: "/" },
    { title: "Work", href: "/work" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "contact" },
  ]; */

  const navItems = [
    { title: "Home", href: 0 },
    { title: "About", href: "#description" },
    { title: "Contacts", href: "#contacts" },
  ];

  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((item, index) => {
            return <HeaderMenuLink key={index} data={{ ...item, index }} />;
          })}
        </div>
        <div className={styles.footer}>
          {/* <a href="">Awwwards</a>
          <a href="">Instagram</a>
          <a href="">Dribble</a> */}
          <a href="https://www.linkedin.com/in/andreazagoit/" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default HeaderMenuNav;
