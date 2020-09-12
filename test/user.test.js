const request = require('supertest');

const app = require('../src/app');

describe('Listagem de usuario', () => {
  it('Devera listar todos os usuarios', () => request(app).get('/users')
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(1);
      expect(res.body[0]).toHaveProperty('name', 'mateus');
    }));

  it('deve inserir usuário com sucesso', () => {
    request(app).post('/users').send({ name: 'joao', email: 'joao@gmail.com' })
      .then((res) => {
        expect(res.status).toBe(201);
        expect(res.body.name).toBe('joao');
      });
  });
});
