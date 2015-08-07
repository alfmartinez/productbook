'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  owner: Schema.Types.ObjectId
});

module.exports = mongoose.model('Product', ProductSchema);
