import { render, screen } from '@testing-library/react';
import App from './paginas/Principal/App';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import Cartoes from './componentes/Cartoes';

describe('Routes', () => {
  test('render default route', () => {
    render(<App />, { wrapper: BrowserRouter });
    const usuario = screen.getByText('Olá, Joana :)!');
    expect(usuario).toBeInTheDocument();
  });

  test('render cards route ', () => {
    const route='/cartoes'
    render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="cartoes" element={<Cartoes />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const myCards=screen.getByText('Meus cartões')
    expect(myCards).toHaveTextContent('Meus cartões')

  });
});
