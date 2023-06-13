import React, { FC, ReactNode } from "react";
import classes from "./Container.module.scss";

export interface IContainerProps {
  maxWidth?: string;
  children: ReactNode;
}

export const Container: FC<IContainerProps> = ({
  maxWidth = `1340px`,
  children,
}) => {
  return (
    <div className={classes.container} style={{ maxWidth }}>
      {children}
    </div>
  );
};
