import React, {useState,useContext} from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '../components/button'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {Context as EmailContext} from '../reducers/EmailContext';

const useStyles = makeStyles((theme) => ({
  root: {
      // border: '2px solid #0b1f51' ,
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      
    },
  },
}));


const Contact = () => {
  const {state,sendEmail} = useContext(EmailContext)

  const classes = useStyles();    
  const [values, setValues] = useState({
    enviado:false
  });

  const enviarEmail = async (values) =>{


    setValues({enviado:true})
    sendEmail(values)
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  let altura = ''
  if (values.enviado){
    altura = '30vh'
  }
  return (
    <div> 
      <div
      style={{
        display:'flex',
        justifyContent:'center',
        paddingTop:10
      }}
      >
        <h4 style={{fontWeight:'bold', color:'#0b1f51'}}>Entre em contato conosco</h4>
    </div>
      
      <div style={{width:'100%',height:altura,justifyContent:'center',display:'flex'}}>
     {values.enviado? 
     <div>
      <h4>O email foi enviado e responderemos o mais breve possivel, fique atento ao seu celular e email</h4>
    
     </div>
     :  
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Nome"  value={values.name} onChange={handleChange('name')} variant="outlined" style={{backgroundColor:'#FFF'}}/>
      <TextField id="outlined-basic" label="Email"  value={values.email} onChange={handleChange('email')} variant="outlined" style={{backgroundColor:'#FFF'}}/>
      <TextField id="outlined-basic" label="Assunto"  value={values.subject} onChange={handleChange('subject')} variant="outlined" style={{backgroundColor:'#FFF'}}/>
      <TextField id="outlined-basic" type='number'   label="Telefone"  value={values.tel} onChange={handleChange('tel')} variant="outlined" style={{backgroundColor:'#FFF'}}/>
      <FormControl variant="outlined" style={{backgroundColor:'#fff'}} className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Area</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={values.area}
          onChange={handleChange('area')}
          label="Area"
        >
          <MenuItem value="">
            <em>Nenhuma</em>
          </MenuItem>	
          <MenuItem value='Cível'>Cível</MenuItem>
          <MenuItem value='Consumidor'>Consumidor</MenuItem>
          <MenuItem value='Previdenciário'>Previdenciário</MenuItem>
          <MenuItem value='Trabalhista'>Trabalhista</MenuItem>
          <MenuItem value='Empresarial'>Empresarial</MenuItem>
        </Select>
      </FormControl>

 
        <div style={{width:'100%'}}>
          <h4>Mensagem</h4>
        <TextareaAutosize
      rows={5}
      aria-label="maximum height"
      placeholder=" "
      value={values.msg}
      style={{width:'97%'}}
/>
        </div>
        
      <Button type='button' text='Enviar' funcao={()=>enviarEmail(values)}/>
      
    </form>}
      </div>
      
    </div>
  )
}

export default Contact
