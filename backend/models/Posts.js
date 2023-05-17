const mongoose = require('mongoose');

const postsSchema =  new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    title: { type: String, required: true },
    description: { type: String, required: true },
    procedure: { type: String},
    vegetarian: {type: Boolean, required: true},
    tag: { type: String},
    edited: {type: Boolean, default: false},
    date: { type: Date, default: Date.now },
    ingredients: { type : Number, required: true},
    timereq: { type : Number, required: true},
    imageURL: { type: String }
  });
  
module.exports = mongoose.model('Post', postsSchema);
