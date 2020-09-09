const request = require('supertest');

const app = require('../src/app');

describe('Deverá responder na raiz', () => {
    it('devera responder com status 200', async () => {
        const res = await request(app).get('/');
        expect(res.status).toBe(200);
    });
});
