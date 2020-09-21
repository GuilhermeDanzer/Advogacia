import React, { useState, useContext } from 'react'
import FormInput  from './FormInput'
import { makeStyles } from '@material-ui/core/styles';
import InputMask from "react-input-mask";
import Button from './button'
import useWindowDimensions from '../hooks/useWindowDimensions'




const TextMaskCustom = (props) => {
  const { inputRef, ...other } = props;
  return (
    <InputMask
      {...other}
      ref={ref => {

        inputRef(ref ? ref.inputElement : null);
      }}
      mask={props.mask}
    />
  );
}

const TeamForm = ({ handlechange,values,setValues,funcao,classes,edit}) => {
  

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
        
        <FormInput campo='name' handlechange={handlechange}  label='Nome'   type='text' values={values.name} setValues={setValues} funcao={console.log} />
        <FormInput campo='oab' handlechange={handlechange}  inputProps={{ className: classes.inputEstado }} label='Oab' type='text' values={values.oab} setValues={setValues} funcao={() => console.log('a')} />
        <FormInput campo='email' handlechange={handlechange} label='Email' type='text' values={values.email} setValues={setValues} funcao={() => console.log('a')} />
        <FormInput campo='city' handlechange={handlechange} label='Cidade' type='Text' values={values.city} setValues={setValues} funcao={() => console.log('a')} />
        <FormInput campo='state' handlechange={handlechange} label='Estado' type='text' onChange={() => values.state} inputProps={{ classnumber: classes.inputEstado, maxLength: 2 }} values={values.state} setValues={setValues} funcao={() => console.log(values)} />
        <FormInput campo='tel' shrink={true} handlechange={handlechange} inputComponent={TextMaskCustom} inputProps={{ mask: '(99) 99999-9999' }} label='Telefone' type='Text' values={values.tel} setValues={setValues} funcao={() => console.log('a')} />

      </div>

      <div>
        <FormInput campo='address' handlechange={handlechange} label='Rua'type='text' values={values.address}setValues={setValues}funcao={() => console.log('a')}/>
        <FormInput campo='area' handlechange={handlechange} label='Bairro'type='text' values={values.area}setValues={setValues}funcao={() => console.log('a')}/>
        <FormInput campo='number' handlechange={handlechange} label='Numero' type='number' values={values.number} setValues={setValues} funcao={() => console.log('a')} />
        <FormInput campo='complement' handlechange={handlechange} label='Complemento'type='text' values={values.complement}setValues={setValues}funcao={() => console.log('a')}/>
        <FormInput campo='cep' shrink={true} handlechange={handlechange} inputComponent={TextMaskCustom} inputProps={{ mask: '99999-999' }} label='CEP' type='Text' values={values.cep} setValues={setValues} funcao={() => console.log('a')} />
      </div>
      <div>
      <FormInput campo='academicFormation' handlechange={handlechange} rows={20} multiline={true} label='Formação Academica'type='text' values={values.academicFormation}setValues={setValues}funcao={() => console.log('a')}/>
      </div>
      <div>
      <FormInput campo='profissionalExperience' handlechange={handlechange} rows={20} multiline={true} label='Experiencia Profissional'type='text' values={values.profissionalExperience}setValues={setValues}funcao={()=>funcao(values)}/>
      </div>
      <Button text={edit?'Editar':'Cadastrar'} funcao={()=>funcao(values)}/>
    </div>
  )
}

export default TeamForm