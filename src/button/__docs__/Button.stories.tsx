import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: 'Button',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    label: 'Button',
    type: 'primary',
    disabled: false,
    onClick: () => console.log('Button'),
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    type: 'secondary',
    disabled: false,
    onClick: () => console.log('Button'),
  },
};

export const Ghost: Story = {
  args: {
    label: 'Button',
    type: 'ghost',
    disabled: false,
    onClick: () => console.log('Button'),
  },
};
