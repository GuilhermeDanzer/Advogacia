import React from 'react'
import './css/authForm.css'

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '../components/button'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
}));
const AuthForm = ({values,setValues,funcao,textButton}) => {
  const classes = useStyles();


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  return (
    <div className='authContainer'>

      <FormControl 
       onKeyPress={event => {if (event.key === "Enter") {funcao(values)}}}
      className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
          <Input
            value={values.email}
            onChange={handleChange('email')}
          />
          
        </FormControl>
        <FormControl  
        onKeyPress={event => {if (event.key === "Enter") {funcao(values)}}}
        className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          
        </FormControl>
        <Button text={textButton} funcao={()=>funcao(values)}/>
      </div>
   
  )
}

export default AuthForm