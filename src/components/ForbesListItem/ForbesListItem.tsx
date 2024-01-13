import { BiDollarCircle } from "react-icons/bi";
import { FcBullish, FcBearish } from "react-icons/fc";
import style from "./ForbesListItem.module.css";
import { IItem } from "../ForbesList/ForbesList";
import { FC } from "react";

export const ForbesListItem: FC<Omit<IItem, "id">> = ({
  name,
  avatar,
  capital,
  isIncrease,
}) => {
  return (
    <li className={style.item}>
      <img className={style.avatar} src={avatar} alt={name} />
      <h3 className={style.title}>{name}</h3>
      <span className={style.capital}>
        {capital}
        <BiDollarCircle color="#2196f3" size={22} />
        {isIncrease ? <FcBullish /> : <FcBearish />}
      </span>
    </li>
  );
};