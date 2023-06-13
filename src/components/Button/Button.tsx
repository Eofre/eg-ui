import React, { FC, ReactNode } from "react";
import classes from "./Button.module.scss";

export interface IButtonProps {
  theme?: `light` | `dark`;
  isDisabled?: boolean;
  size?: `small` | `medium` | `large`;
  onClick: () => void;
  children: ReactNode;
}

export const Button: FC<IButtonProps> = ({
  theme = `light`,
  isDisabled = false,
  size = `medium`,
  onClick,
  children,
}) => {
  const className: string = `${classes.button} ${classes[`button-${theme}`]} ${
    classes[`button-${size}`]
  }`;
  return (
    <button className={className} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};
