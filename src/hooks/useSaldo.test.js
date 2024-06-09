import { renderHook,act, render } from '@testing-library/react'
import {buscaSaldo} from '../services/saldo'
import useSaldo from './useSaldo'

jest.mock('../services/saldo')

const mockSaldo={
    valor:100
}

describe('hooks/useSaldo',()=>{
    test('must render saldo and a function to update',async ()=>{
        buscaSaldo.mockImplementation(()=>mockSaldo.valor)
        const {result} = renderHook(()=>useSaldo())
        expect(result.current[0]).toEqual(0);

        await act(async ()=>{
            result.current[1]();
        })

        expect(result.current[0]).toEqual(mockSaldo.valor)
    })
})
