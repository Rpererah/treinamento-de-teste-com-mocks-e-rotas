import { render, screen } from '@testing-library/react';
import App from './paginas/Principal/App';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import Cartoes from './componentes/Cartoes';
import AppRoutes from './routes'

describe('Routes', () => {
  test('render default route', () => {
    render(<App />, { wrapper: BrowserRouter });
    const usuario = screen.getByText('Olá, Joana :)!');
    expect(usuario).toBeInTheDocument();
  });

  test('render cards route ', () => {
    const route = '/cartoes';
    render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="cartoes" element={<Cartoes />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const myCards = screen.getByText('Meus cartões');
    expect(myCards).toHaveTextContent('Meus cartões');
  });

  test('render a current route location', () => {
    const route = '/cartoes';
    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );

    const myCurrentLocation=screen.getByTestId('local')
    expect(myCurrentLocation).toHaveTextContent(route)
  });


  test('render a notfound page',()=>{
    const route='/extrato'
    render(
        <MemoryRouter initialEntries={[route]}>
          <AppRoutes />
        </MemoryRouter>
      );
      const pageNotFound=screen.getByTestId('pagina-404')
      expect(pageNotFound).toContainHTML('<h1>Ops! Não encontramos a página</h1>')
  })
});
