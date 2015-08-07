'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var InterviewSchema = new Schema({
  number: Number,
  explanation: String,
  type: String,
  question: String,
  answers: {}
});

module.exports = mongoose.model('Interview', InterviewSchema);
