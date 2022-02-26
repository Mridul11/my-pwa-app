import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders the component with testid", async () => {
  render(<App />);
  const testElement = screen.getByTestId("app-test");
  await waitFor(() => {
    expect(testElement).toBeInTheDocument();
  });
});
