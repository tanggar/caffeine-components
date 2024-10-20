import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Text from '../Text';

describe('Text', () => {
  it('should render with content', () => {
    render(<Text>This is a test</Text>);
    expect(screen.getByText('This is a test')).toBeInTheDocument();
  });
  it('should render with a specific size', () => {
    render(<Text size="xs">This text should be extra small</Text>);
    expect(screen.getByText('This text should be extra small')).toHaveClass(
      'text-xs',
    );
  });
  it('should render with a specific color', () => {
    render(
      <Text color="accent-primary">
        This text should be in the primary accent color
      </Text>,
    );
    expect(
      screen.getByText('This text should be in the primary accent color'),
    ).toHaveClass('text-accent-primary');
  });
});
