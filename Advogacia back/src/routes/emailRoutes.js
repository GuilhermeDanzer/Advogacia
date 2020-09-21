const nodemailer = require("nodemailer");
const express = require('express')
const router = express.Router()


router.post('/sendEmail',async(req,res)=>{

  const {name,email,subject,msg,tel,area} = req.body
  let transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'deborabrasilbot@gmail.com',
      pass: 'kekkaishi99'
    }
  });
  
  const message = {
    from: 'deborabrasilbot@gmail.com', // Sender address
    //debbrasil2019@gmail.com
    to: `megadebobeira@gmail.com`,         // List of recipients
    subject: subject, // Subject line
    html: `<div style="height:100%;position:relative">
              <div style="background-color:#0b1f51;height: 50px;width:100%;position: absolute;"></div>
              <div style="background-color:#f7f7f7 ;min-height: 180px;width:100%;padding-top: 100px;height: 100%; text-align:center" >
              <h1 style="color:#0b1f51;font-weight:bold;"> Mensagem de ${name}</h1>
              <p style="font-size:18px;align-self:flex-start;padding:10px">${msg}</p>
              <p style="font-size:18px;align-self:flex-start;padding:10px">Entre em contato com ${name} pelo email ${email} ou pelo telefone ${tel}</p>
              </div>
              <div style="background-color:#0b1f51;height: 50px;width:100%;position: absolute;bottom: -100;"></div>
          </div>` // Plain text body
  };
  transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
      return (err)
    } else {
      console.log(info);
      return res.send({msg:'O email foi enviado e responderemos o mais breve possivel, fique atento ao seu celular e email'})
    }
  });
  
})
module.exports = router


