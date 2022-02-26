import { render } from "@testing-library/react";
import NativeButton from "./native-button";

test("should render", () => {
  const nativeButtonElement = render(<NativeButton />);
  expect(nativeButtonElement).toBeTruthy();
});

test("should render the text", () => {
  const { getByText } = render(<NativeButton />);
  expect(getByText("NativeButton")).toBeTruthy();
});
