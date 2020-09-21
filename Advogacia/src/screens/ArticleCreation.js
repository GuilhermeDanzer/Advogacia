import React, { useState, useContext } from 'react'
import Button from '../components/button'
import { makeStyles } from '@material-ui/core/styles';
import {Context as TeamContext} from '../reducers/TeamContext'
import {Context as AuthContext} from '../reducers/AuthContext'
import ArticleForm from '../components/ArticleForm'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TimeComponent from '../components/TimeComponent'
import './css/TeamCreation.css'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({

  inputEstado: {
    textTransform: 'uppercase'
  },
  divNormal: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  divMobile: {
    padding: 20
  }
}));


const TeamCreation = () => {



  const classes = useStyles();
  const token = useContext(AuthContext)
  let history = useHistory();
  console.log(token.state.token)
  
  if (token.state.token ===null & window.localStorage.getItem('token')=== undefined ||window.localStorage.getItem('token')=== null){
    history.push('/')
  }
  

  const [values, setValues] = useState({
    checkedB: true,
    edit:false,
  })

  var label = values.edit?'Edição':'Cadastro'
  
  const handleChange = (prop) => (event) => {
     if (event.target.name==='checkedB'){
    setValues({ ...values, [prop]: event.target.checked });
  }
    else{
      setValues({...values,[prop]: event.target.value });
    }
    
  };
  console.log(values)
  const cadastrar = () =>{
    setValues({title:'',resume:'',checkedB: true, edit: false})
  }
  
  return (
    <div>
      <div style={{justifyContent:'space-between',paddingTop:5,paddingLeft:5,display:'flex'}}>
      <Button text='Limpar' funcao={()=>cadastrar()}/>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={values.checkedB}
                onChange={handleChange('checkedB')}
                name="checkedB"
                color="primary"
              />
            }
            label={values.checkedB?label:'Visualização'}
          />
        </FormGroup>
      </div>
      <div>

       {values.checkedB? <ArticleForm edit={values.edit} handlechange={handleChange} funcao={values.edit?'':'postTeam'} values={values} setValues={setValues} classes={classes} />:<TimeComponent array={[]}funcaoGet={'getTeam'} funcaoDelete={'deleteTeam'} values={values} setValues={setValues} admin={true}/>}

      </div>
    </div>
  )
}
export default TeamCreation