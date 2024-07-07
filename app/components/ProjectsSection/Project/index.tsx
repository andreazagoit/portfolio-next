import React from "react";
import styles from "./styles.module.scss";

interface IProps {
  index: number;
  title: string;
  setModal: React.Dispatch<
    React.SetStateAction<{
      active: boolean;
      index: number;
    }>
  >;
}

const Project = ({ index, title, setModal }: IProps) => {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <h2>{title}</h2>

      <p>Design & Development</p>
    </div>
  );
};

export default Project;
