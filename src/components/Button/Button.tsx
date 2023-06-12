import React, { FC, ReactNode } from "react";
import classes from "./Button.module.scss";

export interface IButtonProps {
  theme?: `light` | `dark`;
  isDisabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}

export const Button: FC<IButtonProps> = ({
  theme = `light`,
  isDisabled = false,
  onClick,
  children,
}) => {
  const className: string = `${classes.button} ${classes[`button-${theme}`]}`;
  return (
    <button className={className} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};
