import React,{useState,useEffect,useContext} from 'react'
import { useHistory } from "react-router-dom";
import AuthForm from '../components/authForm'
import {Context as AuthContext} from '../reducers/AuthContext'
import './css/Login.css'
import Banner from '../img/banner3.jpeg'
const Login = () => {

  let history = useHistory();

  


  const {state,signin,signout} = useContext(AuthContext)
  if (state.token){
    
    history.push('/admin/equipe')
  }else{
    console.log(null)
  }
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });
  
  useEffect(()=>{
    window.localStorage.clear()
    signout()
  },[])
  
  return (
    <div className='mainContainer backgroundImage' >
      
    <div className='loginContainer'>
      <AuthForm
       values={values}
       setValues={setValues}
       funcao={()=>signin(values)}
       textButton='Entrar'
      />
    </div>
  </div>
  )
}

export default Login