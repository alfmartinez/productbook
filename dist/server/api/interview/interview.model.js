'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var InterviewSchema = new Schema({
  number: Number,
  section: String,
  title: String,
  explanation: String,
  type: String,
  question: String,
  next: Number,
  answers: {},
  artifact: String,
  displayArtifacts: []
});

module.exports = mongoose.model('Interview', InterviewSchema);
