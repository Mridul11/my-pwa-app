import { render } from "@testing-library/react";
import HomePage from "./home-page";

test("should render", () => {
  const homePageElement = render(<HomePage />);
  expect(homePageElement).toBeTruthy();
});
