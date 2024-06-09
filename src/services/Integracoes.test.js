import api from './api';
import { buscaTransacoes, salvaTransacao } from './transacoes';

jest.mock('./api');
const mockTransaction = [
  {
    id: 1,
    transacao: 'Déposito',
    valor: '100',
    data: '22/11/2022',
    mes: 'Novembro',
  },
];

const mockRequest = (retorno) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: retorno,
      });
    }, 1000);
  });
};

const mockError = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject();
    }, 1000);
  });
};

const mockPostRequest=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                status:201
            })
        },1000)
    })
}

describe('tests requists for API', () => {
  test('must return a arrya of transactions', async () => {
    api.get.mockImplementation(() => mockRequest(mockTransaction));
    const transaction = await buscaTransacoes();
    expect(transaction).toEqual(mockTransaction);
    expect(api.get).toHaveBeenCalledWith('/transacoes');
  });
  test('must return a array empty when the fail request', async () => {
    api.get.mockImplementation(() => mockError());
    const transaction = await buscaTransacoes();
    expect(transaction).toEqual([]);
    expect(api.get).toHaveBeenCalledWith('/transacoes');
  });
  test('must be return status 201 a post request', async ()=>{
    api.post.mockImplementation(() => mockPostRequest());
    const status=await salvaTransacao(mockTransaction[0])
    expect(status).toBe(201)
    expect(api.post).toHaveBeenCalledWith('/transacoes',mockTransaction[0]) 
  })
});
