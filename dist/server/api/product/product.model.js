'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  owner: Schema.Types.ObjectId,
  answers: Schema.Types.Mixed,
  currentInterview: Number,
  passedInterviews: [],
  pendingInterviews: []
});

module.exports = mongoose.model('Product', ProductSchema);
