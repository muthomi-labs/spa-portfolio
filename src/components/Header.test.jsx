import { render, screen } from '@testing-library/react';
import Header from './Header';
import { describe, it, expect } from 'vitest';

describe('Header component', () => {
  it('renders the header with the correct title', () => {
    render(<Header />);
    const titleElement = screen.getByText(/Personal Project Showcase/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the header with the correct subtitle', () => {
    render(<Header />);
    const subtitleElement = screen.getByText(/A curated list of things I've built/i);
    expect(subtitleElement).toBeInTheDocument();
  });
});