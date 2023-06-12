import React, { FC, ReactNode } from "react";

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
  const className: string = `button button-${theme}`;
  return (
    <button className={className} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};
