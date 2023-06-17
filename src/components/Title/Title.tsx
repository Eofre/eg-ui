import React, { CSSProperties, FC, ReactNode } from "react";
import classes from "./Title.module.scss";
import { Importance, Size, Theme } from "../../types/types";

export interface ITitleProps {
  children: ReactNode;
  importance: Importance;
  theme?: Theme;
  size?: Size;
}

export const Title: FC<ITitleProps> = ({
  children,
  importance,
  theme = "dark",
  size = "large",
}) => {
  const className: string = `${classes.title} ${classes[`title-${theme}`]} ${
    classes[`title-${size}`]
  }`;
  return (
    <>
      {importance === 1 && <h1 className={className}>{children}</h1>}
      {importance === 2 && <h2 className={className}>{children}</h2>}
      {importance === 3 && <h3 className={className}>{children}</h3>}
      {importance === 4 && <h4 className={className}>{children}</h4>}
      {importance === 5 && <h5 className={className}>{children}</h5>}
      {importance === 6 && <h6 className={className}>{children}</h6>}
    </>
  );
};
