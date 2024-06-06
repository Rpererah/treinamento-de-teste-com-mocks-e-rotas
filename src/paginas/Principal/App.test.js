import {
  getAllByRole,
  getByRole,
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe('App test integrity', () => {
  test('Must allow add a transation in Extrato Component', () => {
    render(<App />, { wrapper: BrowserRouter });

    const select = screen.getByRole('combobox');
    const Inputvalue = screen.getByPlaceholderText('Digite um valor');
    const button = screen.getByRole('button');

    userEvent.selectOptions(select, ['Depósito']);
    userEvent.type(Inputvalue,100)
    userEvent.click(button)

    const newTransition=screen.getByTestId('lista-transacoes')
    const itemExtract=screen.getByRole('listitem')

    expect(newTransition).toContainElement(itemExtract)
  });
});
