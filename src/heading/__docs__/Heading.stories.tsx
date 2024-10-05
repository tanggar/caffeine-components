import { Meta, StoryObj } from '@storybook/react';
import Heading from '../Heading';

const meta: Meta<typeof Heading> = {
  title: 'Heading',
  component: Heading,
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const HeadingLevel1: Story = {
  args: {
    children: 'Heading 1',
    level: 1,
  },
};

export const HeadingLevel2: Story = {
  args: {
    children: 'Heading 2',
    level: 2,
  },
};

export const HeadingLevel3: Story = {
  args: {
    children: 'Heading 3',
    level: 3,
  },
};

export const HeadingLevel4: Story = {
  args: {
    children: 'Heading 2',
    level: 4,
  },
};

export const HeadingLevel5: Story = {
  args: {
    children: 'Heading 5',
    level: 5,
  },
};

export const HeadingLevel6: Story = {
  args: {
    children: 'Heading 6',
    level: 6,
  },
};

export const HeadingAsDisplay: Story = {
  args: {
    children: 'Heading in the Display Font',
    asDisplay: true,
  },
};
