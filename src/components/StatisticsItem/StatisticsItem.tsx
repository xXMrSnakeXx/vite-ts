import { IconContext } from "react-icons";
import styled from "./Statistics.module.css";
import { FC, ReactNode } from "react";
import { IStat } from "../Statistics/Statistics";
interface IStatisticsItem extends Omit<IStat, "id"> {
  icon: ReactNode;
}

export const StatisticsItem: FC<IStatisticsItem> = ({ title, total, icon }) => {
  return (
    <li className={styled.item}>
      <IconContext.Provider value={{ size: "30", color: "#29a14f" }}>
        {icon}
      </IconContext.Provider>
      <span className={styled.counter}>{total}</span>
      <p className={styled.text}>{title}</p>
    </li>
  );
};
