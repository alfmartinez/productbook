'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/products unauthenticated', function() {

  it('should respond with unauthorized', function(done) {
    request(app)
      .get('/api/products')
      .expect(401)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });

});
