import api from './api'
import { buscaTransacoes } from './transacoes'

jest.mock('./api')
const mockTransaction=[{
    id:1,
    transacao:'Déposito',
    valor:'100',
    data:'22/11/2022',
    mes:'Novembro'
}];

const mockRequest= ( retorno )=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                data:retorno
            })
        },1000)
    })
}

describe('tests requists for API',()=>{
    test('must return a arrya of transactions',async ()=>{
        api.get.mockImplementation(()=>mockRequest(mockTransaction))
        const transaction =await buscaTransacoes();
        expect(transaction).toEqual(mockTransaction)
        expect(api.get).toHaveBeenCalledWith('/transacoes')
    })
})

