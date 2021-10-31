import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "@components/Header";

describe("Header", () => {
  test("renders correctly", () => {
    render(<Header />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
