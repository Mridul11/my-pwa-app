import { act, fireEvent, getByTestId, render } from "@testing-library/react";
import CommonHeader from "./common-header";

test("should render", () => {
  const headerElement = render(<CommonHeader />);
  expect(headerElement).toBeTruthy();
});

test("should render component", () => {
  const { getByText } = render(<CommonHeader />);
  expect(getByText("Navigation One")).toBeTruthy();
});

test("should render PagesHeader", () => {
  const { getByText } = render(<CommonHeader />);
  expect(getByText("Navigation Two")).toBeTruthy();
  expect(getByText("Navigation Three - Submenu")).toBeTruthy();
});

test("should work onclick", () => {
  const { getByTestId } = render(<CommonHeader />);

  const testMenuButton = getByTestId("test-menu");
  fireEvent.click(testMenuButton);
  expect(getByTestId("test-menu-item")).toHaveTextContent("Navigation Two");
});
