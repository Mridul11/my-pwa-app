import { fireEvent, render, waitFor } from '@testing-library/react';
import CommonHeader from './common-header';

test('should render', async () => {
  const headerElement = render(<CommonHeader />);
  await waitFor(() => {
    expect(headerElement).toBeTruthy();
  });
});

test('should render component', async () => {
  const { getByText } = render(<CommonHeader />);
  await waitFor(() => {
    expect(getByText('Navigation One')).toBeTruthy();
  });
});

test('should render PagesHeader', async () => {
  const { getByText } = render(<CommonHeader />);
  await waitFor(() => {
    expect(getByText('Navigation Two')).toBeTruthy();
    expect(getByText('Navigation Three - Submenu')).toBeTruthy();
  });
});

test('should work onclick', async () => {
  const { getByTestId } = render(<CommonHeader />);
  const testMenuButton = getByTestId('test-menu');
  fireEvent.click(testMenuButton);
  await waitFor(() => {
    expect(getByTestId('test-menu-item')).toHaveTextContent('Navigation Two');
  });
});
