import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar/Navbar";
import React from "react";


describe("Header test", () => {
  test("should match header text", () => {
    render(<Navbar />);
    expect(screen.getByText("brand")).toBeDefined();
  });
});
