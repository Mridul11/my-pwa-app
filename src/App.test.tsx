import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the component with testid", () => {
  render(<App />);
  const testElement = screen.getByTestId("app-test");
  expect(testElement).toBeInTheDocument();
});
