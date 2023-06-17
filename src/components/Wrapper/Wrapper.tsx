import React, { CSSProperties, FC, ReactNode } from "react";
import classes from "./Wrapper.module.scss";

export interface IWrapperProps {
  children: ReactNode;
  direction: CSSProperties["flexDirection"];
  align?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
  justify?: CSSProperties["justifyContent"];
  wrap?: CSSProperties["flexWrap"];
}

export const Wrapper: FC<IWrapperProps> = ({
  children,
  direction,
  gap = "15px",
  align = "center",
  justify,
  wrap = "wrap",
}) => {
  return (
    <div
      className={classes.wrapper}
      style={{
        display: "flex",
        flexDirection: direction,
        gap: gap,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
      }}
    >
      {children}
    </div>
  );
};
