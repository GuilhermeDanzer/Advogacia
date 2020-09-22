const express = require('express')
const mongoose = require('mongoose')
const requireAuth = require('../middleware/requireAuth')

const Team = mongoose.model('Team')
const router = express.Router()

console.log('as')
router.get('/team', async (req,res)=>{
  try{
    const team = await Team.find()
    res.send(team)
  } catch (err){
    return res.send({error:err.message})

  }
})




router.post('/team/delete',requireAuth, async (req,res)=>{
  const {_id} = req.body
  console.log(req.body)
  try{
    console.log(_id)
    await Team.findByIdAndDelete(_id);
    
    res.send({msg:'Associado deletado com sucesso'})
  }catch(err){
    return res.send({error:err.message})
  }
})

router.post('/team/edit',requireAuth,async(req,res)=>{
  const {name,oab,cep,email,tel,city,state,number,address,complement,area,academicFormation,profissionalExperience,_id} = req.body

  try{
    console.log(req.body)
    await Team.findByIdAndUpdate(_id,{
      name,oab,email,cep,tel,city,state,number,address,complement,area,academicFormation,profissionalExperience},(err,result)=>{
        if (err){
          res.status(422).send(err)
        }else{
          res.send({msg:'Associado editado com sucesso'})
        }
      })

  }catch (err){
    res.status(422).send({error:err,message})
  }

})
router.post('/team',requireAuth, async (req,res) =>{
  const {name,oab,cep,email,tel,city,state,number,address,complement,area,academicFormation,profissionalExperience} = req.body

  if (!name||!oab||!cep||!email||!tel||!city||!state||!number||!address||!area||!academicFormation||!profissionalExperience){
    return res
          .status(422)
          .send({error:`Está faltando informações sobre o associado`})
  }

  try{

    const team = new Team({name,cep,oab,tel,email,city,state,number,address,complement,area,academicFormation,profissionalExperience})
    await team.save()
    console.log('asioajfsioas')
    res.send({msg:'Cadastrado com sucesso'})
  }catch (err){
    return res
          .status(422)
          .send({error:err.message})
  }

})





module.exports = router