import React from 'react';
import './css/button.css'
// import { Container } from './styles';


const Button = ({text, funcao,values,...props}) => {

  
  
  return ( 
 
    <button
    {...props}
      className='botao'
      onClick={()=>funcao(values)}
        style={{

          marginBottom:5,
          padding:10,
          fontWeight:600,
          //fontWeight:'bold',
          borderRadius:5,
          outline:'none',

        }}

  >{text}</button>
  );
}

export default Button;