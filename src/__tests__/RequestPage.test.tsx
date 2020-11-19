import React from 'react';
import { render, findByTestId, fireEvent, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import RequestPage from '../containers/RequestPage';
import store from '../store';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('Component test', () => {
  test('Render Welcome message in Home', async () => {
    // const { container } = render(<Home />);
    const { container } = render(
      <Provider store={store}>
        <RequestPage />
      </Provider>
    );

    // open form
    const openForButtonNode = await findByTestId(container, 'add-new-expense-button');
    fireEvent.click(openForButtonNode);

    // get fields
    const inputNotesNode = (await findByTestId(container, 'form-intput-notes')) as HTMLInputElement;
    fireEvent.change(inputNotesNode, { target: { value: 'teste description' } });
    expect(inputNotesNode.value).toEqual('teste description');

    // submit form
    const submitForButtonNode = (await findByTestId(container, 'submit-form-button')) as HTMLButtonElement;
    fireEvent.click(submitForButtonNode);

    // submit form
    const data = await waitFor(() => screen.getByRole('alert'));
    expect(data.innerHTML).toEqual('Obrigatório');
  });
});
