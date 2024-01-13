import { FC } from "react";
import styles from "./Heading.module.css";
import clsx from "clsx";

interface IHeading {
  title: string;
  top?: boolean;
  bottom: boolean;
}

export const Heading: FC<IHeading> = ({ title, top, bottom }) => {
  return (
    <h2
      className={clsx(styles.title, {
        [styles.top]: top,
        [styles.bottom]: bottom,
      })}
    >
      {title}
    </h2>
  );
};
