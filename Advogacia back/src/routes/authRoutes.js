const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = mongoose.model('User')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

router.post('/signin', async (req,res)=>{
  
  const {email,password} = req.body;
  if (!email || !password) {
    return res.status(422).send({error:'Email e senha devem ser preenchidos'})
  }
  
  const user = await User.findOne({email})

  if (!user){
   
    return res.status(400).send({error:'Este usuário não existe'})
  }
try{
    await user.comparePassword(password)

    const token = jwt.sign({userId: user._id},'9WFUHQ8921FF9H18')
    res.send({token})

  }catch(err){

    return res.status(400).send({error:'Senha inválida'})
  }
})



router.post('/signup',async (req,res) =>{
 
  const {email,password,authLevel} = req.body;
 try {

  const user = new User({email,password,authLevel});
  await user.save()
  
  const token = jwt.sign({userId:user._id},'9WFUHQ8921FF9H18')
  res.send({user})

}catch(err){
  return res.status(422).send(err.message)
}
})

module.exports = router;