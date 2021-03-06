/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Product = require('../api/product/product.model');
var User = require('../api/user/user.model');

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test',
    creationNotified: true
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin',
    creationNotified: true
  }, function(err, testUser, adminUser) {
    console.log('finished populating users');
    Product.find({}).remove(function() {
      Product.create({
        name: 'Development Tools',
        info: 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.',
        owner: testUser._id,
        answers: {},
        artifacts: {}
      }, {
        name: 'Server and Client integration',
        info: 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.',
        owner: adminUser._id,
        answers: {
          1: 'No'
        },
        artifacts: {}
      }, {
        name: 'Smart Build System',
        info: 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
      }, {
        name: 'Modular Structure',
        info: 'Best practice client and server structures allow for more code reusability and maximum scalability'
      }, {
        name: 'Optimized Build',
        info: 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
      }, {
        name: 'Deployment Ready',
        info: 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
      }, function() {
        console.log('finished populating products');
      });
    });
  });
});
