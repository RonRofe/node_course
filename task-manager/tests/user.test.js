const request = require('supertest')
const app = require('../src/app')

test('Should sign up a new user', async () => {
    await request(app).post('/users').send({
        name: 'Ron',
        email: 'ron@example.com',
        password: 'HelloPass123!'
    }).expect(201)
})