import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";
import { test, expect } from "vitest";

test("renders hello message", () => {
    render(<App />);
    const helloElement = screen.getByText(/Hello, React with TypeScript!/i);
    expect(helloElement).toBeInTheDocument();
});
