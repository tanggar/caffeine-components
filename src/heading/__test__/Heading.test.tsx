import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Heading from "../Heading";

describe("Heading", () => {
  it("should render with the content", () => {
    render(<Heading>This is a Test</Heading>);
    expect(
      screen.getByRole("heading", { name: "This is a Test" }),
    ).toBeInTheDocument();
  });
  it("should render as the specific heading level", () => {
    render(<Heading level={3}>This is a Test</Heading>);
    expect(
      screen.getByRole("heading", { name: "This is a Test", level: 3 }),
    ).toBeInTheDocument();
  });
  it("should render with the specified color", () => {
    render(<Heading color="accent-primary">This is a Test</Heading>);
    expect(screen.getByRole("heading", { name: "This is a Test" })).toHaveClass(
      "text-accent-primary",
    );
  });
  it("should render with the specified size", () => {
    render(<Heading size="sm">This is a Test</Heading>);
    expect(screen.getByRole("heading", { name: "This is a Test" })).toHaveClass(
      "text-sm",
    );
  });
});
