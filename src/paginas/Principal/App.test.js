import {
    findByText,
  getAllByRole,
  getByRole,
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './../../routes'

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


  test('must navigate to clicked link cards',async ()=>{
    render(<AppRoutes />, {wrapper:BrowserRouter})
    const linkPageCards=screen.getByText('Cartões')
    expect(linkPageCards).toBeInTheDocument()

    userEvent.click(linkPageCards)
    //using *find* instead of *get* because the call not is immediately we need a async function to resolve
    const titleOfPageCards=await screen.findByText('Meus cartões')
    expect(titleOfPageCards).toBeInTheDocument()
  })


  test('must navigate to clicked link Investimentos',async ()=>{
    render(<AppRoutes />, {wrapper:BrowserRouter})
    const linkPageInvestimentos=screen.getByText('Investimentos')
    expect(linkPageInvestimentos).toBeInTheDocument()
    userEvent.click(linkPageInvestimentos)
    const titleOfPageInvestiments=await screen.findByRole('heading',{level:2,name:'Investimentos'})
    expect(titleOfPageInvestiments).toBeInTheDocument()
  })
});
