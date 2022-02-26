import { render } from '@testing-library/react';
import NativeText from './native-text';

test('should render', () => {
  const nativeTextElement = render(<NativeText />);
  expect(nativeTextElement).toBeTruthy();
});

test('should render the text', () => {
  const { getByText } = render(<NativeText />);
  expect(getByText('NativeText')).toBeTruthy();
});
