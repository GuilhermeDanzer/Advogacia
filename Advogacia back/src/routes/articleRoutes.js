const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const requireAuth = require('../middleware/requireAuth')
const arrayBufferToBuffer = require('arraybuffer-to-buffer');
const Article = mongoose.model('Article')
const router = express.Router()
const multerConfig = require('../config/multer')

router.get('/article', async (req,res)=>{

  try{
    const article = await Article.find()
    res.send(article)
  } catch (err){
    return res.send({error:err.message})

  }
})

router.post('/article/cdn' , multer(multerConfig).single('file'),async (req,res)=>{

  console.log(req.body.file)
  const {originalname:name,size,key,location:url = ''} = req.file
  const {title,resume} = req.body
  console.log(req.body)
  const pdf = await Article.create({
    name,
    size,
    key,
    url,
    title,
    resume,
  })

  return res.send({msg:'Artigo cadastrado com sucesso'})
})





router.delete('/article/:id', async (req,res)=>{
  try{      
    //await Article.findByIdAndDelete(req.params.id)

    const artigo = await Article.findById(req.params.id)
    await artigo.remove()
    res.send({msg:'Artigo deletado com sucesso'})
  }catch(err){
    return res.send({error:err.message})
  }
})

router.post('/article/edit',async(req,res)=>{
  const {title,resume,link,_id} = req.body

  try{
    await Article.findByIdAndUpdate(_id,{
      title,resume,link},(err,result)=>{
        if (err){
          res.status(422).send(err)
        }else{
          res.send({msg:'Artigo Editado com sucesso'})
        }
      })

  }catch (err){
    res.status(422).send({error:err,message})
  }

})







module.exports = router