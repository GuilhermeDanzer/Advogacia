import createDataContext from './createDataContext'
import api from '../api/api'




const authReducer = (state,action) =>{
  switch(action.type){
    case 'add_error':
      return {...state, errorMessage:action.payload}
    case 'signin':
      return {errorMessage:'',token:action.payload}
    case 'clear_error_message':
      return {...state, errorMessage:''}
    case 'signout':
      return {token:null, errorMessage:''}
    default:
      return state
  }
}




const clearErrorMessage = dispatch => ()=>{
  dispatch({type:'clear_error_message'})
}
// Cadastrar
/*const signup  = dispatch => async ({email,password})=>{
  try{      
    const response = await api.post('/signup',{email,password})
    window.localStorage.setItem('token',response.data.token)
    dispatch({type:'signin',payload:response.data.token})
  }catch(err){
    console.log(err.response.data)
    dispatch({type:'add_error',payload:'Something went wrong with sign up'})    
  }

}
*/

// Entrar
const signin = dispatch => async ({email,password}) =>{
  try {
    const response = await api.post('/signin',{email,password})
    console.log(response.data)
    window.localStorage.setItem('token',response.data.token)
    dispatch({type:'signin',payload:response.data.token})
    
    //navigate('Show')
  } catch (error){
    const erro = error.response.data
    alert(erro.error)
  }

  }


// Sair
const signout = (dispatch) => async () =>{
  await window.localStorage.removeItem('token');
  dispatch({type:'signout'})
}

export const {Provider,Context} = createDataContext (
  authReducer,
  { signin,
    signout,
    clearErrorMessage,},
 {token:null,errorMessage:''}
)