'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/productbook-dev'
  },

  seedDB: true,
  seedDBQuestions: true
};
