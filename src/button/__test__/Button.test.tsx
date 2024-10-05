import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

describe('Button', () => {
  it('should render with the label', () => {
    render(<Button label="Test Me" />);
    expect(screen.getByRole('button', { name: 'Test Me' })).toBeInTheDocument();
  });
  it('should render as disabled', () => {
    render(<Button disabled label="Test Button" />);
    expect(screen.getByRole('button', { name: 'Test Button' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Test Button' })).toHaveAttribute(
      'aria-disabled',
      'true',
    );
  });
  it('should invoke the onClick callback when user clicks on the it', () => {
    const onClickSpy = vi.fn();
    render(<Button label="Test Button" onClick={onClickSpy} />);
    userEvent.click(screen.getByRole('button', { name: 'Test Button' }));
    return waitFor(() => {
      expect(onClickSpy).toHaveBeenCalled();
    });
  });
});
