/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Interview = require('../api/interview/interview.model');

var YAML = require('js-yaml');
var fs = require('fs');
var itwContent = fs.readFileSync(__dirname + '/questions.yml', 'utf8');
var productInterview = YAML.safeLoadAll(
  itwContent,
  function(productInterview) {
    Interview.find({}).remove(function() {
      Interview.create(productInterview.questions,
        function() {
          console.log('finish populating interview questions');
        })
    });
  });
