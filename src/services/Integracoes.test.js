import {render,screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from '../paginas/Principal/App'
import { buscaTransacoes } from './transacoes'

describe('tests requists for API',()=>{
    test('must return a list of transactions',async ()=>{
        const transactions=await buscaTransacoes();
        expect(transactions).toHaveLength(3);


        render(<App/>,{wrapper:BrowserRouter})
        const transaction=await screen.findAllByText('Novembro')
        transaction.forEach(item=>expect(item).toBeInTheDocument())

    })
})