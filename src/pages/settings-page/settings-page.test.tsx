import { render } from "@testing-library/react";
import SettingsPage from "./settings-page";

test("should render", () => {
  const settingPageElement = render(<SettingsPage />);
  expect(settingPageElement).toBeTruthy();
});
