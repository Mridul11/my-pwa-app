import { render } from "@testing-library/react";
import AboutPage from "./about-page";

test("should render", () => {
  const aboutElement = render(<AboutPage />);
  expect(aboutElement).toBeTruthy();
});
