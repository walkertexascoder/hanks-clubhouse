import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import Home from "./page";

afterEach(cleanup);

describe("Homepage", () => {
  it("renders 'Hank's Clubhouse' as an h1 heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /hank's clubhouse/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("displays the clubhouse image with appropriate alt text", () => {
    render(<Home />);
    const image = screen.getByAltText(/hank's clubhouse/i);
    expect(image).toBeInTheDocument();
  });
});
