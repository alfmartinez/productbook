/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Product = require('../api/product/product.model');
var User = require('../api/user/user.model');
var Interview = require('../api/interview/interview.model');

Interview.find({}).remove(function() {
  Interview.create({
      number: 0,
      sectionOrder: 1,
      section: 'Origine',
      title: 'Point de départ',
      explanation: 'Les projets en greenfield et brownfield différent.',
      type: 'radio',
      question: 'Votre produit part-il d\'un existant ?',
      answers: [{
        value: 'Oui',
        next: 1
      }, {
        value: 'Non',
        next: 2
      }]
    }, {
      number: 1,
      sectionOrder: 2,
      section: 'Inventaire',
      title: 'Inventaire de l\'existant',
      explanation: 'Suivant le type d\'existant, la démarche doit être adaptée.',
      type: 'choice',
      question: 'De quels types d\'existants votre produit doit il tenir compte ?',
      next: 2,
      answers: [{
        value: 'Application existante',
        next: 3
      }, {
        value: 'Classeur Excel pour un calculateur',
        next: 4
      }]
    }, {
      number: 2,
      sectionOrder: 3,
      section: 'Solution',
      title: 'Focus sur la solution',
      explanation: 'La question miracle',
      type: 'text',
      question: 'Maintenant je voudrai vous poser une question bizarre. Imaginez que pendant que vous dormez la nuit prochaine et que toute la maison est calme, un miracle se produit. Le miracle consiste en ce que le problème qui vous a amené ici est résolu. Cependant, comme vous êtes endormi, vous ne savez pas que le miracle est arrivé. Alors, quand vous vous réveillez demain matin, qu’est-ce qui sera différent qui vous dira qu’un miracle a eu lieu et que le problème qui vous a amené ici est résolu ?',
      answers: {}
    }, {
      number: 3,
      sectionOrder: 2,
      section: 'Inventaire',
      title: 'Application existante',
      explanation: 'Lors de la reprise d\'une application existante ...',
      type: 'information',
      question: 'Maintenant je voudrai vous poser une question bizarre. Imaginez que pendant que vous dormez la nuit prochaine et que toute la maison est calme, un miracle se produit. Le miracle consiste en ce que le problème qui vous a amené ici est résolu. Cependant, comme vous êtes endormi, vous ne savez pas que le miracle est arrivé. Alors, quand vous vous réveillez demain matin, qu’est-ce qui sera différent qui vous dira qu’un miracle a eu lieu et que le problème qui vous a amené ici est résolu ?',
      answers: {}
    }, {
      number: 4,
      sectionOrder: 2,
      section: 'Inventaire',
      title: 'Classeur Excel',
      explanation: 'Classeur Excel, problèmes de transcription',
      type: 'information',
      question: 'Maintenant je voudrai vous poser une question bizarre. Imaginez que pendant que vous dormez la nuit prochaine et que toute la maison est calme, un miracle se produit. Le miracle consiste en ce que le problème qui vous a amené ici est résolu. Cependant, comme vous êtes endormi, vous ne savez pas que le miracle est arrivé. Alors, quand vous vous réveillez demain matin, qu’est-ce qui sera différent qui vous dira qu’un miracle a eu lieu et que le problème qui vous a amené ici est résolu ?',
      answers: {}
    },
    function() {
      console.log('finish populating interview questions');
    })
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function(err, testUser, adminUser) {
    console.log('finished populating users');
    Product.find({}).remove(function() {
      Product.create({
        name: 'Development Tools',
        info: 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.',
        owner: testUser._id,
        answers: {}
      }, {
        name: 'Server and Client integration',
        info: 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.',
        owner: adminUser._id,
        answers: {
          1: 'No'
        }
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
