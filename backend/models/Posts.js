const mongoose = require('mongoose');

const postsSchema =  new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId
     , ref: 'User'
     , required: true},
    title: { type: String, required: true },
    description: { type: String, required: true },
    procedure: { type: String},
    vegetarian: {type: Boolean, required: true},
    tag: { type: String},
    edited: {type: Boolean, default: false},
    date: { type: Date, default: Date.now },
  });
  
module.exports = mongoose.model('Post', postsSchema);
