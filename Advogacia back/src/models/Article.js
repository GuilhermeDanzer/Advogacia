const mongoose = require('mongoose')
const aws = require('aws-sdk')

const s3 = new aws.S3()


const articleSchema = new mongoose.Schema({

  title:{
    type:String,

},
  resume:{
    type:String,

  },
  name:String,
  size: Number,
  key: String,
  url: String,
  createdAt:{
    type:Date,
    default: Date.now
  } 
})
articleSchema.pre('remove',function(){

  console.log(this.key)
  return s3.deleteObject({
    Bucket:'mypdfupload',
    Key:this.key,
  }).promise()
})



mongoose.model('Article',articleSchema)