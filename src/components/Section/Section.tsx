import { FC, ReactNode } from "react";
import style from "./Section.module.css";
interface ISection {
  children: ReactNode
}
export const Section: FC<ISection> = ({ children }) => {
  return <section className={style.section}>{children}</section>;
};
