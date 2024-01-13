import { FC, ReactNode } from "react";
import styled from "./Container.module.css";

interface IContainer {
  children: ReactNode
}
export const Container: FC<IContainer> = ({ children }) => {
  return <div className={styled.container}>{children}</div>;
};
