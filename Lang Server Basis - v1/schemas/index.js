const { Schema, model } = require('mongoose');

const dog = new Schema({
  name: String,
  born: Date,
});

const Dog = model('dogs', dog);

module.exports = { Dog };
