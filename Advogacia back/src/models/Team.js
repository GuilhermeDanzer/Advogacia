const mongoose = require('mongoose')


const teamSchema = new mongoose.Schema({

  name:{
    type:String,
    required:true,
  },
  oab:{
    type:String,
    required:true,
    uppercase: true
  },
  email:{
    type:String,
    required:true
  },
  city:{
    type:String,
    required:true,
  },
  state:{
    type:String,
    required:true,
    uppercase: true
  },
  tel:{
    type:String,
    required:true
  },
  number:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  //bairro
  area:{
    type:String,
    required:true
  },
  complement:{
    type:String,
  },
  profissionalExperience:{
    type:String,
    required:true
  },
  academicFormation:{
    type:String,
    required:true
  },
  cep:{
    type:String,
    required:true
  }

})

mongoose.model('Team',teamSchema)