import App from '@/App';
import { render } from '@testing-library/react';

describe('testing App.js component', () => {
  test('should mount app component', () => {
    const wrapper = render(<App />);
    expect(wrapper).toMatchSnapshot()
  });
});
