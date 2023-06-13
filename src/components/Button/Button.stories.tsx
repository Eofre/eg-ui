import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, IButtonProps } from "./Button";

export default {
  title: "components/Button",
  component: Button,
  args: {
    children: "Content",
    isDisabled: false,
    theme: "dark",
    size: "small",
  },
} as Meta<ButtonStoryProps>;

type ButtonStoryProps = Pick<
  IButtonProps,
  "children" | "isDisabled" | "theme" | "size"
>;

export const ButtonStoryTemplate: Story<ButtonStoryProps> = ({ ...args }) => (
  <Button onClick={() => console.log("click")} {...args} />
);

ButtonStoryTemplate.storyName = "Button";
