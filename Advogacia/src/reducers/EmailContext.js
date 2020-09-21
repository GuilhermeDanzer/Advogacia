import createDataContext from './createDataContext'
import api from '../api/api'




const emailReducer = (state,action) =>{
  switch(action.type){
    case 'sendEmail':
      return {...state,msg:action.payload}
  }
}


const sendEmail = dispatch => async (valores) =>{
  try {

    const response = await api.post('/sendEmail',valores)
    dispatch({type:'sendEmail',payload:response.data.msg})
    
   
    //navigate('Show')
  } catch (error){
    const erro = error.response.data
    dispatch({type:'sendEmail',payload:'Ocorreu um erro no envio, tente novamente mais tarde'})
  }
}

export const {Provider,Context} = createDataContext (
  emailReducer,
  { sendEmail},
 {msg:''}
)