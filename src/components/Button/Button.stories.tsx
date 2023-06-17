import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, IButtonProps } from "./Button";

export default {
  title: "components/Button",
  component: Button,
  args: {
    children: "Content",
    theme: "gold",
    size: "small",
    disabled: false,
    view: "text",
  },
} as Meta<ButtonStoryProps>;

type ButtonStoryProps = Pick<
  IButtonProps,
  "children" | "theme" | "size" | "disabled" | "view"
>;

export const ButtonStoryTemplate: Story<ButtonStoryProps> = ({ ...args }) => (
  <Button {...args} />
);

ButtonStoryTemplate.storyName = "Button";
