const express = require('express')
const mongoose = require('mongoose')
const requireAuth = require('../middleware/requireAuth')

const Article = mongoose.model('Article')
const router = express.Router()

router.get('/article', async (req,res)=>{
  const {type} = req.headers
  try{
    const article = await Article.find()
    res.send(article)
  } catch (err){
    return res.send({error:err.message})

  }
})


router.use(requireAuth);


router.post('/article/delete', async (req,res)=>{
  const {selectedId} = req.body
  try{
    selectedId.forEach(async element => {
      await Article.findByIdAndDelete(element)
    });
    
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
          res.send(result)
        }
      })

  }catch (err){
    res.status(422).send({error:err,message})
  }

})
router.post('/article', async (req,res) =>{
  const {title,resume,link} = req.body

  if (!title||!resume||!link){
    return res
          .status(422)
          .send({error:`Está faltando informações do artigo`})
  }

  try{
    const article = new Article({title,resume,link})
    await article.save()
    res.send(article)
  }catch (err){
    return res
          .status(422)
          .send({error:err.message})
  }

})





module.exports = router