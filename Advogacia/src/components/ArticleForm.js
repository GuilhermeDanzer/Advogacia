import React, { useState, useContext } from 'react'
import FormInput  from './FormInput'
import { makeStyles } from '@material-ui/core/styles';
import InputMask from "react-input-mask";
import Button from './button'
import useWindowDimensions from '../hooks/useWindowDimensions'

const ArticleForm = ({ handlechange,values,setValues,funcao,classes,edit}) => {
  
  const handlePdf = (event)  =>{

    try{
      const pdf = event.target.files[0]
      var reader = new FileReader();
    //mandar como arraybuffer, receber e transformar em blob pro link
      reader.readAsArrayBuffer(pdf)
      
      reader.onload = function(e) {
        // browser completed reading file - display it
        let blob = reader.result;
        //const typedArray = new Uint8Array(blob);
        /*console.log(typedArray)
        let file = new Blob([typedArray], {type: 'application/pdf'});
        let fileURL = window.URL.createObjectURL(file);*/
        setValues({ ...values, link: blob });
    }
    }catch(err){
      alert('Ocorreu um erro com sua seleção de arquivo')
    }
    
  }
  

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
        <input
          accept='application/pdf'
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"

          onChange={handlePdf}
        />
      </div>

      <div>
      <FormInput campo='resume' handlechange={handlechange} rows={20} multiline={true} label='Resumo'type='text' values={values.resume}setValues={setValues}funcao={()=>funcao(values)}/>
      </div>
      <Button text={edit?'Editar':'Cadastrar'} funcao={()=>funcao(values)}/>
    </div>
  )
}

export default ArticleForm