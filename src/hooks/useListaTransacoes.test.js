import { act, renderHook } from "@testing-library/react";
import {buscaTransacoes} from './../services/transacoes'
import useListaTransacoes from './useListaTransacoes'

jest.mock('./../services/transacoes');

const mockTransaction = [
    {
      id: 1,
      transacao: 'Déposito',
      valor: '100',
      data: '22/11/2022',
      mes: 'Novembro',
    },
  ];

describe('testing hooks/useListaTransacoes.js', ()=>{
test('must return a array transaction and a function to updated',async ()=>{
buscaTransacoes.mockImplementation(()=>mockTransaction)
const {result} =renderHook(()=>useListaTransacoes())

expect(result.current[0]).toEqual([])

await act(async()=>{
    result.current[1]()
})

expect(result.current[0]).toEqual(mockTransaction)

})
})