const mongoose = require('mongoose')

const PdfSchema = new mongoose.Schema({
  name:String,
  size: Number,
  key: String,
  url: String,
  createdAt:{
    type:Date,
    default: Date.now

  }
})

mongoose.model('Pdf',PdfSchema)