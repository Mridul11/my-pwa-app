import { render, waitFor } from "@testing-library/react";
import HomePage from "./home-page";

test("should render", async () => {
  const homePageElement = render(<HomePage />);
  await waitFor(() => {
    expect(homePageElement).toBeTruthy();
  });
});
