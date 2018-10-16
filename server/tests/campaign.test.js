/* eslint-disable */
const expect = require('chai').expect
const App = require('../index')
const request = require('supertest')(App)

describe('Tests', function() {

  it('retrieves array of campaings', function(done) {
    request.get('/campaigns')
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        done()
      })
  })

  it('retrieves the campaign 100000001', function(done) {
    request.get('/campaigns/100000001')
      .end((err, res) => {
        expect(res.body[0].id).to.be.equals(100000001)
        done()
      })
  })

  it('does not break on unexistent campaign', function(done) {
    request.get('/campaigns/1999999')
      .end((err, res) => {
        expect(res.status).to.be.equals(200)
        done()
      })
  })
})