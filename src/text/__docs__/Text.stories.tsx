import { Meta, StoryObj } from '@storybook/react';
import Text from '../Text';

const meta: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
};

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'This is the default text.',
  },
};

export const Bolded: Story = {
  args: {
    children: 'This is bolded text.',
    bold: true,
  },
};

export const SmallSize: Story = {
  args: {
    children: 'This is small text.',
    size: 'sm',
  },
};

export const LargeSize: Story = {
  args: {
    children: 'This is large text.',
    size: 'lg',
  },
};

export default meta;
