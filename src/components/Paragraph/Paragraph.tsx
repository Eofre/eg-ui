import React, { CSSProperties, FC, ReactNode } from "react";
import classes from "./Paragraph.module.scss";
import { Size, Theme } from "../../types/types";

export interface IParagraphProps {
  children: ReactNode;
  theme?: Theme;
  size?: Size;
  marginTop?: CSSProperties["marginTop"];
}

export const Paragraph: FC<IParagraphProps> = ({
  children,
  theme = "dark",
  size = "small",
  marginTop = "10px",
}) => {
  const className: string = `${classes.paragraph} ${
    classes[`paragraph-${theme}`]
  } ${classes[`paragraph-${size}`]}`;
  return (
    <p className={className} style={{ marginTop: marginTop }}>
      {children}
    </p>
  );
};
