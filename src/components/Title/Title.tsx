import React, { CSSProperties, FC, ReactNode } from "react";
import classes from "./Title.module.scss";

export interface ITitleProps {
  children: ReactNode;
  importance: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Title: FC<ITitleProps> = ({ children, importance }) => {
  return (
    <>
      {importance === 1 && <h1 className={classes.title}>{children}</h1>}
      {importance === 2 && <h2 className={classes.title}>{children}</h2>}
      {importance === 3 && <h3 className={classes.title}>{children}</h3>}
      {importance === 4 && <h4 className={classes.title}>{children}</h4>}
      {importance === 5 && <h5 className={classes.title}>{children}</h5>}
      {importance === 6 && <h6 className={classes.title}>{children}</h6>}
    </>
  );
};
