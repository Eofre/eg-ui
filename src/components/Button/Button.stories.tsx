import React from "react";
import { Story } from "@storybook/react";
import { Button, IButtonProps } from "./Button";

export default {
  title: "components/Button",
  component: Button,
  args: {
    children: "Content",
    isDisabled: false,
    theme: "dark",
  },
};

type ButtonProps = Pick<IButtonProps, "children" | "isDisabled" | "theme">;

export const ButtonStoryTemplate: Story<ButtonProps> = ({ ...args }) => (
  <Button onClick={() => console.log("click")} {...args} />
);

ButtonStoryTemplate.storyName = "Button";
