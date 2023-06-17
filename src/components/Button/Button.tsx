import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import classes from "./Button.module.scss";
import { Size, Theme, View } from "../../types/types";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: Theme;
  view?: View;
  size?: Size;
  children: ReactNode;
}

export const Button: FC<IButtonProps> = ({
  size = `small`,
  children,
  theme = `gold`,
  view = `filled`,
}) => {
  const className: string = `${classes.button} ${classes[`button-${size}`]} ${
    classes[`button-${theme}`]
  } ${classes[`${theme}-${view}`]}`;
  return <button className={className}>{children}</button>;
};
