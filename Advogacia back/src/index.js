require('dotenv').config()
require('./models/User')
require('./models/Team')
require('./models/Article')

const morgan = require('morgan')
const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const articleRoutes = require('./routes/articleRoutes')
const emailRoutes = require('./routes/emailRoutes')
const teamRoutes = require('./routes/teamRoutes')
const requireAuth = require('./middleware/requireAuth')


const app = express()


app.use(cors())
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(morgan('use'))
app.use(bodyParser.json())

app.get('/',(req,res) =>{
  res.send('a')
})

app.use(authRoutes);
app.use(teamRoutes);
app.use(emailRoutes)
app.use(articleRoutes);





const mongoUri = 'mongodb+srv://admin:admin@cluster0-gskxv.mongodb.net/DBR?retryWrites=true&w=majority'

mongoose.connect(mongoUri,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', ()=>{
  console.log('Connected mongo instance')
})

mongoose.connection.on('error', (err)=>{
  console.log('Error',err)
})

app.listen(8080, ()=>{
  console.log('Listening on 8080')
})