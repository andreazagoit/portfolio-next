"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Project from "./Project";

const ProjectsSection = () => {
  const projects = [
    {
      title: "C2 Montreal",
      src: "c2montreal.png",
      color: "#000000",
    },

    {
      title: "Office Studio",
      src: "officestudio.png",
      color: "#8C8C8C",
    },

    {
      title: "Locomotive",
      src: "locomotive.png",
      color: "#EFE8D3",
    },

    {
      title: "Silencio",
      src: "silencio.png",
      color: "#706D63",
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className={styles.main}>
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>

      {/* <Modal modal={modal} projects={projects} /> */}
    </div>
  );
};

export default ProjectsSection;
