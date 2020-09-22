const mongoose = require('mongoose')
const bson = require('bson');

const articleSchema = new mongoose.Schema({

  title:{
    type:String,
    required:true,
  },
  resume:{
    type:String,
    required:true
  },
  link:{
    type:Buffer,
    required:true
  }
})

mongoose.model('Article',articleSchema)