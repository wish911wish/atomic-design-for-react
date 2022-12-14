import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Button } from "./index";

type T = typeof Button;
type Story = ComponentStoryObj<T>;

export default {
  component: Button,
  args: { children: "้ไฟกใใ" },
} as ComponentMeta<T>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};
