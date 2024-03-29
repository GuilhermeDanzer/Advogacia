const multer = require('multer')
const path = require('path')
const crypto = require('crypto')
const multerS3 = require('multer-s3')
const aws = require('aws-sdk')


const AWS = new aws.S3()

const storageTypes = {
  s3: multerS3({
    s3: AWS,
    bucket:'mypdfupload',
    contentType:multerS3.AUTO_CONTENT_TYPE,
    acl:'public-read',
    key:(req,file,cb)=>{
      crypto.randomBytes(16,(err,hash)=>{
        if (err) cb(err);
        const fileName = `${hash.toString('hex')}-${file.originalname}`
        cb(null,fileName)
      })
    },


  }),
}

console.log('multer')

module.exports = {
  dest: path.resolve(__dirname,'..','..','tmp','uploads'),
  storage: storageTypes['s3'],
  limits:{
    fileSize:2*1024*1024
  },
  fileFilter: (req,file,cb) =>{
    const allowedMimes = [
      'application/pdf'
    ]

    if(allowedMimes.includes(file.mimetype)){
      cb(null,true)
    }else{
      cb(new Error('Arquivo Invalido'))
    }
  }
}