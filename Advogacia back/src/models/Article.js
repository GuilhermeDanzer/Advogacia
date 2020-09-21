const mongoose = require('mongoose')


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
    type:String,
    required:true
  }
})

mongoose.model('Article',articleSchema)