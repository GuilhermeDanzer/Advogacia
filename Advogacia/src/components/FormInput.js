import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputMask from "react-input-mask";



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
  }
}));
const FormInput = ({handlechange,label,campo,values,funcao,setValues,...props}) => {

  const classes = useStyles();


  return (
    <div>
         <FormControl 
       onKeyPress={event => {if (event.key === "Enter") {funcao(values)}}}
      className={clsx(classes.margin, classes.textField)}>
          <InputLabel {...props} htmlFor="standard-adornment-password">{label}</InputLabel>
          <Input
            	{...props}
            
            value={values}
            onChange={handlechange(campo)}
          />
          
        </FormControl>
    </div>
  )
}

export default FormInput