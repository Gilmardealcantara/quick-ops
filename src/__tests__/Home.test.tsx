import React from 'react';
import { render } from '@testing-library/react';
import App from "../App";


test('Render Welcome message in Home', () => {
  const { getByTestId } = render(<App />);
});