import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Button",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    label: "Button",
    primary: true,
    disabled: false,
    onClick: () => console.log("Button"),
  },
};
export const Secondary: Story = {
  args: {
    label: "Button",
    primary: false,
    disabled: false,
    onClick: () => console.log("Button"),
  },
};
