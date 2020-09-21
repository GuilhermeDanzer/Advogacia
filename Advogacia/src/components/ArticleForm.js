import React, { useState, useContext } from 'react'
import FormInput  from './FormInput'
import { makeStyles } from '@material-ui/core/styles';
import InputMask from "react-input-mask";
import Button from './button'
import useWindowDimensions from '../hooks/useWindowDimensions'

const ArticleForm = ({ handlechange,values,setValues,funcao,classes,edit}) => {
  

  const { width } = useWindowDimensions();
  var classeDiv = ''
  const isMobile = width < 500;
  if (isMobile){
    classeDiv = classes.divMobile
   
  }else{
    classeDiv = classes.divNormal
  }


  return (
    <div className={classeDiv}>
      <div>
        <FormInput campo='title' handlechange={handlechange}  label='Titulo'   type='text' values={values.title} setValues={setValues} funcao={console.log} />
      </div>
      <div>
      <FormInput campo='resume' handlechange={handlechange} rows={20} multiline={true} label='Resumo'type='text' values={values.resume}setValues={setValues}funcao={()=>funcao(values)}/>
      </div>
      <Button text={edit?'Editar':'Cadastrar'} funcao={()=>funcao(values)}/>
    </div>
  )
}

export default ArticleForm