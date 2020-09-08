const supertest = require('supertest');

describe('Teste de conexão', () => {
  const request = supertest('http://localhost:3001');

  it('Deverá responder na porta 3001', () => request.get('/').then((res) => expect(res.status).toBe(200)));
});
