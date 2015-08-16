'use strict';

var should = require('should');
var app = require('../../app');
var Product = require('./product.model');
var User = require('../user/user.model');
var request = require('supertest');
var agent = request.agent('http://localhost:9000');
var login = require('../tests/login');

var account = {
  email: 'test@test.com',
  password: 'test'
};


describe('GET /api/products authenticated', function() {

  before(function(done) {
    User.find({}).remove(function() {
      User.create({
        provider: 'local',
        name: 'Test User',
        email: 'test@test.com',
        password: 'test'
      }, function() {
        done();
      });
    });
  });

  after(function(done) {
    User.find({}).remove(function() {
      done();
    });
  });

  xit('should respond with JSON array if authenticated', function(done) {
    login.login(agent, account, function(err, res) {
      agent.get('/api/products')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          } else {
            res.body.should.be.instanceof(Array);
            done();
          }
        });
    });
  });

});
