const { Schema, model } = require('mongoose')

const travelModel = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 3
  },
  image: {
    type: String,
    required: true
  },
  descr: {
    type: String,
    required: true
  }
})

module.exports = model('Trave', travelModel)