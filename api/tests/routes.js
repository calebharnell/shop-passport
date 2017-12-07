const request = require('supertest');
const app = require('../server.js');
const User = require('../models/User');
const chai = require('chai');
const should = chai.should();

let token

describe('Test routes', () => {
  it('Should return a 404 for an invalid URL', (done) => {
    request(app)
      .get('/nothing-to-see-here')
      .expect(404, done)
  })
  it('Should register a user', (done) => {
    request(app)
      .post('/auth/register')
      .send({
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@doe.com',
        password: 'password123'
      })
      .expect(200, done)
  })

  it('Should log a user in', (done) => {
    request(app)
      .post('/auth')
      .send({
        email: 'jane@doe.com',
        password: 'password123'
      })
      .expect(200)
      .then((response) => {
        token = response.body.token;
        done()
      })
  })

  it('Should require correct credentials', (done) => {
    request(app)
      .post('/auth')
      .send({
        email: 'beep@boop.com',
        password: 'derp'
      })
      .expect(401, done)
  })

  it('Should require a token to view products', (done) => {
    request(app)
      .get('/products')
      .expect(401, done)
  })

  it('Should display products to token bearers', (done) => {
    request(app)
      .get('/products')
      .set('Authorization', 'Bearer ' + token)
      .expect(200)
      .then((response) => {
        // Make sure the response is an array
        response.body.should.be.an('array')
        done()
      })
  })

  it('Should not let a random through to /admin', (done) => {
    request(app)
      .get('/admin')
      .expect(401, done)
  })

  after(() => {
    User.remove({ email: 'jane@doe.com' }).then(() => {
      console.log('Cleaned up the database!')
    })
  })
})
